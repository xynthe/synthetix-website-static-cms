import React from "react";
import "./how-it-works.sass";
import Layout from "../components/layout";
import "./how-it-works.sass";
import icoPlay from "../resources/ico-play.svg";
import icoPlayDark from "../resources/ico-play-dark.svg";
import icoLock from "../resources/ico-lock.svg";
import icoCoins from "../resources/ico-coins.svg";
import icoHandout from "../resources/ico-handout.svg";
import Modal from "../components/Modal";
import Player from "@vimeo/player";
const HOW_IT_WORKS = "howItWorks";
const HOW_NOMINS_ARE_MINTED = "howNominsAreMinted";

export default class HowItWorksPage extends React.Component {
	state = {
		isOpen: false
	};

	howItWorks = null;
	howNominsAreMinted = null;

	startVideo(playerId) {
		this[playerId] = new Player(playerId, {
			id: playerId === HOW_IT_WORKS ? 254987969 : 287966988,
			width: 640
		});
		this[playerId].play();
	}

	pauseVideo(playerId) {
		if (this[playerId]) this[playerId].pause();
	}

	render() {
		let { isOpen, playerId } = this.state;
		return (
			<Layout>
				<div className="how-it-works-page">
					<section className="section header-section">
						<div className="container">
							<h1 className="page-title">How Synthetix Works</h1>
							<div className="page-subtitle">
								There are two kinds of tokens in the Synthetix Network: SNX, the Synthetix network
								token; and Synths such as sUSD, the synthetic assets.
							</div>
						</div>
						<div className="columns is-centered is-hidden">
							<div className="column is-narrow has-text-centered">
								<a
									href="javascript:void(0)"
									className="is-button is-blue is-wide has-icon"
									onClick={() => {
										this.setState({
											isOpen: true,
											playerId: HOW_IT_WORKS
										});
										this.startVideo(HOW_IT_WORKS);
									}}
								>
									<img src={icoPlay} className="is-icon" alt="Intro" /> <span>Intro</span>
								</a>
							</div>
							<div className="column is-narrow has-text-centered">
								<a
									href="javascript:void(0)"
									className="is-button is-white is-wide has-icon"
									onClick={() => {
										this.setState({
											isOpen: true,
											playerId: HOW_NOMINS_ARE_MINTED
										});
										this.startVideo(HOW_NOMINS_ARE_MINTED);
									}}
								>
									<img src={icoPlayDark} className="is-icon" alt="How nomins are minted" />
									<span>How nomins are minted</span>
								</a>
							</div>
						</div>
					</section>
					<section className="section steps-section">
						<div className="container step-1 pb-90">
							<div className="pt-80">
								<div className="step-number-title pb-40">STEP ONE</div>
								<div className="step-title pb-40">Lock SNX as collateral</div>
								<div className="step-desc pb-50">
									SNX holders lock their SNX as collateral to back Synths.
								</div>
								<img src={icoLock} alt="Step One" />
							</div>
						</div>
						<div className="container step-2 pb-90">
							<div className="pt-80">
								<div className="step-number-title pb-40">STEP TWO</div>
								<div className="step-title pb-40">Mint Synths</div>
								<div className="step-desc pb-50">
									Synths are minted into the market, where they can be used for a variety of
									purposes including trading and remittance.
								</div>
								<img src={icoCoins} alt="Step Two" />
							</div>
						</div>
						<div className="container step-3 pb-90">
							<div className="pt-80">
								<div className="step-number-title pb-40">STEP THREE</div>
								<div className="step-title pb-40">Receive rewards as SNX holder</div>
								<div className="step-desc pb-50">
									Circulating Synths generate transaction fees that are distributed to SNX holders,
									rewarding them for providing on-chain synthetic assets.
								</div>
								<img src={icoHandout} alt="Step Three" />
							</div>
						</div>
					</section>
				</div>
				<Modal
					isOpen={isOpen && playerId === HOW_IT_WORKS}
					onRequestClose={() => {
						this.setState({ isOpen: false });
						this.pauseVideo(playerId);
					}}
					className="is-video"
				>
					<div
						data-vimeo-id="254987969"
						data-vimeo-width="840"
						id={HOW_IT_WORKS}
						className="vimeo-container"
					/>
				</Modal>
				<Modal
					isOpen={isOpen && playerId === HOW_NOMINS_ARE_MINTED}
					onRequestClose={() => {
						this.setState({ isOpen: false });
						this.pauseVideo(playerId);
					}}
					className="is-video"
				>
					<div
						data-vimeo-id="287966988"
						data-vimeo-width="840"
						id={HOW_NOMINS_ARE_MINTED}
						className="vimeo-container"
					/>
				</Modal>
			</Layout>
		);
	}
}
