module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Gommit`,
    siteTitleAlt: `Finnur's digital garden`,
    siteHeadline: `Finnur's digital garden`,
    siteUrl: `https://gommit.com`,
    siteDescription: `Just my patch of the interwebs with all the weeds, apples and dirty laundry`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@gommit`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})
