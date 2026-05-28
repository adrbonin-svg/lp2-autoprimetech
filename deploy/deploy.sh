#!/usr/bin/env bash
#
# Script de deploy inicial - lp2.autoprimetech.com.br
# Rodar no VPS HostGator (143.95.209.140) como root.
#
set -euo pipefail

DOMAIN="lp2.autoprimetech.com.br"
APP_DIR="/var/www/lp2-autoprimetech"
REPO_URL="${REPO_URL:-}"   # exporte antes: export REPO_URL=git@github.com:adrbonin-svg/lp2-autoprimetech.git
NODE_VERSION="20"

log() { echo -e "\033[0;36m[deploy]\033[0m $*"; }
err() { echo -e "\033[0;31m[ERRO]\033[0m $*" >&2; exit 1; }

# 1. Validar Node 20+
if ! command -v node >/dev/null; then
    log "Instalando Node.js $NODE_VERSION..."
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
    apt-get install -y nodejs
fi

NODE_MAJOR=$(node -v | sed 's/v\([0-9]*\).*/\1/')
[ "$NODE_MAJOR" -ge 20 ] || err "Node >= 20 necessário (atual: v$NODE_MAJOR)"

# 2. Instalar PM2 global
if ! command -v pm2 >/dev/null; then
    log "Instalando PM2..."
    npm install -g pm2
fi

# 3. Instalar/atualizar Bun (opcional, fallback npm)
if ! command -v bun >/dev/null; then
    log "Instalando Bun..."
    curl -fsSL https://bun.sh/install | bash
    export PATH="$HOME/.bun/bin:$PATH"
fi

# 4. Clonar/atualizar repositório
if [ -d "$APP_DIR/.git" ]; then
    log "Atualizando repositório..."
    cd "$APP_DIR"
    git fetch origin
    git reset --hard origin/main
else
    log "Clonando repositório..."
    [ -n "$REPO_URL" ] || err "Defina REPO_URL ou crie $APP_DIR manualmente"
    git clone "$REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
fi

# 5. Validar .env
if [ ! -f .env ]; then
    log "Criando .env a partir do .env.example..."
    cp .env.example .env
    log "ATENÇÃO: edite $APP_DIR/.env com as keys reais antes de continuar."
fi

# 6. Instalar dependências e build
log "Instalando dependências..."
if command -v bun >/dev/null; then
    bun install --production=false
else
    npm ci
fi

log "Buildando Next.js..."
npm run build

# 7. PM2: start ou reload
if pm2 list | grep -q "lp2-autoprimetech"; then
    log "Recarregando PM2 cluster..."
    pm2 reload deploy/ecosystem.config.cjs --update-env
else
    log "Iniciando PM2 cluster..."
    pm2 start deploy/ecosystem.config.cjs
fi
pm2 save

# 8. Nginx
if [ ! -f "/etc/nginx/sites-available/$DOMAIN" ]; then
    log "Configurando Nginx..."
    cp deploy/nginx.conf "/etc/nginx/sites-available/$DOMAIN"
    ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
fi

nginx -t || err "Configuração Nginx inválida"
systemctl reload nginx

# 9. SSL Let's Encrypt (Certbot)
if [ ! -d "/etc/letsencrypt/live/$DOMAIN" ]; then
    log "Emitindo certificado SSL para $DOMAIN..."
    if ! command -v certbot >/dev/null; then
        apt-get install -y certbot python3-certbot-nginx
    fi
    certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos -m adr.bonin@gmail.com --redirect
fi

# 10. Validações finais
log "Verificando saúde do serviço..."
sleep 3
if curl -sf -o /dev/null "https://$DOMAIN"; then
    log "✓ Deploy concluído. Site no ar em https://$DOMAIN"
else
    err "Site não respondeu HTTP 200. Verifique 'pm2 logs lp2-autoprimetech'"
fi

# 11. Cron de renovação SSL (idempotente)
if ! crontab -l 2>/dev/null | grep -q "certbot renew"; then
    log "Adicionando cron de renovação SSL..."
    (crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet --post-hook 'systemctl reload nginx'") | crontab -
fi

log "✓ Tudo pronto."
log "Próximos passos:"
log "  1. Configurar DNS Cloudflare: A record lp2 -> 143.95.209.140 (proxy DESLIGADO ou nuvem cinza para SSL inicial)"
log "  2. Editar $APP_DIR/.env com tokens reais (Meta CAPI, GTM, Pixel, GA4)"
log "  3. pm2 reload lp2-autoprimetech --update-env"
log "  4. Validar https://$DOMAIN/sitemap.xml e /robots.txt"
log "  5. Cadastrar sitemap no Google Search Console"
