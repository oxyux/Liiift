module.exports = {
  siteMetadata: {
    title: `Liiift`,
    description: `Liiift your business`,
    author: `Liift`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        indentedSyntax: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
        options: {
          // Your GraphCMS API endpoint. Available from your project settings.
          endpoint: "https://api-eu-central-1.graphcms.com/v2/cklik2c2c8qjy01z6a5kj6tx4/master"
          // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
          //token: process.env.GRAPHCMS_TOKEN
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
