module.exports = (options) => ({
  siteMetadata: {
    siteTitle: `Gommit`,
    siteTitleAlt: `Gommit`,
    siteHeadline: `Gommit`,
    siteUrl: `https://minimal-blog.lekoarts.de`,
    siteDescription: `My Digital Garden`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
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
