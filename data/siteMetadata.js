const siteMetadata = {
  title: 'Hi!👋',
  author: 'Dorks365',
  headerTitle: 'Our website',
  description: 'Our online place for projects, ideas and everything in between',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://d365blog.vercel.app/',
  siteRepo: 'https://github.com/JoaomdvFerreira/d365-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/logo.png',
  socialBanner: '/static/images/cover.png',
  email: 'joao.mdvferreira@gmail.com',
  github: 'https://github.com/JoaomdvFerreira',
  twitter: 'https://twitter.com/Dorks365',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com/',
  linkedin: 'https://www.linkedin.com/',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_TAG, // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
