module.exports = {
  pathPrefix: `/platform-onboarding`,
  siteMetadata: {
    title: `UX Platform Onboarding Prototype`,
    siteUrl: `https://cindychangy.github.io/platform-onboarding/`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/**.styles.js', '**/**.data.js'],
      },
    },
  ],
};
