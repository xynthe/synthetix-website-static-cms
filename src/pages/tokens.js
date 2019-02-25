import React from "react";
import { graphql, withPrefix } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";
import "./tokens.sass";
import TokenBox from "../components/TokenBox"

const TokensPage = ({ data }) => {
	let tokens = data && data.allFile && data.allFile.edges[0].node.childPagesJson.tokens;
	let otherTokens = tokens && tokens.slice(1, tokens.length)

	return (
		<Layout>
			<div className="tokens-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">Tokens</h1>
						<div className="page-subtitle">
							Contract information about the tokens in the Synthetix Network.
						</div>
					</div>
				</section>
				<section className="section is-white minting-synths">
					{ tokens ? (
						<div className="container">
							<TokenBox title={tokens[0].symbol} tokens={[tokens[0]]}></TokenBox>
							<TokenBox title="Synth" tokens={otherTokens} /> 
						</div>
					) : null }
				</section>		
			</div>
		</Layout>
)};

export const query = graphql`
	query TokensPageQuery {
		allFile(filter: { name: {eq: "tokens" }, sourceInstanceName: { eq: "pages" } }) {
			edges {
				node {
					childPagesJson {
						tokens {
							symbol
							address
							decimals
						}
					}
				}
			}
		}
	}
`;

export default TokensPage;