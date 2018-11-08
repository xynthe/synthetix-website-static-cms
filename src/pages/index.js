import React from "react";
import { Link } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";
import CurrencyBox from "../components/CurrencyBox";

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
			<section className="section">
				<div className="container">
					<div className="columns is-mobile is-centered announcement-box">
						<div className="column is-narrow">
							<a href="https://dashboard.havven.io" className="is-button is-announcement">
								<span>NEW</span>
								<span>Try the new Havven Dashboard!</span>
							</a>
						</div>
					</div>
					<div className="columns is-mobile is-centered announcement-box">
						<div className="column is-narrow">
							<a href="https://dashboard.havven.io" className="is-button is-announcement test">
								<span>NEW</span>
								<span>Try the new Havven Dashboard!</span>
							</a>
						</div>
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
								How it works
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
			<section className="section currency-section">
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
			<section className="section">
				<div className="section-title is-white is-narrow">
					Havven is built for engineers, to enable payments in dApps
				</div>
			</section>
		</div>
	</Layout>
);

export default IndexPage;
