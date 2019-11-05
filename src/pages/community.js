import React, { Fragment } from "react";
import Layout from "../components/layout";
import "./community.sass";
import { graphql } from "gatsby";
import icoDiscord from "../resources/logo-discord-large.svg";
import icoTwitter from "../resources/logo-twitter-dark.svg";
import icoReddit from "../resources/logo-reddit-dark.svg";
import icoMedium from "../resources/logo-medium-dark.svg";
import icoTelegram from "../resources/logo-telegram-dark.svg";

class CommunityPage extends React.Component {
	constructor(props) {
		super(props);
		this.emailRef = React.createRef();
	}

	state = {
		showThanks: false,
		emailAddress: ""
	};

	componentDidMount() {
		this.emailRef.current.setCustomValidity(
			"That does not appear to be a valid email address. Please try again."
		);
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	submitEmail = e => {
		e.preventDefault();
		const { emailAddress } = this.state;
		if (!emailAddress) return;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: this.encode({
				"form-name": "mailing-list",
				emailAddress: emailAddress
			})
		})
			.then(() => console.log("Success!"))
			.catch(error => console.log("error", error));
		this.setState({ showThanks: true });
	};

	encode = data => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	};

	render() {
		let {
			discordUrl,
			twitterUrl,
			redditUrl,
			mediumUrl,
			telegramUrl
		} = this.props.data.site.siteMetadata;
		const { showThanks, emailAddress } = this.state;
		return (
			<Layout>
				<div className="community-page">
					<section className="section header-section">
						<div className="container">
							<h1 className="page-title">Join our Community</h1>
							<div className="page-subtitle">
								Join the conversation with the rest of the Synthetix community, and
								get updates on recent news an activity across the Synthetix Network.
							</div>
						</div>
					</section>
					<section className="section is-white is-padded">
						<div className="container">
							<div className="s-title pb-40">
								Discord is the primary destination for all things Synthetix.
							</div>
							<div className="s-desc pb-50">
								Jump in and join the conversation with the Synthetix team and
								community!
							</div>
							<a
								className="join-our-discord-box"
								href={discordUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
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
							<div className="columns channels">
								<a
									className="column"
									href={twitterUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={icoTwitter} alt="Twitter" />
									Twitter
								</a>
								<a
									className="column"
									href={redditUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={icoReddit} alt="Reddit" />
									Reddit
								</a>
								<a
									className="column"
									href={mediumUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={icoMedium} alt="Medium" />
									Blog
								</a>
								<a
									className="column"
									href={telegramUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={icoTelegram} alt="Telegram" />
									Telegram
								</a>
							</div>
						</div>
					</section>
					<section className="section subscribe-section is-padded">
						<div className="container">
							{!showThanks ? (
								<Fragment>
									<div className="section-title white fs-36 pb-40">
										Subscribe to the Synthetix Mailing List
									</div>
									<form
										name="mailing-list"
										method="post"
										data-netlify="true"
										data-netlify-honeypot="bot-field"
										onSubmit={this.submitEmail}
									>
										<div className="columns sub-inputs">
											<div className="column is-narrow lh-1">
												<input type="hidden" name="bot-field" />
												<input
													name="emailAddress"
													type="email"
													ref={this.emailRef}
													className="input"
													placeholder="Enter your Email Address"
													value={emailAddress}
													onChange={this.handleChange}
												/>
											</div>
											<div className="column is-narrow lh-1">
												<button className="is-button ">Subscribe</button>
											</div>
										</div>
									</form>
								</Fragment>
							) : (
								<div className="sub-title pb-30">Thanks for Subscribing!</div>
							)}
						</div>
					</section>
				</div>
			</Layout>
		);
	}
}

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
