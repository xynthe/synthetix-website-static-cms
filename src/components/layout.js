import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import "../styles/bulma/bulma.sass";
import "../styles/main.sass";
import Header from "./Header";
import Footer from "./Footer";
import favicon from "../resources/favicon.ico";

const Layout = ({ children }) => (
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
					}
				}
			}
		`}
		render={data => {
			let { title, keywords, description, ogImage } = data.site.siteMetadata;
			return (
				<>
					<Helmet
						title={title}
						meta={[
							{ name: "description", content: description },
							{ name: "keywords", content: keywords }
						]}
						link={[{ rel: "shortcut icon", href: `${favicon}` }]}
					>
						<html lang="en" />
						<meta property="og:image" content={ogImage} />
						<meta property="og:description" content={description} />
					</Helmet>
					<Header siteTitle={title} />
					<>{children}</>
					<Footer {...data.site.siteMetadata} />
					<a className="discord-btn" href="https://discord.gg/AEdUHzt"></a>
				</>
			);
		}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
