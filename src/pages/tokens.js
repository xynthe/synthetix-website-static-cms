import React from "react";
import { graphql, withPrefix } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";
import "./tokens.sass";

const TokensPage = (props) => {
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
						
					</div>
				</section>		
			</div>
		</Layout>
)};

export default TokensPage;
