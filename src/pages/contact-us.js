import React from "react";
import Layout from "../components/layout";
import "./contact-us.sass";
import { graphql } from "gatsby";

const ContactUsPage = ({ data }) => {
	return (
		<Layout>
			<div className="contact-us-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">Contact Us</h1>
					</div>
				</section>
				<section className="section body-section is-white pb-120 pt-80">
					<div className="container pb-70">
					<div className="s-desc pb-50">
					If you’d like to reach out to the Synthetix team in any way, please get in touch with us via the following options.
							</div>
						<div className="columns contacts-section">
							<div
								className="column is-half"
								onClick={() => {
									window.location.href = "mailto:info@synthetix.io";
								}}
							>
								<div className="line-1">General Contact</div>
								<div className="line-2">info@synthetix.io</div>
							</div>
							<div
								className="column is-half"
								onClick={() => {
									window.location.href = "mailto:support@synthetix.io";
								}}
							>
								<div className="line-1">Support</div>
								<div className="line-2">support@synthetix.io</div>
							</div>
						</div>
					</div>
					<div className="container has-text-centered discord-section">
						or say hello on{" "}
						<a
							href={data.site.siteMetadata.discordUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							Discord!
						</a>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default ContactUsPage;

export const query = graphql`
	query ContactUsPageQuery {
		site {
			siteMetadata {
				discordUrl
			}
		}
	}
`;
