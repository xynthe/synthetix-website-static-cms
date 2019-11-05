import React from "react";
import "./index.sass";
import Layout from "../components/layout";
import "./partner-with-us.sass";
import icoScale from "../resources/ico-scale.svg";
import icoShield from "../resources/ico-shield.svg";
import icoChartGrow from "../resources/ico-chart-grow.svg";

const PartnersPage = () => (
	<Layout>
		<div className="partner-with-us-page">
			<section className="section header-section">
				<div className="container">
					<h1 className="page-title">Leave stability to the experts</h1>
					<div className="page-subtitle">
						A stablecoin is a cryptocurrency that is resistant to price volatility,
						allowing it to be used as a stable store of value, medium of exchange, and
						unit of account. Partner with Synthetix to use our cryptoasset-backed
						stablecoins for all your payment needs!
					</div>
				</div>
			</section>
			<section className="section is-white">
				<div className="container">
					<div className="section-title sp7 pt-50">Why integrate with Synthetix</div>
					<div className="section-desc sp1 pb-90">
						Synthetix stablecoins are <span className="strong">stable</span>,{" "}
						<span className="strong">decentralised</span>, and{" "}
						<span className="strong">scalable</span>.
					</div>
					<div className="columns is-centered feature-boxes pb-70">
						<div className="column">
							<div className="c-img">
								<img src={icoScale} alt="Stable" />
							</div>
							<div className="p1">Stable</div>
							<div className="p2">
								Holders of the network’s collateral, SNX tokens, are incentivised to
								keep the value of Synths at $1 (relative to whichever asset they’re
								tracking).
							</div>
						</div>
						<div className="column">
							<div className="c-img">
								<img src={icoShield} alt="Decentralised" />
							</div>
							<div className="p1">Decentralised</div>
							<div className="p2">
								SNX is on the blockchain, totally transparent, and censorship
								resistant. Synths are not collateralized by a centralised party.
							</div>
						</div>
						<div className="column">
							<div className="c-img">
								<img src={icoChartGrow} alt="Scalable" />
							</div>
							<div className="p1">Scalable</div>
							<div className="p2">
								The value of SNX and how many Synths can be minted are primarily
								dependent on Synth transactions, which means that use of the network
								encourages the expansion of the network.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section is-padded">
				<div className="container">
					<div className="section-title white sp2 pb-50">
						Adopting a stablecoin that is already available reduces friction for the
						user
					</div>
					<div className="section-desc sp3 pb-30">
						Users shouldn’t need to go through the process of acquiring different native
						tokens to act throughout the blockchain ecosystem.
					</div>
					<div className="section-desc sp3">
						If your platform has a native token, its value can come from staking or
						other reputation-based actions. We can guide you on the tokenomics of your
						platform and how Synths can fit within it.
					</div>
				</div>
			</section>
			<section className="section is-white is-padded">
				<div className="container">
					<div className="section-title sp2 pb-40">Existing Partnerships</div>
					<div className="section-desc sp4">
						Our existing partnerships include a range of use-cases such as e-Commerce,
						Trading, Payments, and operating as a medium of exchange for other
						protocols.
					</div>
				</div>
			</section>
			<section className="section integrate-with-havven is-padded">
				<div className="container">
					<div className="columns">
						<div className="column is-half first-column">
							<div className="section-title sp5 white">
								How to Integrate with Synthetix
							</div>
							<div className="section-desc sp6 pb-40">
								All of our code is open source, and our Developer Portal makes it
								easy for developers to build on top of the Synthetix Network.
							</div>
							<a
								href="https://developer.havven.io/"
								target="_blank"
								rel="noopener noreferrer"
								className="is-button is-blue w-300 is-center mb-20 d-flex"
							>
								View our Developer Hub
							</a>
							<a
								href="mailto:info@synthetix.io"
								className="is-button is-dark w-300 is-center d-flex"
							>
								Contact our Partnership Team
							</a>
						</div>
						<div className="column is-half second-column">
							<div className="p-title pb-10 purple-light">Full Support</div>
							<div className="p-text pb-20">
								Receive full support from the Synthetix Partnerships team, giving
								you everything you need to integrate Synths into your project.
							</div>
							<div className="p-title pb-10 purple-light">
								Easy Ethereum Integration
							</div>
							<div className="p-text pb-20">
								For all Ethereum-based integrations, there is extremely little setup
								required, and for non-blockchain integrations, a simple setup is
								required using Web 3.0 extensions (as seen in our eStore Proof of
								Concept)
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default PartnersPage;
