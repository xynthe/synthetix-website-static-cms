import React from "react";
import { Link } from "gatsby";
import "./Footer.sass";
import logoTwitter from "../resources/logo-twitter.svg";
import logoMedium from "../resources/logo-medium.svg";
import logoDiscord from "../resources/logo-discord.svg";
import logoReddit from "../resources/logo-reddit.svg";
import UiImg from "./UiImg";
import Logo from "../resources/logo-synthetix.svg";

const Footer = ({ twitterUrl, mediumUrl, redditUrl, discordUrl, dashboardUrl, mintrUrl }) => (
	<footer>
		<section className="section ph-20 pv-0">
			<div className="container footer-container">
				<div className="columns justify-content--space-between footer-rows">
					<div className="columns footer-columns">
						<div className="column has-text-centered-mobile">
							<ul className="links">
								<a className="footer-item site-title" href="/">
									<img src={Logo} alt="Synthetix" />
								</a>
							</ul>
						</div>
						<div className="column has-text-centered-mobile">
							<ul className="links">
								<div className="category">Learn</div>
								<li>
									<Link to="/litepaper">Litepaper</Link>
								</li>
								<li>
									<Link to="/tokens">Tokens</Link>
								</li>
								<li>
									<a
										href={"https://blog.synthetix.io/"}
										target="_blank"
										rel="noopener noreferrer"
									>
										Blog
									</a>
								</li>
							</ul>
						</div>
						<div className="column has-text-centered-mobile">
							<ul className="links">
								<div className="category">Products</div>
								<li>
									<Link to="/products/exchange">Synthetix.Exchange</Link>
								</li>
								<li>
									<Link to="/products/mintr">Mintr</Link>
								</li>
								<li>
									<a
										href={"https://dashboard.synthetix.io/"}
										target="_blank"
										rel="noopener noreferrer"
									>
										Dashboard
									</a>
								</li>
							</ul>
						</div>
						<div className="column has-text-centered-mobile">
							<ul className="links">
								<div className="category">Developers</div>
								<li>
									<a
										href="https://developer.synthetix.io/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Dev portal
									</a>
								</li>
								<li>
									<a
										href={"https://developer.synthetix.io/api/docs/home.html"}
										target="_blank"
										rel="noopener noreferrer"
									>
										Synthetix-JS Lib
									</a>
								</li>
								<li>
									<a
										href={
											"https://developer.synthetix.io/api/docs/deployed-contracts.html"
										}
										target="_blank"
										rel="noopener noreferrer"
									>
										Contracts
									</a>
								</li>
								<li>
									<a
										href={"https://github.com/Synthetixio"}
										target="_blank"
										rel="noopener noreferrer"
									>
										Github
									</a>
								</li>
							</ul>
						</div>
						<div className="column has-text-centered-mobile">
							<ul className="links">
								<div className="category">Connect</div>
								<li>
									<Link to="/team">Team</Link>
								</li>
								<li>
									<Link to="/community">Community</Link>
								</li>
								<li>
									<Link to="/contact-us">Contact us</Link>
								</li>
							</ul>
						</div>
						<div className="column last-column">
							<ul className="links">
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
								<li>
									<Link to="/terms-of-use">Terms of Use</Link>
								</li>
								<li>
									<Link to="/privacy-policy">Privacy Policy</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="logo-box">
					<div className="row">
						<a href="https://messari.io/asset/synthetix" className="messari-img">
							<UiImg src="/img/messari.svg" alt="Messari" />
						</a>
					</div>
					<div className="row">
						<a href="https://ethereum.org/" className="eth-img">
							<UiImg src="/img/ethereum.svg" alt="Ethereum" />
						</a>
						<a href="https://defi.network/" className="defi-img">
							<UiImg src="/img/defi.svg" alt="Defi" />
						</a>
					</div>
				</div>
			</div>
		</section>
	</footer>
);

export default Footer;
