import React from "react";
import Layout from "../components/layout";
import "./community.sass";
import { graphql } from "gatsby";
import icoDiscord from "../resources/logo-discord-large.svg";
import icoTwitter from "../resources/logo-twitter-dark.svg";
import icoReddit from "../resources/logo-reddit-dark.svg";
import icoMedium from "../resources/logo-medium-dark.svg";
import icoTelegram from "../resources/logo-telegram-dark.svg";

const CommunityPage = ({ data }) => {
	let { discordUrl, twitterUrl, redditUrl, mediumUrl, telegramUrl } = data.site.siteMetadata;
	return (
		<Layout>
			<div className="community-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">Join our Community</h1>
						<div className="page-subtitle">
							Join the conversation with the rest of the Havven community, and get updates on recent
							news an activity across the Havven Network.
						</div>
					</div>
				</section>
				<section className="section is-white">
					<div className="container">
						<div className="s-title pb-40">
							Discord is the primary destination for all things Havven
						</div>
						<div className="s-desc pb-50">
							Jump in and join the conversation with the Havven team and community!
						</div>
						<a className="join-our-discord-box" href={discordUrl} target="_blank">
							<div className="columns">
								<div className="column is-narrow">
									<img src={icoDiscord} alt="Discord" />
								</div>
								<div className="column">Join our Discord Server</div>
							</div>
						</a>
						<div className="has-text-centered pv-50">
							or follow us on our other social channels for updates
						</div>
						<div className="columns channels pb-40">
							<a className="column" href={twitterUrl} target="_blank">
								<img src={icoTwitter} alt="Twitter" />
								Twitter
							</a>
							<a className="column" href={redditUrl} target="_blank">
								<img src={icoReddit} alt="Reddit" />
								Reddit
							</a>
							<a className="column" href={mediumUrl} target="_blank">
								<img src={icoMedium} alt="Medium" />
								Blog
							</a>
							<a className="column" href={telegramUrl} target="_blank">
								<img src={icoTelegram} alt="Telegram" />
								Telegram
							</a>
						</div>
					</div>
				</section>
				<section className="section is-blue subscribe-section pt-110 pb-130">
					<div className="container">
						<div className="sub-title pb-30">Subscribe to the Havven Mailing List</div>
						<div className="columns sub-inputs">
							<div className="column is-narrow">
								<input type="text" className="input" placeholder="Enter your Email Address" />
							</div>
							<div className="column is-narrow">
								<button className="is-button is-blue">Subscribe</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default CommunityPage;

export const query = graphql`
	query CommunityPageQuery {
		site {
			siteMetadata {
				discordUrl
				twitterUrl
				redditUrl
				mediumUrl
				telegramUrl
			}
		}
	}
`;
