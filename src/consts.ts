// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'analogattention'
export const SITE_DESCRIPTION =
  'Analog Attention is about reinforcing the importance of your natural curiosity, and using your own spirit of inquiry to shape your day-to-day.'

// The newsletter lives on Substack. Paste the publication's address here (e.g. 'https://analogattention.substack.com')
// and the subscribe box appears on the home page and under every post; while it is empty the box is hidden,
// because the site itself has nowhere to keep email addresses.
export const SUBSTACK_URL = ''

export const SITE_URL = 'https://analogattention.com/'

// An address that actually receives mail. Leave empty until one exists: the contact page then
// tells readers to reply where they found the post, instead of showing a form that goes nowhere.
export const CONTACT_EMAIL = ''

export const SITE_METADATA = {
  title: {
    default: 'analogattention'
  },
  description:
    'A digital garden for thinking clearly. Essays on attention, curiosity, and living deliberately.',
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
  language: 'en-AU',
  locale: 'en_AU',
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
    locale: 'en_AU',
    siteName: 'analogattention',
    title: 'analogattention',
    description:
      'analogattention is a digital garden for thinking clearly. Journals and resources on digital minimalism, intentional technology use, and reclaiming attention.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'analogattention',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    creator: '',
    title: 'analogattention',
    description:
      'analogattention is a digital garden for thinking clearly. Journals and resources on digital minimalism, intentional technology use, and reclaiming attention.',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'analogattention',
  url: SITE_URL,
  logo: `/favicon/android-chrome-512x512.png`,
  sameAs: [] as string[]
}
