import React, { Fragment } from "react";
import { graphql, Link, withPrefix } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";

import icoUser1 from "../resources/ico-user-level-1.svg";
import icoUser2 from "../resources/ico-user-level-2.svg";
import icoUser3 from "../resources/ico-user-level-3.svg";
import icoUser4 from "../resources/ico-user-level-4.svg";
import icoTriangle from "../resources/ico-triangle.svg";
import icoShield from "../resources/ico-shield.svg";
import icoEye from "../resources/ico-eye.svg";
import icoHandout from "../resources/homepage-handout.svg";
import icoLock from "../resources/homepage-lock.svg";
import icoContract from "../resources/contract.svg";
import icoLiquidity from "../resources/liquidity.svg";
import icoCollateral from "../resources/collateral.svg";
import exchangeLogo from "../resources/exchange-logo.svg";

import Modal from "../components/Modal";
import Player from "@vimeo/player";
import UiImg from "../components/UiImg";
import { Helmet } from "react-helmet";

const bottomLabelTx = "Q4 2018";
const fiatCurrencies = ["susd", "seur", "sjpy", "saud", "skrw", "sgbp", "schf", "scad"];
const cryptoCurrencies = [
	"sbtc",
	"seth",
	"sbnb",
	"ibtc",
	"ieth",
	"ibnb",
	"smkr",
	"sxtz",
	"strx",
	"imkr",
	"ixtz",
	"itrx"
];
const commodities = ["sxau", "sxag"];
const comingSoon = ["sappl", "10x"];
const arrow = withPrefix("/img/arrow-vertical.svg");

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		isOpen: false,
		showThanks: false,
		emailAddress: ""
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

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		e.target.setCustomValidity("");
	};

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

	onInvalid = e => {
		if (!e.target.validity.valid)
			e.target.setCustomValidity(
				"That does not appear to be a valid email address. Please try again."
			);
		else e.target.setCustomValidity("");
	};

	encode = data => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	};

	render() {
		let { isOpen, showThanks, emailAddress } = this.state;
		const { mintrUrl, dashboardUrl, synthetixExchangeUrl } = this.props.data.site.siteMetadata;
		const {
			metaTitle,
			metaDescription,
			heading
		} = this.props.data.allFile.edges[0].node.childPagesJson;

		return (
			<Layout>
				<Helmet title={metaTitle}>
					<meta name="description" content={metaDescription} />
				</Helmet>
				<div className="home-page">
					<section className="section pb-30">
						<div className="container">
							<h1 className="page-title">
								<UiImg
									className="title-logo"
									src={"/assets/synthetix-title.svg"}
									alt="Synthetix"
								/>
							</h1>
							<div className="page-subtitle">Decentralised synthetic assets</div>
							<div className="has-text-centered pb-10">
								<Link to="/products/exchange" className="is-button is-announcement">
									<span>NEW</span>
									<span>
										Trade crypto, commodities, and forex on Synthetix.Exchange!
									</span>
								</Link>
							</div>
						</div>
					</section>
					<section className="section currency-section pb-60 pt-30">
						<div className="container wide">
							<div className={`currency-box`}>
								<div className="currency-title">Fiat currency stablecoins</div>

								<div className="scroll-container">
									<div className="assets-container">
										{fiatCurrencies.map(c => (
											<img src={withPrefix(`/img/${c}_blue.svg`)} />
										))}
									</div>
								</div>
								<img src={arrow} className={`arrow`} />
							</div>
							<div className="currency-box">
								<div className="currency-title">
									Cryptocurrencies (long & short)
								</div>

								<div className="scroll-container">
									<div className="assets-container">
										{cryptoCurrencies.map(c => (
											<img src={withPrefix(`/img/${c}.svg`)} />
										))}
									</div>
									<img src={arrow} className={`arrow`} />
								</div>
							</div>
							<div className="currency-box">
								<div className="currency-title">Commodities</div>
								<div className="small-assets-container">
									{commodities.map(c => (
										<img src={withPrefix(`/img/${c}.svg`)} />
									))}
								</div>
								<div className="currency-title">And coming soon:</div>
								<div className="small-assets-container">
									{comingSoon.map(c => (
										<img src={withPrefix(`/img/${c}.svg`)} />
									))}
								</div>
							</div>
						</div>

						<div className="section-title">Introducing Synths</div>
						<div className="section-desc">
							Synths are tokens that provide exposure to assets such as gold, Bitcoin,
							U.S. Dollars, TESLA, and AAPL within the Ethereum blockchain.
						</div>
						<Link to="/tokens" className="view-synths-button">
							View Synths
						</Link>
					</section>
					<section className="section exchange-section">
						<div className="section-title">
							<img className="exchange-logo" src={exchangeLogo} />
						</div>
						<div className="section-desc pb-70">
							A decentralised trading platform dApp
						</div>
						<div className="columns is-centered exchange-columns">
							<div className="column">
								<div className="c-img">
									<img src={icoLiquidity} alt="Stable" />
								</div>
								<div className="p1">Infinite Liquidity</div>
								<div className="p2">
									Over 20 different Synths are available without liquidity
									limitations.
								</div>
							</div>
							<div className="column">
								<div className="c-img">
									<img src={icoContract} alt="Stable" />
								</div>
								<div className="p1">P2C (peer-to-contract) trading</div>
								<div className="p2">
									Trades are executed quickly and easily, all without an
									orderbook.
								</div>
							</div>
							<div className="column">
								<div className="c-img">
									<img src={icoCollateral} alt="Stable" />
								</div>
								<div className="p1">Distributed Collateral Pool</div>
								<div className="p2">
									A distributed pool of token holders are responsible for
									providing collateral and maintaining stability.
								</div>
							</div>
						</div>
						<a
							className="purple-button centered"
							href="https://synthetix.exchange"
							target="_blank"
						>
							Take me there
						</a>
					</section>
					<section className="section is-white is-padded pb-110">
						<div className="section-title is-large w-auto fs-56 bold">
							Get rewarded for contributing to the system
						</div>
						<div className="section-desc pb-70">
							Become a part of the Synthetix Network today.
						</div>
						<div className="columns is-centered get-rewarded-columns">
							<div className="column">
								<div className="c-img">
									<img src={icoLock} alt="Stable" />
								</div>
								<div className="p1">Receive SNX in exchange for staking</div>
								<a
									className="button"
									href="https://www.synthetix.io/stakingrewards"
									target="_blank"
								>
									Learn More
								</a>
							</div>
							<div className="column">
								<div className="c-img">
									<img src={icoHandout} alt="Stable" />
								</div>
								<div className="p1">Receive exchange fees for staking</div>
								<Link className="button" to="/how-it-works">
									Learn More
								</Link>
							</div>
						</div>
					</section>
					<section className="section is-padded pb-110">
						<div className="section-title is-white is-large w-auto fs-56 bold">
							Meet our products
						</div>
						<div className="section-desc pb-70">
							Here are the dApps and tools for SNX holders and Synth users
						</div>
						<div className="columns is-centered get-rewarded-boxes">
							<a
								className="column"
								href={synthetixExchangeUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="c-top">
									<img src={icoUser4} alt="Synthetix.Exchange" />
								</div>
								<div className="c-bottom">
									<div className="p2">Synthetix.Exchange</div>
									<div className="beta-badge"></div>
									<div className="p3">Exchange Synths without a counterparty</div>
								</div>
							</a>
							<a
								className="column"
								href={mintrUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="c-top">
									<img src={icoUser3} alt="For experienced users" />
								</div>
								<div className="c-bottom">
									<div className="p2">Mintr</div>
									<div className="p3">
										Lock SNX to mint Synths and collect fees
									</div>
								</div>
							</a>
							<a
								className="column"
								href={dashboardUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="c-top">
									<img src={icoUser2} alt="For new and experienced users" />
								</div>
								<div className="c-bottom">
									<div className="p2">Dashboard</div>
									<div className="p3">An overview of the Synthetix network</div>
								</div>
							</a>
						</div>
					</section>
					<section className="section subscribe-section is-padded">
						<div className="container">
							{!showThanks ? (
								<Fragment>
									<div className="section-title fs-36 pb-40">
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
													className="input"
													placeholder="Enter your Email Address"
													value={emailAddress}
													onChange={this.handleChange}
													onInvalid={this.onInvalid}
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
			{"//"} Initialize synthetix-js library with any signer (Metamask, Trezor, Ledger,
			PrivateKey supported)
		</span>
		<br />
		<span className="code-green">const </span>
		{"{"} SynthetixJs {"}"} = <span className="code-green">require</span>(
		<span className="code-white">'synthetix-js'</span>
		);
		<br />
		<span className="code-green">const </span> metaMaskSigner ={" "}
		<span className="code-green">new</span> SynthetixJs.signers.Metamask();
		<br />
		<span className="code-green">const </span> snxjs = new SynthetixJs(
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
		txObj = <span className="code-green">await</span> snxjs
		<br />
		&nbsp;&nbsp;&nbsp;.StablePayments
		<br />
		&nbsp;&nbsp;&nbsp;.transfer(
		<span className="code-white">'0x5C545CA7f9D34857664FDCe6aDC22edcF1D5061f'</span>,<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;snxjs.util.parseEther(
		<span className="code-white">'100'</span>
		));
	</div>
);

export const query = graphql`
	query HomePageQuery {
		site {
			siteMetadata {
				dashboardUrl
				mintrUrl
				synthetixExchangeUrl
			}
		}
		allFile(filter: { name: { eq: "index" }, sourceInstanceName: { eq: "pages" } }) {
			edges {
				node {
					childPagesJson {
						metaTitle
						metaDescription
						heading
					}
				}
			}
		}
	}
`;
