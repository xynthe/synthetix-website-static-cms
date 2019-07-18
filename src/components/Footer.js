import React from "react";
import { Link } from "gatsby";
import "./Footer.sass";
import logoTwitter from "../resources/logo-twitter.svg";
import logoMedium from "../resources/logo-medium.svg";
import logoDiscord from "../resources/logo-discord.svg";
import logoReddit from "../resources/logo-reddit.svg";
import UiImg from "./UiImg";

const Footer = ({
	twitterUrl,
	mediumUrl,
	redditUrl,
	discordUrl,
	dashboardUrl,
	mintrUrl
}) => (
	<footer>
		<section className="section ph-20 pv-0">
			<div className="container">
				<div className="columns justify-content--space-between footer-columns">
					<div className="column is-narrow has-text-centered-mobile logo-box">
						<div className="row">
							<a href="https://ethereum.org/" className="eth-img"><UiImg src="/img/ethereum.svg" alt="Ethereum" /></a>
							<a href="https://defi.network/" className="defi-img"><UiImg  src="/img/defi.svg" alt="Defi" /></a>
						</div>
						<div className="row">
							<a href="https://messari.io/asset/synthetix" className="messari-img"><UiImg src="/img/messari.svg" alt="Messari" /></a>
						</div>
					</div>
					<div className="column is-narrow">
						<div className="columns">
							<div className="column has-text-centered-mobile">
								<ul className="links">
									<li>
										<a href={mintrUrl} target="_blank" rel="noopener noreferrer">
											Mintr
										</a>
									</li>
									<li>
										<a href={dashboardUrl} target="_blank" rel="noopener noreferrer">
											Dashboard
										</a>
									</li>
									<li>
										<a
											href="https://itunes.apple.com/au/app/havven-mobile-app/id1394993748"
											target="_blank"
											rel="noopener noreferrer"
										>
											iOS App
										</a>
									</li>
								</ul>
							</div>
							<div className="column has-text-centered-mobile">
								<ul className="links">
									<li>
										<Link to="/how-it-works">How it Works</Link>
									</li>
									<li>
										<Link to="/team">Team</Link>
									</li>
									<li>
										<a
											href="https://developer.synthetix.io/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Developers
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="column is-narrow has-text-centered-mobile last-column">
						<div>
							<div className="c-top media-links">
								<a href={twitterUrl} target="_blank" rel="noopener noreferrer">
									<img src={logoTwitter} alt="Twitter" />
								</a>
								<a href={mediumUrl} target="_blank" rel="noopener noreferrer">
									<img src={logoMedium} alt="Medium" />
								</a>
								<a href={discordUrl} target="_blank" rel="noopener noreferrer">
									<img src={logoDiscord} alt="Discord" />
								</a>
								<a href={redditUrl} target="_blank" rel="noopener noreferrer">
									<img src={logoReddit} alt="Reddit" />
								</a>
							</div>
							<div className="c-bottom">
								<div className="columns">
									<div className="column">
										<Link to="/terms-of-use">Terms of Use</Link>
									</div>
									<div className="column">
										<Link to="/privacy-policy">Privacy Policy</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</footer>
);

export default Footer;
