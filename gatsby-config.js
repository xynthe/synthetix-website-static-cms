const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Havven Website"
  },
  plugins: [
    // Page Settings
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, "content", "pages"),
        name: "pages"
      }
    },
    // Site Settings
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, "content"),
        name: "content"
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-emotion",
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify"
  ]
};