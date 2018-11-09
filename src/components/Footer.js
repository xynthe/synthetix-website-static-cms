import React from "react";
import { Link } from "gatsby";
import "./Footer.sass";
import logo from "../resources/logo-havven.svg";
import logoTwitter from "../resources/logo-twitter.svg";
import logoMedium from "../resources/logo-medium.svg";
import logoDiscord from "../resources/logo-discord.svg";
import logoReddit from "../resources/logo-reddit.svg";

const Footer = ({}) => (
	<footer>
		<section className="section p-0">
			<div className="container">
				<div className="columns justify-content--space-between footer-columns">
					<div className="column is-narrow has-text-centered-mobile">
						<img src={logo} />
					</div>
					<div className="column is-narrow">
						<div className="columns">
							<div className="column has-text-centered-mobile">
								<ul className="links">
									<li>
										<Link>Swappr</Link>
									</li>
									<li>
										<Link>Mintr</Link>
									</li>
									<li>
										<Link>Dashboard</Link>
									</li>
									<li>
										<Link>iOS App</Link>
									</li>
								</ul>
							</div>
							<div className="column has-text-centered-mobile">
								<ul className="links">
									<li>
										<Link>How it Works</Link>
									</li>
									<li>
										<Link>About</Link>
									</li>
									<li>
										<Link>Team</Link>
									</li>
									<li>
										<Link>Developers</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="column is-narrow has-text-centered-mobile last-column">
						<div>
							<div className="c-top media-links">
								<Link>
									<img src={logoTwitter} />
								</Link>
								<Link>
									<img src={logoMedium} />
								</Link>
								<Link>
									<img src={logoDiscord} />
								</Link>
								<Link>
									<img src={logoReddit} />
								</Link>
							</div>
							<div className="c-bottom">
								<div className="columns">
									<div className="column">
										<Link>Terms of Use</Link>
									</div>
									<div className="column">
										<Link>Privacy Policy</Link>
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
