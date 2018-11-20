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
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://havven.io",
				sitemap: "https://havven.io/assets/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }]
			}
		},
		`gatsby-plugin-sitemap`,
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
				short_name: "Havven",
				name: "Havven Website",
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
		"gatsby-plugin-netlify-cms",
		"gatsby-plugin-netlify",
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: "GTM-N2CF6MQ",
				includeInDevelopment: false
			},
		}
	]
};
