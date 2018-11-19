import React, { Fragment } from "react";
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
		isOpen: false,
		isMobile: false,
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
	mobileCheck() {
		let check = false;
		(function(a) {
			if (
				/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
					a
				) ||
				/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
					a.substr(0, 4)
				)
			)
				check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
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

	componentDidMount() {
		const isMobile = this.mobileCheck();
		this.setState({ isMobile: isMobile });
	}

	render() {
		let { isOpen, isMobile, showThanks, emailAddress } = this.state;
		return (
			<Layout>
				<div className="home-page">
					<section className="section pb-30">
						<div className="container">
							<h1 className="page-title">
								Powering payments
								<br /> for dApps
							</h1>
							<div className="page-subtitle">
								Havven enables stable, censorship resistant payments for dApps in multiple
								currencies. Our stablecoins are backed by a network of eighty thousand token holders
								around the world.
							</div>

							<div className="columns is-centered main-buttons">
								<div className="column is-narrow has-text-centered">
									{!isMobile ? (
										<a
											href="javascript:void(0)"
											className="is-button is-subtle-alt is-blue main-button"
											onClick={() => {
												this.setState({ isOpen: true });
												this.startVideo();
											}}
										>
											<img src={icoPlay} className="is-icon" alt="Intro" /> Intro
										</a>
									) : (
										<a
											href="https://vimeo.com/254987969"
											target="_blank"
											className="is-button is-subtle-alt is-blue main-button"
										>
											<img src={icoPlay} className="is-icon" alt="Intro" /> Intro
										</a>
									)}
								</div>
								<div className="column is-narrow has-text-centered">
									<Link to="/contact-us" className="is-button is-simple main-button">
										Contact Us
									</Link>
								</div>
							</div>
							<div className="has-text-centered pb-10">
								<Link to="/eosio" className="is-button is-announcement">
									<span>NEW</span>
									<span>Havven launching on EOSIO</span>
								</Link>
							</div>
						</div>
					</section>
					<section className="section currency-section pb-110 pt-30">
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
							Havven provides a multicurrency suite of stablecoins.
						</div>
						<div className="section-desc">
							Our stablecoin, nomins, are currently available in nUSD with nEUR, nJPY, nKRW, nAUD,
							nXAU, and more coming in the near future!
						</div>
					</section>
					<section className="section is-padded">
						<div className="section-title is-white is-narrow pb-50">
							Havven is built for engineers
						</div>
						<CodeBox />
						<div className="has-text-centered">
							<a
								href="https://developer.havven.io/"
								target="_blank"
								className="is-button is-blue is-wide is-subtle"
							>
								View our Developer Portal
							</a>
						</div>
					</section>
					<section className="section is-white is-padded pb-110">
						<div className="section-title is-large">Get rewarded for maintaining stability</div>
						<div className="section-desc pb-70">
							HAV holders who mint nomins are entitled to receive fees generated by nomin
							transactions.
						</div>
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
									<div className="p3">An overview of the Havven network</div>
								</div>
							</a>
							<a className="column" href="https://swappr.io/" target="_blank">
								<div className="c-top">
									<img src={icoUser1} alt="For new users" />
									<div className="p1 blue">For New Users</div>
								</div>
								<div className="c-bottom">
									<div className="p2 blue">Swappr</div>
									<div className="p3">Easily swap ETH for HAV and nUSD</div>
								</div>
							</a>
							<a className="column" href="https://mintr.havven.io/" target="_blank">
								<div className="c-top">
									<img src={icoUser3} alt="For experienced users" />
									<div className="p1 green">For Experienced Users</div>
								</div>
								<div className="c-bottom">
									<div className="p2 green">Mintr</div>
									<div className="p3">Mint nUSD and collect fees</div>
								</div>
							</a>
						</div>
					</section>
					<section className="section is-grey is-padded">
						<div className="section-title">Our network is decentralised</div>
						<div className="section-desc mb-80">
							The Havven payment network is designed to be decentralised and trustless.
						</div>
						<div className="columns is-centered feature-boxes">
							<div className="column">
								<div className="c-img">
									<img src={icoTriangle} alt="Trustless" />
								</div>
								<div className="p1">Trustless</div>
								<div className="p2">
									A distributed pool of token holders are responsible for maintaining stability.
								</div>
							</div>
							<div className="column">
								<div className="c-img">
									<img src={icoShield} alt="Censorship resistant" />
								</div>
								<div className="p1">Censorship Resistant</div>
								<div className="p2">
									Collateral is provided by individual HAV holders, which means it can’t be seized.
								</div>
							</div>
							<div className="column">
								<div className="c-img">
									<img src={icoEye} alt="Transparent" />
								</div>
								<div className="p1">Transparent</div>
								<div className="p2">
									Our collateral is on-chain so doesn’t require pesky third party audits.
								</div>
							</div>
						</div>
					</section>
					<section className="section is-blue subscribe-section pt-110 pb-130">
						<div className="container">
							{!showThanks ? (
								<Fragment>
									<div className="sub-title pb-30">Subscribe to the Havven Mailing List</div>
									<form
										name="mailing-list"
										method="post"
										data-netlify="true"
										data-netlify-honeypot="bot-field"
										onSubmit={this.submitEmail}
									>
										<div className="columns sub-inputs">
											<div className="column is-narrow">
												<input type="hidden" name="bot-field" />
												<input
													name="emailAddress"
													type="text"
													className="input"
													placeholder="Enter your Email Address"
													value={emailAddress}
													onChange={this.handleChange}
												/>
											</div>
											<div className="column is-narrow">
												<button className="is-button is-blue">Subscribe</button>
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
