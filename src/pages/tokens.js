import React from "react";
import { graphql, withPrefix } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";
import "./tokens.sass";
import TokenBox from "../components/TokenBox"

let localTokens = [
    {
      "symbol": "SNX",
      "address": "0xc011a72400e58ecd99ee497cf89e3775d4bd732f",
      "decimals": 18     
    },
    {
      "symbol": "sUSD",
      "address": "0x57ab1e02fee23774580c119740129eac7081e9d3",
      "decimals": 18
    },
    {
      "symbol": "sEUR",
      "address": "0x3eb064766109d150e4362222df80638bce00e037",
      "decimals": 18
    },
    {
      "symbol": "sAUD",
      "address": "0xed4699f180a14b5974c26f494483f9c327fd381a",
      "decimals": 18
    },
    {
      "symbol": "sKRW",
      "address": "0xdce506b196b0df677d07e718f872cac9bc368a33",
      "decimals": 18
    },
    {
      "symbol": "sJPY",
      "address": "0x559e848a1b6a7afc69ee27f8d20280a42628b2cf",
      "decimals": 18
    },
    {
      "symbol": "sXAU",
      "address": "0xe05d803fa0c5832fa2262465290abb25d6c2bfa3",
      "decimals": 18
    },
    {
      "symbol": "sCHF",
      "address": "0x28af5a2f0cc12f2f19dd946608c945456b52b3f6",
      "decimals": 18
    },
    {
      "symbol": "sGBP",
      "address": "0x0c8a7d55ef593a2cad34894c1523162ee2ffb9ac",
      "decimals": 18
    },
 ]

const TokensPage = ({ data }) => {
	// TODO: fix data
	let tokens = data && data.allFile.edges[0].node.childPagesJson.tokens;

	let otherTokens = localTokens.slice(1, localTokens.length)
	console.log(otherTokens)

	return (
		<Layout>
			<div className="tokens-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">Tokens</h1>
						<div className="page-subtitle">
							Here you can access contract information about the various tokens in the Synthetix Network.
						</div>
					</div>
				</section>
				<section className="section is-white minting-synths">
					<div className="container">
						<TokenBox title={localTokens[0].symbol} tokens={[localTokens[0]]}></TokenBox>
						<TokenBox title="Synth" tokens={otherTokens} /> 
					</div>
				</section>		
			</div>
		</Layout>
)};

// export const query = graphql`
// 	query TokensPageQuery {
// 		allFile(filter: { name: { eq: "tokens" }, sourceInstanceName: { eq: "pages" } }) {
// 			edges {
// 				node {
// 					childPagesJson {
// 						id
// 					}
// 				}
// 			}
// 		}
// 	}
// `;

export default TokensPage;
