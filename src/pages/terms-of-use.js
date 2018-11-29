import React from "react";
import Layout from "../components/layout";
import "./terms-of-use.sass";

const TermsOfUsePage = () => {
	return (
		<Layout>
			<div className="terms-of-use-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">Terms of Use</h1>
					</div>
				</section>
				<section className="section is-white pb-120">
					<div className="container pb-70">
						<div className="section pv-0">
							<div className="content">
								<ol type="1" className="terms-of-use-list">
									<li>
										<span>Terms</span>
										 <br /> By accessing the website at http://synthetix.io, you are agreeing to be
										bound by these terms of service, all applicable laws and regulations, and agree
										that you are responsible for compliance with any applicable local laws. If you
										do not agree with any of these terms, you are prohibited from using or accessing
										this site. The materials contained in this website are protected by applicable
										copyright and trademark law.
									</li>
									<li>
										<span>Disclaimer</span>
										 <br />
										The materials on Synthetix’s website are provided on an 'as is' basis. Synthetix
										makes no warranties, expressed or implied, and hereby disclaims and negates all
										other warranties including, without limitation, implied warranties or conditions
										of merchantability, fitness for a particular purpose, or non-infringement of
										intellectual property or other violation of rights.  Further, Synthetix does not
										warrant or make any representations concerning the accuracy, likely results, or
										reliability of the use of the materials on its website or otherwise relating to
										such materials or on any sites linked to this site.
									</li>
									<li>
										<span>Limitations</span>
										 <br />
										In no event shall Synthetix or its suppliers be liable for any damages
										(including, without limitation, damages for loss of data or profit, or due to
										business interruption) arising out of the use or inability to use the materials
										on Synthetix’s website, even if Synthetix or a Synthetix authorized
										representative has been notified orally or in writing of the possibility of such
										damage. Because some jurisdictions do not allow limitations on implied
										warranties, or limitations of liability for consequential or incidental damages,
										these limitations may not apply to you.
									</li>
									<li>
										<span>Accuracy of materials</span>
										 <br />
										The materials appearing on the Synthetix website could include technical,
										typographical, or photographic errors. Synthetix does not warrant that any of
										the materials on its website are accurate, complete or current. Synthetix may
										make changes to the materials contained on its website at any time without
										notice. However Synthetix does not make any commitment to update the materials.
									</li>
									<li>
										<span>Links</span>
										 <br />
										Synthetix has not reviewed all of the sites linked to its website and is not
										responsible for the contents of any such linked site. The inclusion of any link
										does not imply endorsement by Synthetix of the site. Use of any such linked
										website is at the user's own risk.
									</li>
									<li>
										<span>Modifications</span>
										 <br />
										Synthetix may revise these terms of service for its website at any time without
										notice. By using this website you are agreeing to be bound by the then current
										version of these terms of service.
									</li>
									<li>
										<span>Governing Law</span>
										 <br />
										These terms and conditions are governed by and construed in accordance with the
										laws of New South Wales, Australia and you irrevocably submit to the exclusive
										jurisdiction of the courts in that State.
									</li>
								</ol>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default TermsOfUsePage;
