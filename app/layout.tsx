import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { defaultMetadata, localBusinessSchema, serviceSchema } from '@/lib/seo';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: '#05080F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        {/* LGPD Consent Manager (Consent Mode v2) — roda antes das tags.
            Seta consent denied por padrão; Pixel/Clarity só carregam após aceite.
            GTM/GA4 abaixo respeitam o Consent Mode nativamente. */}
        <Script
          id="autoprime-lgpd"
          src="https://adm.autoprimetech.com.br/js/lgpd.js"
          strategy="beforeInteractive"
          data-pixel={PIXEL_ID || undefined}
          data-ga4={GA4_ID || undefined}
          data-clarity={CLARITY_ID || undefined}
          data-gtm={GTM_ID || undefined}
          data-policy="/politica-privacidade"
          data-dpo="lgpd@autoprimetech.com.br"
        />

        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}

        {/* Meta Pixel agora é carregado pelo lgpd.js apenas após o consentimento. */}

        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());gtag('config','${GA4_ID}',{anonymize_ip:true});`}
            </Script>
          </>
        )}

        {/* Microsoft Clarity agora é carregado pelo lgpd.js apenas após o consentimento. */}

        {/* AutoPrime Click Shield — fraud detection via BotD + Z-score */}
        <Script
          id="autoprime-click-shield"
          src="https://adm.autoprimetech.com.br/js/cs.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-brand-black font-sans text-ink">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
