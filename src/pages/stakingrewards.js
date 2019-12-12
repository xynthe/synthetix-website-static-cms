import React from "react";
import { graphql, withPrefix } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";
import "./stakingrewards.sass";

const StakingRewardsPage = () => {
	return (
		<Layout>
			<div className="staking-rewards-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">SNX Staking Rewards</h1>
						<div className="page-subtitle">
							A comprehensive guide to how SNX staking rewards work
						</div>
					</div>
				</section>
				<section className="section is-white">
					<div className="container">
						<div className="subtitle">Introduction</div>
						<div className="section-desc sp1 mb-20">
							In March 2019 we announced a major update to the Synthetix monetary
							policy: the addition of SNX staking rewards. It was then updated in
							December 2019 through community governance. These updates ensure that
							from March 2019 to August 2023, the total SNX supply will increase from
							100,000,000 to 260,263,816, with a weekly decay rate of 1.25% (from
							December 2019). From September 2023, there will be an annual 2.5%
							terminal inflation for perpetuity.
						</div>
						<br />
						<div className="subtitle">Why staking rewards were implemented</div>
						<div className="section-desc sp1 mb-20">
							We outlined in detail{" "}
							<a
								href="https://blog.synthetix.io/synthetix-monetary-policy-changes"
								target="_blank"
							>
								here
							</a>{" "}
							why this change to the monetary policy was implemented. The primary
							reason is that in the early stages of a project, much like Bitcoin’s
							block rewards, staking rewards provide an incentive for people to
							contribute to the system by performing an action the system requires,
							and that incentive is receiving more of the currency itself. During the
							project’s early stages, before the system has generated significant
							traction, offering SNX stakers only Synth exchange rewards is
							insufficient until it generates more Synth exchange rewards.
						</div>
						<div className="subtitle">How it works</div>
						<div className="section-desc sp1 mb-20">
							Each week, each SNX staker can claim their proportion of the weekly SNX
							staking rewards. Their rewards are calculated by measuring what
							proportion of the total Synth supply they have minted against their SNX.
							For example, if Alice has minted 1000 sUSD, and there is a total of
							1,000,000 sUSD minted, then she receives 0.1% of the staking rewards.
							<br />
							<br />
							SNX is added to the supply each week. The snapshot for the first week
							(March 12-18) to determine who was staking their SNX was taken on
							Wednesday March 19. The snapshot for each subsequent week is taken each
							Wednesday evening at about 8pm (AEDT).
							<br />
							<br />
							SNX rewards can be claimed for up to two weeks in arrears (this period
							may be changed in the future). Any unclaimed rewards (beyond the given
							two weeks) are simply added back into the entire pool of SNX rewards to
							be distributed in the next reward period.
						</div>
						<div className="subtitle">How to claim</div>
						<div className="section-desc sp1 mb-20">
							Claiming your SNX staking rewards can be done through{" "}
							<a href="https://mintr.synthetix.io" target="_blank">
								Mintr
							</a>
							, our dApp for SNX holders. You can access it through Metamask or
							directly using a Trezor or Ledger hardware wallet. Once you’ve connected
							your wallet, head to the ‘Rewards’ tab, where you can withdraw your
							rewards.{" "}
						</div>
					</div>
				</section>
				<section className="section">
					<div className="section-title white pb-50">
						Collateralisation ratio penalties
					</div>
					<div className="section-desc mb-20">
						If your Collateralisation Ratio (i.e. the ratio between the value of your
						locked SNX value and the sUSD you’ve minted) is below 750% (plus a small
						buffer to allow for minor price fluctuations, then you’ll be unable to claim
						any SNX staking rewards or Synth exchange rewards until you’ve amended it to
						the optimal 750%.
					</div>
					<div className="section-desc pt-30">
						* There is no penalty per se for being collateralised over 750%, but given
						that SNX staking rewards are calculated by measuring your minted proportion
						of the total Synths available, if you have minted less than you could have
						then you will receive less rewards.
					</div>
				</section>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query StakingRewardsPageQuery {
		allFile(filter: { name: { eq: "stakingrewards" }, sourceInstanceName: { eq: "pages" } }) {
			edges {
				node {
					childPagesJson {
						metaTitle
						metaDescription
						heading
					}
				}
			}
		}
	}
`;

export default StakingRewardsPage;
