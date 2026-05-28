import type { Metadata } from 'next';
import { SITE_URL } from './utils';

export const siteConfig = {
  name: 'AutoPrime Tech',
  domain: 'lp2.autoprimetech.com.br',
  url: SITE_URL,
  title: 'Rastreador Veicular com Bloqueio e App | AutoPrime Tech',
  description:
    'Rastreamento veicular 24h com bloqueio remoto, app em tempo real e central de monitoramento. Instalação rápida em Salvador e região. Solicite seu orçamento pelo WhatsApp.',
  keywords: [
    'rastreador veicular',
    'rastreamento veicular',
    'bloqueador veicular',
    'rastreador para carro',
    'rastreador para moto',
    'rastreador gps',
    'rastreador 4g',
    'monitoramento de frota',
    'cerca eletrônica gps',
    'rastreador com bloqueio',
    'rastreador Salvador',
    'AutoPrime Tech',
  ],
  ogImage: `${SITE_URL}/og-image.jpg`,
  phone: '+55-71-98162-7002',
  phone0800: '0800-580-2770',
  address: {
    street: 'Av. Antonio Carlos Magalhães',
    city: 'Salvador',
    region: 'BA',
    country: 'BR',
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: siteConfig.url, languages: { 'pt-BR': siteConfig.url } },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'AutoPrime Tech - Rastreamento Veicular Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'automotive',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: 'AutoPrime Rastreamento',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: siteConfig.ogImage,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  priceRange: 'R$ 44,90 - R$ 199,90',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -12.9714,
    longitude: -38.5014,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  sameAs: [
    'https://www.instagram.com/autoprimetech',
    'https://www.facebook.com/autoprimetech',
    'https://www.autoprimesat.com.br',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '847',
    bestRating: '5',
    worstRating: '1',
  },
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Rastreamento veicular com bloqueio',
  provider: { '@id': `${siteConfig.url}/#organization` },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Planos de Rastreamento Veicular',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Plano Essencial',
        price: '44.90',
        priceCurrency: 'BRL',
        description: 'Rastreamento GPS + App + Histórico',
      },
      {
        '@type': 'Offer',
        name: 'Plano Premium',
        price: '69.90',
        priceCurrency: 'BRL',
        description: 'Rastreamento + Bloqueio remoto + Cerca eletrônica',
      },
      {
        '@type': 'Offer',
        name: 'Plano Frota',
        price: '199.90',
        priceCurrency: 'BRL',
        description: 'Gestão completa de frota + Central 24h',
      },
    ],
  },
};

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Rastreador Veicular',
      item: `${siteConfig.url}/#planos`,
    },
  ],
};
