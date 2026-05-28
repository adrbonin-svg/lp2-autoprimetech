module.exports = {
  apps: [
    {
      name: 'lp2-autoprimetech',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3210',
      cwd: '/var/www/lp2-autoprimetech',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3210,
      },
      error_file: '/var/log/pm2/lp2-error.log',
      out_file: '/var/log/pm2/lp2-out.log',
      merge_logs: true,
      time: true,
    },
  ],
};
