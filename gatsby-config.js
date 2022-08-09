module.exports = {
  pathPrefix: "/platform-onboarding",
  siteMetadata: {
    title: `UX Platform Onboarding Prototype`,
    siteUrl: `https://cindychangy.github.io/platform-onboarding/`,
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
