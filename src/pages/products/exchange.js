import React from "react";
import { graphql, withPrefix } from "gatsby";
import "../index.sass";
import Layout from "../../components/layout";
import "./exchange.sass";
import exchangeLogo from "../../resources/exchange-logo.svg";
import exchangeButton from "../../resources/products/exchange-button.svg";
import joinDiscordButton from "../../resources/products/join-discord.svg";
import exchange from "../../resources/exchange.png";
import stepOne from "../../resources/1.svg";
import stepTwo from "../../resources/2.svg";
import stepThree from "../../resources/3.svg";
import sxLiquidity from "../../resources/sx-liquidity.svg";
import sxContract from "../../resources/sx-contract.svg";
import sxDistributed from "../../resources/sx-distributed.svg";

import Accordion from "../../components/Accordion";

const ExchangePage = props => {
	const { synthetixExchangeUrl, discordUrl } = props.data.site.siteMetadata;
	let exchangeScreenshot = withPrefix(`/img/exchange-screenshot.png`);
	return (
		<Layout>
			<div className="exchange-page">
				<section className="section header-section">
					<div className="page-title">
						<img className="product-logo" src={exchangeLogo} />
					</div>
				</section>
				<section className="section exchange-about">
					<div className="columns is-centered exchange-columns">
						<div className="column">
							<div className="icon-img">
								<img src={sxLiquidity}></img>
							</div>
							<div className="p1">Infinite liquidity</div>
						</div>
						<div className="column">
							<div className="icon-img">
								<img src={sxContract}></img>
							</div>
							<div className="p1">Peer-to-contract trading</div>
						</div>
						<div className="column">
							<div className="icon-img">
								<img src={sxDistributed}></img>
							</div>
							<div className="p1">Distributed collateral pool</div>
						</div>
					</div>
					<div className="product-desc">
						Synthetix.Exchange provides an intuitive interface for conversions between
						the full range of Synths available. It provides access to a variety of
						synthetic forms of fiat currencies, cryptocurrencies, and commodities.
					</div>
					<div className="section-image">
						<img src={exchange}></img>
					</div>
				</section>
				<a
					className="purple-button centered"
					href="https://synthetix.exchange"
					target="_blank"
				>
					Visit the dApp
				</a>
				<section className="section how-it-works">
					<div className="section-title is-white sp5">How it works</div>
					<div className="steps is-centered how-steps">
						<div className="column">
							<div className="number-img">
								<img src={stepOne}></img>
							</div>
							<div className="p1">
								Connect your wallet (MetaMask, Trezor, Ledger, Coinbase, etc)
							</div>
						</div>
						<div className="column">
							<div className="number-img">
								<img src={stepTwo}></img>
							</div>
							<div className="p1">
								Choose a Synth to convert from and to convert to, and confirm
							</div>
						</div>
						<div className="column">
							<div className="number-img">
								<img src={stepThree}></img>
							</div>
							<div className="p1">
								Once processed on the blockchain, the exchange is complete
							</div>
						</div>
					</div>
				</section>
				<section className="section exchange-faq">
					<div className="container">
						<div className="section-title is-white sp5">Frequently asked questions</div>
						<Accordion
							title="Hello is this thing on?"
							content="Hell yeah it's working great!"
						/>
						<Accordion
							title="Ok so do I need to pay?"
							content="Apart from ETH as gas, there is a fee for all Synth exchanges."
						/>
						<Accordion
							title="Hello is this thing on?"
							content="Hell yeah it's working great!"
						/>
						<div className="faq">
							<p class="subtitle">What is a synthetic asset?</p>
							<p>
								A synthetic asset is an asset or mixture of assets that has/have the
								same value or effect as another asset. Within the Synthetix network,
								synthetic assets (Synths) track the value of underlying assets and
								allow exposure to an asset (e.g. gold) without the requirement of
								actually holding it.
							</p>
						</div>
						<br />
						<div className="faq">
							<p class="subtitle">Does it cost anything to make a trade?</p>
							<p>
								Apart from ETH as gas, there is a fee for all Synth exchanges. It is
								currently 0.30%. These exchange fees are distributed to SNX holders,
								who are providing collateral as backing for all Synths.
							</p>
						</div>
						<br />
						<div className="faq">
							<p class="subtitle">Do I need to hold SNX to use Synthetix.Exchange?</p>
							<p>No, you only require ETH and Synths.</p>
						</div>
						<br />
						<div className="faq">
							<p class="subtitle">
								What happens if the price changes just as I make a transaction?
							</p>
							<p>
								The prices you see at Synthetix.Exchange are the prices at that
								time. when you make a transaction the new price feed is provided by
								our Oracle and the amount you get might be slightly different.
							</p>
						</div>
						<br />
						<div className="faq">
							<p class="subtitle">Is there a price or transaction limit?</p>
							<p>
								No. Since there is no counter party at Synthetix.Exchange, you are
								only limited by your wallet balance.
							</p>
						</div>
						<br />
						<div className="faq">
							<p class="subtitle">What do I need to use Synthetix.Exchange?</p>
							<p>
								You’ll need a compatible ERC20 wallet (currently MetaMask, Ledger
								and Trezor wallets). Secondly, this wallet must contain ETH for gas.
								Thirdly, for you to make a trade your wallet must be holding at
								least 0.01 of a Synth. If it doesn’t hold Synths, you can purchase
								sUSD through Synthetix.Exchange with ETH.
							</p>
						</div>
						<br />
						<div className="faq">
							<p class="subtitle">
								When I trade from one Synth into another, where are these tokens
								coming from?
							</p>
							<p>
								There is no counterparty in Synthetix.Exchange, which means that you
								essentially convert one Synth into another, with the values of each
								Synth in a trade being taken from exchange rates at the time of the
								transaction.
							</p>
						</div>
						<br />
						<div className="faq">
							<p class="subtitle">
								Where does Synthetix Exchange get the prices from?
							</p>
							<p>
								Synthetix.Exchange uses a private oracle that pulls feeds from
								multiple credible financial market resources. We are currently
								looking into options for decentralised oracles.
							</p>
						</div>
						<br />
						<div className="faq">
							<p class="subtitle">How often are prices updated?</p>
							<p>The oracle updates prices every 3 minutes.</p>
						</div>
						<br />
						<a class="discord-button" href={discordUrl} target="_blank">
							<img src={joinDiscordButton} />
						</a>
					</div>
				</section>
			</div>
		</Layout>
	);
};
export const query = graphql`
	query ExchangePageQuery {
		site {
			siteMetadata {
				synthetixExchangeUrl
				discordUrl
			}
		}
	}
`;

export default ExchangePage;
