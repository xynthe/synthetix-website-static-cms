import React from "react";
import { graphql, withPrefix } from "gatsby";
import "../index.sass";
import Layout from "../../components/layout";
import "./exchange.sass";
import exchangeLogo from "../../resources/products/exchange.svg";
import exchangeButton from "../../resources/products/exchange-button.svg";
import joinDiscordButton from "../../resources/products/join-discord.svg";

const ExchangePage = (props) => {
	const { synthetixExchangeUrl, discordUrl } = props.data.site.siteMetadata;
	let exchangeScreenshot = withPrefix(`/img/exchange-screenshot.png`);
	return (
		<Layout>
			<div className="exchange-page">
				<section className="section header-section">
					<div className="container">
						<div className="header-image"><img src={exchangeLogo}/></div>
						<div className="page-subtitle">
							Synthetix.Exchange is a platform for trading between synthetic assets (Synths).
						</div>
					</div>
				</section>
				<section className="section is-white exchange-about">
					<div className="container">
						<div className="section-title sp7 pt-10">Synthetix.Exchange</div>
						<div className="section-desc sp1">
							Synthetix.Exchange provides an intuitive interface for conversions between the full range of Synths available. It provides access to a variety of synthetic forms of fiat currencies, cryptocurrencies, and commodities.
						</div>
						<div className="exchange-button"><a href={synthetixExchangeUrl} target="_blank"><img src={exchangeButton} /></a></div>
					</div>
				</section>
				<section className="section how-it-works">
					<div className="container">
						<div className="columns">
							<div className="column is-half first-column">
								<div className="section-title sp5 white">How it Works</div>
								<div className="section-desc sp6 pb-40">
									You can use Synthetix.Exchange with MetaMask, Trezor, or Ledger wallets. Simply connect a wallet that holds at least one Synth, and your balance will be displayed, along with the conversion rates.
 									<br/><br/>
									Converting is as simple as choosing a Synth to convert from and to convert to, and confirming the transaction. Once it has been processed on the blockchain, you’re all done! All conversions are carried out on-chain.
									<br/><br/>
									If you have any more questions, please come join our community on <a href={discordUrl} target="_blank">Discord</a>. 
								</div>
							</div>
							<div className="column is-half second-column">
								<div className="exchange-screenshot"><img src={exchangeScreenshot} /></div>
							</div>
						</div>
					</div>
				</section>
				<section className="section is-white exchange-faq">
					<div className="container">
						<div className="section-title sp5">FAQs</div>
						<div className="columns">
							<div className="column is-half first-column">
								<p> 
									<p class="subtitle">What is a synthetic asset?</p>
									A synthetic asset is an asset or mixture of assets that has/have the same value or effect as another asset. Within the Synthetix network, synthetic assets (Synths) track the value of underlying assets and allow exposure to an asset (e.g. gold) without the requirement of actually holding it.
								</p>
								<br/>
								<p> 
									<p class="subtitle">Does it cost anything to make a trade?</p>
									Apart from ETH as gas, there is a fee for all Synth exchanges. It is currently 0.30%. These exchange fees are distributed to SNX holders, who are providing collateral as backing for all Synths.
								</p>
								<br/>
								<p> 
									<p class="subtitle">Do I need to hold SNX to use Synthetix.Exchange?</p>
									No, you only require ETH and Synths.
								</p>
								<br/>
								<p> 
									<p class="subtitle">What happens if the price changes just as I make a transaction?</p>
									The prices you see at Synthetix.Exchange are the prices at that time. when you make a transaction the new price feed is provided by our Oracle and the amount you get might be slightly different.
								</p>
								<br/>
								<p> 
									<p class="subtitle">Is there a price or transaction limit?</p>
									No. Since there is no counter party at Synthetix.Exchange, you are only limited by your wallet balance. 
								</p>
							</div>
							<div class="column is-half second-column">
								<p> 
									<p class="subtitle">What do I need to use Synthetix.Exchange?</p>
									You’ll need a compatible ERC20 wallet (currently MetaMask, Ledger and Trezor wallets). Secondly, this wallet must contain ETH for gas. Thirdly, for you to make a trade your wallet must be holding at least 0.01 of a Synth. If it doesn’t hold Synths, you can purchase sUSD through Synthetix.Exchange with ETH. 
								</p>
								<br/>
								<p> 
									<p class="subtitle">When I trade from one Synth into another, where are these tokens coming from?</p>
									There is no counterparty in Synthetix.Exchange, which means that you essentially convert one Synth into another, with the values of each Synth in a trade being taken from exchange rates at the time of the transaction.
								</p>
								<br/>
								<p> 
									<p class="subtitle">Where does Synthetix Exchange get the prices from?</p>
									Synthetix.Exchange uses a private oracle that pulls feeds from multiple credible financial market resources. We are currently looking into options for decentralised oracles.
								</p>
								<br/>
								<p> 
									<p class="subtitle">How often are prices updated?</p>
									The oracle updates prices every 3 minutes. 
								</p>										
								<br/>
								<a class="discord-button" href={discordUrl} target="_blank"><img src={joinDiscordButton} /></a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
)};
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
