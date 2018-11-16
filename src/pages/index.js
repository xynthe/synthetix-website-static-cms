import React from "react";
import { Link } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";
import CurrencyBox from "../components/CurrencyBox";
import icoUser1 from "../resources/ico-user-level-1.svg";
import icoUser2 from "../resources/ico-user-level-2.svg";
import icoUser3 from "../resources/ico-user-level-3.svg";
import icoTriangle from "../resources/ico-triangle.svg";
import icoShield from "../resources/ico-shield.svg";
import icoEye from "../resources/ico-eye.svg";
import icoPlay from "../resources/ico-play.svg";
import Modal from "../components/Modal";
import Player from "@vimeo/player";

const bottomLabelTx = "Q4 2018";
const currencies = [
	{ nCurrency: "nUSD", currency: "USD", currencyNumber: "$1.00" },
	{ nCurrency: "nEUR", currency: "EURO", currencyNumber: "€1.00", bottomLabel: bottomLabelTx },
	{ nCurrency: "nJPY", currency: "YEN", currencyNumber: "¥1.00", bottomLabel: bottomLabelTx },
	{ nCurrency: "nAUD", currency: "AUD", currencyNumber: "$1.00", bottomLabel: bottomLabelTx },
	{ nCurrency: "nKRW", currency: "WON", currencyNumber: "₩1.00", bottomLabel: bottomLabelTx },
	{ nCurrency: "nXAU", currency: "ounce/gold", currencyNumber: "1.00", bottomLabel: bottomLabelTx }
];

class IndexPage extends React.Component {
	state = {
		isOpen: false
	};

	player = null;

	startVideo() {
		this.player = new Player("video-how-it-works", {
			id: 254987969,
			width: 640
		});

		this.player.play();
	}

	pauseVideo() {
		if (this.player) this.player.pause();
	}

	render(){
	let { isOpen } = this.state;
	return (
		<Layout>
			<div className="home-page">
				<section className="section pb-30">
					<div className="container">
						<div className="has-text-centered pb-30">
							<a href="https://dashboard.havven.io" className="is-button is-announcement">
								<span>NEW</span>
								<span>Try the new Havven Dashboard!</span>
							</a>
						</div>
						<h1 className="page-title">Powering payments for decentralised applications.</h1>
						<div className="page-subtitle">
							Havven enables stable, censorship resistant payments for dApps in over 10 currencies.
							Our stablecoins are backed by a network of over eighty thousand collateral holders
							around the world.
						</div>

						<div className="columns is-centered">
							<div className="column is-narrow has-text-centered">
								<a
									href="javascript:void(0)"
									className="is-button is-blue is-subtle-alt"
									onClick={() => {
										this.setState({ isOpen: true });
										this.startVideo();
									}}
								>
									<img src={icoPlay} className="is-icon" alt="Intro" /> Intro
								</a>
							</div>
							<div className="column is-narrow has-text-centered">
								<Link to="/contact-us" className="is-button is-simple">
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section className="section currency-section pb-110 pt-70">
					<div className="container">
						<div className="columns is-centered currency-row">
							{currencies.slice(0, 3).map(el => (
								<CurrencyBox {...el} key={el.currency} />
							))}
						</div>
						<div className="columns is-centered currency-row pb-110">
							{currencies.slice(3).map(el => (
								<CurrencyBox {...el} key={el.currency} />
							))}
						</div>
					</div>

					<div className="section-title">
						Havven provides a suite of stablecoins available in a variety of currencies.
					</div>
					<div className="section-desc">
						Our stablecoin, nomins, are currently available in nUSD, nEUR, nJPY, nKRW, nAUD, and
						nXAU, and we’ll be adding more in the near future!
					</div>
				</section>
				<section className="section is-padded">
					<div className="section-title is-white is-narrow pb-50">
						Havven is built for engineers, to enable payments in dApps
					</div>
					<CodeBox />
					<div className="has-text-centered">
						<a href="https://developer.havven.io/" target="_blank" className="is-button is-blue is-wide is-subtle">
							View our Developer Hub
						</a>
					</div>
				</section>
				<section className="section is-white is-padded pb-110">
					<div className="section-title is-large">Get rewarded for maintaining stability</div>
					<div className="section-desc pb-70">Become a part of the Havven Network today.</div>
					<div className="columns is-centered get-rewarded-boxes">
						<a className="column" href="https://dashboard.havven.io/" target="_blank">
							<div className="c-top">
								<img src={icoUser2} alt="For new and experienced users" />
								<div className="p1 red">
									For New and <br /> Experienced Users
								</div>
							</div>
							<div className="c-bottom">
								<div className="p2 red">Dashboard</div>
								<div className="p3">
									Get a full overview of the Havven network, including where to buy HAV and nomins
								</div>
							</div>
						</a>
						<a className="column" href="https://swappr.io/" target="_blank">
							<div className="c-top">
								<img src={icoUser1} alt="For new users" />
								<div className="p1 blue">For New Users</div>
							</div>
							<div className="c-bottom">
								<div className="p2 blue">Swappr</div>
								<div className="p3">Easily swap your ETH for HAV or nUSD</div>
							</div>
						</a>
						<a className="column" href="https://mintr.havven.io/" target="_blank">
							<div className="c-top">
								<img src={icoUser3} alt="For experienced users" />
								<div className="p1 green">For Experienced Users</div>
							</div>
							<div className="c-bottom">
								<div className="p2 green">Mintr</div>
								<div className="p3">
									Use your HAV holdings to Mint nUSD and collect fees from the Havven Network.
								</div>
							</div>
						</a>
					</div>
				</section>
				<section className="section is-grey is-padded">
					<div className="section-title">Our stablecoins are decentralised</div>
					<div className="section-desc mb-80">
						Nomins, the stablecoins powering the Havven network, are completely decentralised and
						trustless.
					</div>
					<div className="columns is-centered feature-boxes">
						<div className="column">
							<div className="c-img">
								<img src={icoTriangle} alt="Trustless" />
							</div>
							<div className="p1">Trustless</div>
							<div className="p2">HAV holders are responsible for maintaining stability.</div>
						</div>
						<div className="column">
							<div className="c-img">
								<img src={icoShield} alt="Censorship resistant" />
							</div>
							<div className="p1">Censorship Resistant</div>
							<div className="p2">
								Collateral is provided by a distributed network of HAV holders, which means it can’t
								be seized by institutions.
							</div>
						</div>
						<div className="column">
							<div className="c-img">
								<img src={icoEye} alt="Transparent" />
							</div>
							<div className="p1">Transparent</div>
							<div className="p2">
								Our collateral is fully visible on the blockchain and does not require auditing from a
								third party.
							</div>
						</div>
					</div>
				</section>
			</div>
			<Modal
				isOpen={isOpen}
				onRequestClose={() => {
					this.setState({ isOpen: false });
					this.pauseVideo();
				}}
				className="is-video"
			>
				<div data-vimeo-id="254987969" data-vimeo-width="840" id="video-how-it-works" />
			</Modal>
		</Layout>
	);
	}

}

export default IndexPage;

const CodeBox = () => (
	<div className="ui-box is-code code-regular mb-50">
		<span className="code-comment">
			{"//"} Initialize havven-js library with any signer (Metamsak, Trezor, Ledger, PrivateKey
			supported)
		</span>
		<br />
		<span className="code-green">const </span>
		{"{"} HavvenJs {"}"} = <span className="code-green">require</span>(
		<span className="code-white">'havven-js'</span>
		);
		<br />
		<span className="code-green">const </span> metaMaskSigner ={" "}
		<span className="code-green">new</span> HavvenJs.signers.Metamask();
		<br />
		<span className="code-green">const </span> havjs = new HavvenJs(
		{"{"}
		signer: metaMaskSigner
		{"}"}
		);
		<br />
		<br />
		<span className="code-comment">
			{"//"} Transfer stablecoins to any ethereum address, wallet or smart contract
		</span>
		<br />
		<span className="code-green">const </span>
		txObj = <span className="code-green">await</span> havjs
		<br />
		&nbsp;&nbsp;&nbsp;.StablePayments
		<br />
		&nbsp;&nbsp;&nbsp;.transfer(
		<span className="code-white">'0x5C545CA7f9D34857664FDCe6aDC22edcF1D5061f'</span>,<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;havjs.util.parseEther(
		<span className="code-white">'100'</span>
		));
	</div>
);
