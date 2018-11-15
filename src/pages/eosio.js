import React from "react";
import "./eosio.sass";
import Layout from "../components/layout";
import logo from "../resources/logo-eosio.svg";

export default class IosIoPage extends React.Component {
	render() {
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
					<section className="section is-white steps-section" />
				</div>
			</Layout>
		);
	}
}
