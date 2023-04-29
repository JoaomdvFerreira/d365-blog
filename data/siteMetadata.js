const siteMetadata = {
  title: 'Dorks365 Blog',
  author: 'Dorks365',
  headerTitle: 'Dorks365 - Projects, Ideas & Innovations',
  description:
    'Discover the latest projects, ideas, and innovations by Dorks365. Join us as we share our insights and thoughts on technology, design, and business.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://d365blog.vercel.app/',
  siteRepo: 'https://github.com/JoaomdvFerreira/d365-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/logoSEO.png',
  socialBanner: '/static/images/cover.png',
  email: 'joao.mdvferreira@gmail.com',
  github: 'https://github.com/JoaomdvFerreira',
  twitter: 'https://twitter.com/Dorks365',
  facebook: 'https://www.facebook.com/Dorks365',
  facebookAppId: process.env.FACEBOOK_APP_ID,
  instagram: 'https://www.instagram.com/Dorks365',
  linkedin: 'https://www.linkedin.com/in/joao-mdvferreira/',
  locale: 'en-US',
  themeColor: '#ffffff',
  categories: [
    { name: 'Technology', slug: 'technology' },
    { name: 'Design', slug: 'design' },
    { name: 'Business', slug: 'business' },
  ],
  analytics: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_TAG,
  },
  newsletter: {
    provider: 'buttondown',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
