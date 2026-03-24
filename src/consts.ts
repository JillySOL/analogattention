// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'analogattention — Essays on Digital Minimalism'
export const SITE_DESCRIPTION =
  'analogattention is a digital garden for thinking clearly. Essays and resources on digital minimalism, intentional technology use, and reclaiming attention.'

export const GITHUB_URL = 'https://github.com/yourusername/analogattention'
export const SITE_URL = 'https://analogattention.com/'

export const SITE_METADATA = {
  title: {
    default: 'analogattention — Essays on Digital Minimalism'
  },
  description:
    'analogattention is a digital garden for thinking clearly. Essays and resources on digital minimalism, intentional technology use, and reclaiming attention.',
  keywords: [
    'digital minimalism',
    'intentional technology',
    'attention economy',
    'deep work',
    'slow living',
    'analog habits',
    'Cal Newport',
    'focus',
    'productivity',
    'mindfulness',
    'technology philosophy',
    'distraction-free living'
  ],
  authors: [{ name: 'analogattention', url: SITE_URL }],
  creator: 'analogattention',
  publisher: 'analogattention',
  robots: {
    index: true,
    follow: true
  },
  language: 'en-US',
  locale: 'en_US',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'analogattention',
    title: 'analogattention — Essays on Digital Minimalism',
    description:
      'analogattention is a digital garden for thinking clearly. Essays and resources on digital minimalism, intentional technology use, and reclaiming attention.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'analogattention — Essays on Digital Minimalism',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@analogattention',
    creator: '@analogattention',
    title: 'analogattention — Essays on Digital Minimalism',
    description:
      'analogattention is a digital garden for thinking clearly. Essays and resources on digital minimalism, intentional technology use, and reclaiming attention.',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
  twitter: 'https://twitter.com/analogattention',
  linkedin: 'https://linkedin.com/company/analogattention',
  discord: 'https://discord.gg/analogattention'
}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'analogattention',
  legalName: 'analogattention',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  foundingDate: '2026',
  address: {
    streetAddress: '123 Web Dev Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94102',
    addressCountry: 'US'
  },
  contactPoint: {
    telephone: '+1-000-000-0000',
    contactType: 'customer support',
    email: 'hello@analogattention.com'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
