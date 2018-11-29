import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql, withPrefix } from "gatsby";
import "../styles/bulma/bulma.sass";
import "../styles/main.sass";
import Header from "./Header";
import Footer from "./Footer";

let siteUrl = process.env.SITE_URL || "https://havven.io";

const Layout = ({ children, ...rest }) => (
	<StaticQuery
		query={graphql`
			query SiteDataQuery {
				site {
					siteMetadata {
						keywords
						description
						title
						twitterUrl
						mediumUrl
						discordUrl
						redditUrl
						ogImage
						swapprUrl
						dashboardUrl
						mintrUrl
					}
				}
			}
		`}
		render={data => {
			let { title, keywords, description, ogImage } = data.site.siteMetadata;
			return (
				<>
					<Helmet title={title}>
						<html lang="en" />
						<meta name="description" content={description} />
						<meta name="keywords" content={keywords} />
						<meta property="og:type" content="website" />
						<meta property="og:image" content={siteUrl + withPrefix(ogImage)} />
						<meta property="og:description" content={description} />
					</Helmet>
					<Header siteTitle={title} />
					<>{children}</>
					<Footer {...data.site.siteMetadata} />
					<a className="discord-btn" href="https://discord.gg/AEdUHzt" />
				</>
			);
		}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
