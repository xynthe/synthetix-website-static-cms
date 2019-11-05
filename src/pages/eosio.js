import React from "react";
import "./eosio.sass";
import Layout from "../components/layout";
import logo from "../resources/logo-eosio.svg";
import { graphql } from "gatsby";
import logoKuCoin from "../resources/logo-kucoin.svg";
import logoGate from "../resources/logo-gate.svg";

export default class IosIoPage extends React.Component {
	render() {
		const { discordUrl, mediumUrl } = this.props.data.site.siteMetadata;
		return (
			<Layout>
				<div className="iosio-page">
					<section className="section header-section">
						<div className="container">
							<img src={logo} alt="EOSIO" className="logo pb-70 pt-30" />
							<h1 className="page-title">Synthetix is launching on EOS!</h1>
							<div className="page-subtitle">
								Synthetix is launching its synthetic asset platform on EOSIO, and
								50% of all SNXeos tokens are being distributed to SNX holders on
								Ethereum!
							</div>
						</div>
					</section>
					<section className="section is-white steps-section pt-80">
						<div className="container">
							<div className="st-1 pb-40">How to receive SNXeos</div>
							<div className="sd-1 section-desc pb-50">
								The SNXeos Distribution will reward SNX(eth) holders for supporting
								the project, allowing them to help enable stable payments on the
								EOSIO blockchain. In the Synthetix Network, SNX is the collateral
								token that backs Synths such as sUSD. Over $1.5m sUSD has already
								been minted by SNXeth holders!
							</div>
						</div>
						<div className="st-2 pb-10">How it Works</div>
						<div className="content sl-1 pb-80">
							<ul>
								<li>
									50m SNXeos will be distributed between all SNXeth holders that
									hold at least 1000 SNXeth.
								</li>
								<li>
									To determine SNXeth balances, we are taking snapshots of SNXeth
									holdings on November 20, 2018, and December 20, 2018. Wallet
									balances will be recorded as the average balance between those
									two dates, but participants must hold at least 1000 SNXeth on
									the second snapshot.
								</li>
								<li>Exchange wallets are currently not supported.</li>
								<li>
									After the second snapshot, we will advertise a dApp through
									which participants have six months to submit an EOS wallet
									address to receive their SNXeos in.
								</li>
							</ul>
						</div>
						<div className="st-3 pb-50">
							If you wish to purchase SNXeth to receive SNXeos, you can do so at the
							following exchanges
						</div>
						<div className="columns exchanges pb-80">
							<a
								className="column"
								href="https://www.kucoin.com/#/trade.pro/HAV-ETH/"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() =>
									window.ga("send", "pageview", "/tracking/eosio/kucoin")
								}
							>
								<img src={logoKuCoin} alt="KuCoin" />
								<div>
									<div>KuCoin</div>
									<div>USDT, BTC, ETH</div>
								</div>
							</a>
							<a
								className="column"
								href="https://www.gate.io/trade/hav_eth/"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() =>
									window.ga("send", "pageview", "/tracking/eosio/gate")
								}
							>
								<img src={logoGate} alt="Gate.io" />
								<div>
									<div>Gate.io</div>
									<div>USDT, ETH</div>
								</div>
							</a>
						</div>
						<div className="sd-2 pb-90">
							For more details on the SNXeos Distribution, please visit our{" "}
							<a
								href="https://blog.havven.io/haveos-distribution-eligibility-snapshot-dates-and-more-57d928b12c8a"
								target="_blank"
								rel="noopener noreferrer"
							>
								blog
							</a>
							, and if you have any more questions, please come join our community on{" "}
							<a href={discordUrl} target="_blank" rel="noopener noreferrer">
								Discord
							</a>
							.
						</div>
					</section>
				</div>
			</Layout>
		);
	}
}

export const query = graphql`
	query EosIoPageQuery {
		site {
			siteMetadata {
				mediumUrl
				discordUrl
			}
		}
	}
`;
