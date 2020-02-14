import React from "react";
import Layout from "../components/layout";
import "./privacy-policy.sass";

const PrivacyPolicyPage = () => {
	return (
		<Layout>
			<div className="privacy-policy-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">Privacy Policy</h1>
					</div>
				</section>
				<section className="section is-white pb-120">
					<div className="container pb-70 pt-70">
						<div className="section pv-0">
							<div className="content">
								<ol type="a" className="privacy-policy-list">
									<li>
										<span>Your privacy is important to us.</span>
										 <br />
										We don’t ask for your personal information unless we truly
										need it. It is Synthetix's policy to respect your privacy
										regarding any information we may collect from you across our
										website,http://synthetix.io.
									</li>
									<li>
										<span>Personal Information</span>
										 <br />
										We may ask you for personal information, such as your name,
										email, address, contact details and payment details. We
										collect only the personal information relevant to providing
										you with a service, and use your information only to ensure
										the fulfilment of this service. You are free to refuse our
										request for your personal information, with the
										understanding that we may be unable to provide you with some
										of your desired services without this information. We do not
										share your personal information with third-parties, except
										where required by law or to protect our own rights. We will
										only retain personal information for as long as necessary to
										provide you with a service.
									</li>
									<li>
										<span>Cookies</span>
										 <br />
										We use “cookies” to collect information about you and your
										activity across our site. A cookie is a small piece of data
										that our website stores on your computer, and accesses each
										time you visit so we can understand how you use our site and
										serve you content based on preferences you have specified.
										If you do not wish to accept cookies from us, you should
										instruct your browser to refuse cookies from our website,
										with the understanding that we may be unable to provide you
										with some of your desired service without them. This policy
										covers only the use of cookies between your computer and our
										website; it does not cover the use of cookies by any
										advertisers.
									</li>
									<li>
										<span>Third-Party Services</span>
										 <br />
										We may employ third-party companies and individuals on our
										websites - for example, analytics providers and content
										partners. These third parties have access to your personal
										information only to perform specific tasks on our behalf,
										and are obligated not to disclose or use it for any other
										purpose.
									</li>
									<li>
										<span>Security</span>
										 <br />
										We take security seriously, and do what we can within
										commercially acceptable means to protect your personal
										information from loss or theft, as well as unauthorized
										access, disclosure, copying, use or modification. That said,
										we advise that no method of electronic transmission or
										storage is 100% secure, and cannot guarantee the absolute
										security of your data.
									</li>
									<li>
										<span>Links to Other Sites</span>
										 <br />
										Our website may link to external sites that are not operated
										by us. Please be aware that we have no control over the
										content and practices of these sites, and cannot assume
										responsibility for their treatment of your personal
										information. This privacy policy only covers our website and
										privacy practices.
									</li>
									<li>
										<span>Changes to our Privacy Policy</span>
										 <br />
										At our discretion, we may change our privacy policy from
										time to time. Your continued use of this site after any
										changes to this policy will be regarded as acceptance of our
										practices around privacy and personal information.
									</li>
									<li>
										<span>Business Transfers</span>
										 <br />
										If we or our assets are acquired, or in the unlikely event
										that we go out of business or enter bankruptcy, we would
										include user information among our assets transferred to or
										acquired by a third party. You acknowledge that such
										transfers may occur, and that any parties who acquire us may
										continue to use your personal information according to this
										policy.
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

export default PrivacyPolicyPage;
