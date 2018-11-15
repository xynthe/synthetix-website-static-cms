const path = require("path");

let siteMeta = require("./content/siteSettings");

module.exports = {
	siteMetadata: siteMeta,
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
		"gatsby-transformer-json",
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-105320791-1",
				head: true
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
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
		"gatsby-plugin-netlify-cms",
		"gatsby-plugin-netlify"
	]
};
