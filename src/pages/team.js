import React, { Fragment } from "react";
import { graphql, withPrefix } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";
import "./team.sass";
import TeamMember from "../components/TeamMember";

const TeamPage = ({ data }) => {
	let teamMembers = data.allFile.edges[0].node.childPagesJson.teamMembers;
	// let openPositions = data.allFile.edges[0].node.childPagesJson.openPositions;
	const openPositions = []
	
	return (
		<Layout>
			<div className="team-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">Meet the Team</h1>
						<div className="page-subtitle">
							A multidisciplinary team with proven ability to deliver complex solutions
						</div>
					</div>
				</section>
				<section className="section team-members">
					<div className="container">
						<div className="columns is-multiline">
							{teamMembers.map(el => (
								<TeamMember
									name={el.fullName}
									imgUrl={withPrefix(el.image)}
									title={el.title}
									bio={el.bio}
									linkedInUrl={el.linkedInUrl}
								/>
							))}
						</div>
					</div>
				</section>
				<section className="section join-team-section pt-100 pb-100">
					<div className="container">
						<div className="section-title white pb-30">Join the Team</div>
						<div className="section-desc pb-50">
							We are looking for highly skilled individuals to join the Synthetix team and help us
							deliver a decentralised payment network and stablecoin to the world. If you're looking
							for a challenging project and want to contribute to building a critical layer of the
							blockchain ecosystem, then please get in touch!
						</div>
						{openPositions &&
							openPositions.length > 0 && (
								<Fragment>
									<div className="section-title is-subtle white pb-40">Open Positions</div>
									<a className="columns open-positions pb-40" href="mailto:careers@synthetix.io">
										{openPositions &&
											openPositions.length > 0 &&
											openPositions.map((el, idx) => (
												<div className="column" key={idx}>
													<div>{el.title}</div>
												</div>
											))}
									</a>
								</Fragment>
							)}
						<div className="section-desc join-team-desc">
							Looking to join the team but don’t see a position suited to you? We’re always
							interested in hearing from people who are interested in joining our mission. Say hello
							at <a href="mailto:careers@synthetix.io">careers@synthetix.io</a>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default TeamPage;

export const query = graphql`
	query TeamPageQuery {
		allFile(filter: { name: { eq: "team" }, sourceInstanceName: { eq: "pages" } }) {
			edges {
				node {
					childPagesJson {
						teamMembers {
							fullName
							title
							bio
							linkedInUrl
							image
						}
					}
				}
			}
		}
	}
`;
