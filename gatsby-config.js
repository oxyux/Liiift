require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Liiift`,
    description: `Consultancy agency based in Liverpool`,
    author: `Liift`,
    siteUrl: `https://liiift.co.uk/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sitemap'
    },
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
          endpoint: process.env.GRAPHCMS_URL
          // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
          //token: process.env.GRAPHCMS_TOKEN
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Liiift Consultancy agency based in Liverpool`,
        short_name: `Liiift`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/l-favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout/layout.js`)
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
