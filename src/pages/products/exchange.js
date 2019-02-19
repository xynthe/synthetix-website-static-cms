import React from "react";
import { graphql, withPrefix } from "gatsby";
import "../index.sass";
import Layout from "../../components/layout";
import "./exchange.sass";
import exchangeLogo from "../../resources/products/exchange.svg";
import exchangeButton from "../../resources/products/exchange-button.svg";

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
							Synthetix.Exchange is a platform for converting between synthetic assets (Synths).
						</div>
					</div>
				</section>
				<section className="section is-white exchange-about">
					<div className="container">
						<div className="section-title sp7 pt-10">Synthetix.Exchange</div>
						<div className="section-desc sp1">
							Synthetix.Exchange provides an intuitive interface for conversions between the full range of Synths available (including sUSD, sEUR, sAUD, sJPY, sKRW, and sXAU). It provides access to a variety of synthetic forms of fiat currencies and gold, as well opening up forex trading possibilities. 						</div>
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
									Converting is as simple as choosing a Synth to convert from and to convert to, and confirming the transaction. Once it has been processed on the blockchain, you’re all done! All conversions are on-chain, and thus generate the standard 0.15% fee for all Synth transactions that are distributed to locked SNX holders.
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
