module.exports = {
  pathPrefix: "/cindychangy",
  siteMetadata: {
    title: `UX Platform Onboarding Prototype`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore:  [ 
          '**/**.styles.js',
          '**/**.data.js',
        ],
      },
    },
  ],
}
