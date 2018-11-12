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

const currencies = [
	{ nCurrency: "nUSD", currency: "USD", currencyNumber: "$1.00" },
	{ nCurrency: "nEURO", currency: "EURO", currencyNumber: "€1.00" },
	{ nCurrency: "nJPY", currency: "YEN", currencyNumber: "¥100.00" },
	{ nCurrency: "nAUD", currency: "AUD", currencyNumber: "$1.00" },
	{ nCurrency: "nKRW", currency: "WON", currencyNumber: "₩1000.00" },
	{ nCurrency: "nAUg", currency: "gram/gold", currencyNumber: "1.00" }
];

const IndexPage = () => (
	<Layout>
		<div className="home-page">
			<section className="section pb-30">
				<div className="container">
					<div className="has-text-centered announcement-box">
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
							<Link to="#" className="is-button is-blue is-wide">
								<img src={icoPlay} className="is-icon" /> How it works
							</Link>
						</div>
						<div className="column is-narrow has-text-centered">
							<Link to="#" className="is-button is-simple is-wide">
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
					Our stablecoin, nomins, are currently available in nUSD, nEURO, nJPY, nKRW, nAUD, and
					nAUg, and we’ll be adding more in the near future!
				</div>
			</section>
			<section className="section is-padded">
				<div className="section-title is-white is-narrow pb-50">
					Havven is built for engineers, to enable payments in dApps
				</div>
				<CodeBox />
				<div className="has-text-centered">
					<a href="#" className="is-button is-blue is-wide is-subtle">
						View our Developer Hub
					</a>
				</div>
			</section>
			<section className="section is-white is-padded pb-110">
				<div className="section-title is-large">Get rewarded for maintaining stability</div>
				<div className="section-desc pb-70">Become a part of the Havven Network today.</div>
				<div className="columns is-centered get-rewarded-boxes">
					<div className="column">
						<div className="c-top">
							<img src={icoUser1} />
							<div className="p1 blue">For New Users</div>
						</div>
						<div className="c-bottom">
							<div className="p2 blue">Swappr</div>
							<div className="p3">Easily swap your ETH for HAV or nUSD</div>
						</div>
					</div>
					<div className="column">
						<div className="c-top">
							<img src={icoUser2} />
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
					</div>
					<div className="column">
						<div className="c-top">
							<img src={icoUser3} />
							<div className="p1 green">For Experienced Users</div>
						</div>
						<div className="c-bottom">
							<div className="p2 green">Mintr</div>
							<div className="p3">
								Use your HAV holdings to Mint nUSD and collect fees from the Havven Network.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section is-grey is-padded">
				<div className="section-title">Our stablecoins are decentralised</div>
				<div className="section-desc mb-80">
					Nomins, the stablecoins powering the Havven Network, are completely decentralised and
					trustless.
				</div>
				<div className="columns is-centered feature-boxes">
					<div className="column">
						<div className="c-img">
							<img src={icoTriangle} />
						</div>
						<div className="p1">Trustless</div>
						<div className="p2">HAV holders are responsible for maintaining stability.</div>
					</div>
					<div className="column">
						<div className="c-img">
							<img src={icoShield} />
						</div>
						<div className="p1">Censorship Resistant</div>
						<div className="p2">
							Collateral is provided by a distributed network of HAV holders, which means it can’t
							be seized by institutions.
						</div>
					</div>
					<div className="column">
						<div className="c-img">
							<img src={icoEye} />
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
	</Layout>
);

export default IndexPage;

const CodeBox = () => (
	<div className="ui-box is-code code-regular mb-50">
		<span className="code-comment">// Require the Stripe library with a test secret key.</span>
		<br />
		<span className="code-green">const </span>
		stripe = <span className="code-green">require</span>(
		<span className="code-white">'stripe'</span>
		)(
		<span className="code-white">'sk_test_BQokikJOvBiI2HlWgH4olfQ2'</span>
		);
		<br />
		<br />
		<span className="code-comment">// Create a payment from a test card token.</span>
		<br />
		<span className="code-green">const </span>
		charge = <span className="code-green">await</span> <span className="code-white">stripe</span>
		.charges.create(
		{"{"}
		<br />
		&nbsp;&nbsp;&nbsp;amount: <span className="code-red">2000</span>,<br />
		&nbsp;&nbsp;&nbsp;currency: <span className="code-white">'usd'</span>,<br />
		&nbsp;&nbsp;&nbsp;source: <span className="code-white">'tok_mastercard'</span>,<br />
		&nbsp;&nbsp;&nbsp;description: <span className="code-white">'My first payment'</span>
		<br />
		{"}"}
		);
	</div>
);
