import React from "react";
import "./litepaper.sass";
import Layout from "../components/layout";
import UiImg from "../components/UiImg";

const LITEPAPER_GB = "https://www.synthetix.io/uploads/synthetix_litepaper.pdf";
const LITEPAPER_KR = "https://www.synthetix.io/uploads/synthetix_litepaper_korean.pdf";
const LITEPAPER_CN = "https://www.synthetix.io/uploads/synthetix_litepaper_mandarin.pdf";

export default class LitepaperPage extends React.Component {
	render() {
		return (
			<Layout>
				<div className="litepaper-page">
					<section className="section header-section">
						<div className="container">
							<h1 className="page-title">Read the Litepaper</h1>
						</div>
					</section>
					<section className="section is-white is-padded flags-section">
						<div className="container">
							<div className="s-title pb-40">
								The Litepaper is the best way to find out how Synthetix works.
							</div>
							<div className="s-desc pb-50">Please select your language:</div>
							<div className="flags-container">
								<a href={LITEPAPER_GB} target="_blank" rel="noopener noreferrer">
									<UiImg src="/img/flag-gb.svg" alt="litepaper-english"></UiImg>
								</a>
								<a href={LITEPAPER_KR} target="_blank" rel="noopener noreferrer">
									<UiImg src="/img/flag-kr.svg" alt="litepaper-korean"></UiImg>
								</a>
								<a href={LITEPAPER_CN} target="_blank" rel="noopener noreferrer">
									<UiImg src="/img/flag-cn.svg" alt="litepaper-mandarin"></UiImg>
								</a>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		);
	}
}
