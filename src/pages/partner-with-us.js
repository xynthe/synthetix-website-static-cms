import React from "react";
import "./index.sass";
import Layout from "../components/layout";
import "./partner-with-us.sass";
import icoTriangle from "../resources/ico-triangle.svg";
import icoShield from "../resources/ico-shield.svg";
import icoEye from "../resources/ico-eye.svg";

const PartnersPage = () => (
	<Layout>
		<div className="partner-with-us-page">
			<section className="section header-section">
				<div className="container">
					<h1 className="page-title">Leave stability to the experts</h1>
					<div className="page-subtitle">
						A stablecoin is a cryptocurrency that is resistant to price volatility, allowing it to
						be used as a stable store of value, medium of exchange, and unit of account. Partner
						with Havven to use our stablecoin, nomins, for all your payment needs!
					</div>
				</div>
			</section>
			<section className="section is-white">
				<div className="container">
					<div className="section-title">Why integrate with Havven</div>
					<div className="section-desc sp1 pb-90">
						Nomins are <span className="strong">stable</span>,{" "}
						<span className="strong">decentralised</span>, and{" "}
						<span className="strong">scalable</span>.
					</div>
					<div className="columns is-centered feature-boxes pb-70">
						<div className="column">
							<div className="c-img">
								<img src={icoTriangle} alt="Stable" />
							</div>
							<div className="p1">Stable</div>
							<div className="p2">
								Holders of the network’s collateral, HAV tokens, are incentivised to keep the value
								of nomins at $1.
							</div>
						</div>
						<div className="column">
							<div className="c-img">
								<img src={icoShield} alt="Decentralised" />
							</div>
							<div className="p1">Decentralised</div>
							<div className="p2">
								HAV is on the blockchain, totally transparent, and censorship resistant. Nomins are
								not collateralized by a centralised party.
							</div>
						</div>
						<div className="column">
							<div className="c-img">
								<img src={icoEye} alt="Scalable" />
							</div>
							<div className="p1">Scalable</div>
							<div className="p2">
								The value of HAV and how many nomins can be minted are primarily dependent on nomin
								transactions, which means that use of the network encourages the expansion of the
								network.
							</div>
						</div>
					</div>
					<div className="section-title sp2 pb-50">
						Adopting a stablecoin that is already available reduces friction for the user
					</div>
					<div className="section-desc sp3 pb-30">
						Users shouldn’t need to go through the process of acquiring different native tokens to
						act throughout the blockchain ecosystem.
					</div>
					<div className="section-desc sp3 pb-80">
						If your platform has a native token, its value can come from staking or other
						reputation-based actions. We can guide you on the tokenomics of your platform and how
						nomins can fit within it.
					</div>

					<div className="section-title sp2 pb-40">Existing Partnerships</div>
					<div className="section-desc sp4 pb-50">
						Our existing partnerships include a range of use-cases such as e-Commerce, Trading,
						Payments, and operating as a medium of exchange for other protocols.
					</div>
				</div>
			</section>
			<section className="section is-grey integrate-with-havven is-padded">
				<div className="container">
					<div className="columns">
						<div className="column is-half first-column">
							<div className="section-title sp5">How to Integrate with Havven</div>
							<div className="section-desc sp6 pb-40">
								All of our code is open source, and our Developer Portal makes it easy for
								developers to build on top of the Havven Network.
							</div>
							<a
								href="https://developer.havven.io/"
								target="_blank"
								rel="noopener noreferrer"
								className="is-button is-blue is-wide is-subtle is-center mb-20"
							>
								View our Developer Hub
							</a>
							<a
								href="mailto:info@havven.io"
								className="is-button is-dark is-wide is-subtle is-center"
							>
								Contact our Partnership Team
							</a>
						</div>
						<div className="column is-half second-column">
							<div className="p-title pb-10">Full Support</div>
							<div className="p-text pb-20">
								Recieve full suport from the Havven Partnerships team, giving you everything you
								need to integrate Nomins into your project.
							</div>
							<div className="p-title pb-10">Easy Ethereum Integration</div>
							<div className="p-text pb-20">
								For all Ethereum-based integrations, there is extremely little setup required, and
								for non-blockchain integrations, a simple setup is required using Web 3.0 extensions
								(as seen in our eStore Proof of Concept)
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default PartnersPage;
