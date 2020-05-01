const path = require("path");

let siteMeta = require("./content/siteSettings");

module.exports = {
	siteMetadata: siteMeta,
	plugins: [
		// Products Pages
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: path.join(__dirname, "content", "pages", "products"),
				name: "products"
			}
		},
		// Top Nav
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: path.join(__dirname, "content", "topNav"),
				name: "topNav"
			}
		},
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
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://synthetix.io",
				sitemap: "https://synthetix.io/assets/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }]
			}
		},
		`gatsby-plugin-sitemap`,
		"gatsby-transformer-json",
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				short_name: "Synthetix",
				name: "Synthetix Website",
				start_url: "/",
				background_color: "#0D0A31",
				theme_color: "#0D0A31",
				display: "minimal-ui",
				icon: "src/resources/favicon.png", // This path is relative to the root of the site.
				icons: [
					{
						src: `/favicons/favicon.ico`,
						sizes: `32x32`,
						type: `image/x-icon`
					}
				]
			}
		},
		"gatsby-plugin-offline",
		"gatsby-plugin-sass",
		// "gatsby-plugin-netlify-cms",
		"gatsby-plugin-netlify"
	]
};
