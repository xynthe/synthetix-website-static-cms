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
							<h1 className="page-title">Havven is launching on EOSIO!</h1>
							<div className="page-subtitle">
								Havven is launching its payment network and stablecoin on EOSIO, and 50% of all
								HAVeos tokens are being distributed to HAV holders on Ethereum!
							</div>
						</div>
					</section>
					<section className="section is-white steps-section">
						<div className="container">
							<div className="st-1 pb-40">How to recieve HAVeos</div>
							<div className="sd-1 section-desc pb-50">
								The HAVeos Distribution will reward HAV(eth) holders for supporting the project,
								allowing them to help enable stable payments on the EOSIO blockchain. In the Havven
								payment network, HAV tokens are the collateral token that back nUSD, the stablecoin.
								Over $1.5m nUSD has already been minted by HAVeth holders!
							</div>
						</div>
						<div className="st-2 pb-30">How it Works</div>
						<div className="content sl-1 pb-80">
							<ul>
								<li>
									50m HAVeos will be distributed between all HAVeth holders that hold at least 1000
									HAVeth.
								</li>
								<li>
									To determine HAVeth balances, we are taking snapshots of HAVeth holdings on
									November 20, 2018, and December 20, 2018. Wallet balances will be recorded as the
									average balance between those two dates, but participants must hold at least 1000
									HAVeth on the second snapshot.
								</li>
								<li>Exchange wallets are currently not supported.</li>
								<li>
									After the second snapshot, we will advertise a dApp through which participants
									have six months to submit an EOS wallet address to receive their HAVeos in.
								</li>
							</ul>
						</div>
						<div className="st-3 pb-50">
							If you wish to purchase HAVeth to receive HAVeos, you can do so at the following
							exchanges
						</div>
						<div className="columns exchanges pb-80">
							<a className="column" href="https://www.kucoin.com/#/trade.pro/HAV-ETH/" target="_blank">
								<img src={logoKuCoin} alt="KuCoin" />
								<div>
									<div>KuCoin</div>
									<div>USDT, BTC, ETH</div>
								</div>
							</a>
							<a className="column" href="https://www.gate.io/trade/hav_eth/" target="_blank">
								<img src={logoGate} alt="Gate.io" />
								<div>
									<div>Gate.io</div>
									<div>USDT, ETH</div>
								</div>
							</a>
						</div>
						<div className="sd-2 pb-90">
							For more details on the HAVeos Distribution, please visit our{" "}
							<a href="https://blog.havven.io/haveos-distribution-eligibility-snapshot-dates-and-more-57d928b12c8a" target="_blank">
								blog
							</a>
							, and if you have any more questions, please come join our community on{" "}
							<a href={discordUrl} target="_blank">
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
