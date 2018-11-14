import React from "react";
import "./how-it-works.sass";
import Layout from "../components/layout";
import "./how-it-works.sass";
import icoPlay from "../resources/ico-play.svg";
import icoPlayDark from "../resources/ico-play-dark.svg";
import icoLock from "../resources/ico-lock.svg";
import icoCoins from "../resources/ico-coins.svg";
import icoHandout from "../resources/ico-handout.svg";

const HowItWorksPage = ({ data }) => {
	return (
		<Layout>
			<div className="how-it-works-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">How Havven Works</h1>
						<div className="page-subtitle">
							There are two tokens in the Havven payment network: HAV, the collateral token, and
							nomins, our stablecoin.
						</div>
					</div>
					<div className="columns is-centered">
						<div className="column is-narrow has-text-centered">
							<a href="#video" className="is-button is-blue is-subtle-alt">
								<img src={icoPlay} className="is-icon" alt="How it works" /> Intro Video
							</a>
						</div>
						<div className="column is-narrow has-text-centered">
							<a to="#how-nomins-are-minted" className="is-button is-white is-subtle-alt">
								<img src={icoPlayDark} className="is-icon" alt="How nomins are minted" /> How Nomins
								are Minted
							</a>
						</div>
					</div>
				</section>
				<section className="section is-white steps-section">
					<div className="container step-1 pb-90">
						<div className="pt-80">
							<div className="step-number-title pb-40">STEP ONE</div>
							<div className="step-title pb-40">Lock HAV as collateral</div>
							<div className="step-desc pb-50">
								HAV holders lock their HAV as collateral to back nUSD, our stablecoin.
							</div>
							<img src={icoLock} alt="Step One" />
						</div>
					</div>
					<div className="container step-2 pb-90">
						<div className="pt-80">
							<div className="step-number-title pb-40">STEP TWO</div>
							<div className="step-title pb-40">Mint stablecoins</div>
							<div className="step-desc pb-50">
								Nomins are minted into the market, where they can be used as a stable medium of
								exchange.
							</div>
							<img src={icoCoins} alt="Step Two" />
						</div>
					</div>
					<div className="container step-3 pb-90">
						<div className="pt-80">
							<div className="step-number-title pb-40">STEP THREE</div>
							<div className="step-title pb-40">Reward HAV holders</div>
							<div className="step-desc pb-50">
								Circulating nomins generate transaction fees that are distributed to HAV holders,
								rewarding them for providing stability.
							</div>
							<img src={icoHandout} alt="Step Three" />
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default HowItWorksPage;
