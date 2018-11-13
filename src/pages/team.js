import React from "react";
import { graphql } from "gatsby";
import "./index.sass";
import Layout from "../components/layout";
import "./team.sass";
import TeamMember from "../components/TeamMember";

const TeamPage = () => (
	<Layout>
		<div className="team-page">
			<section className="section header-section">
				<div className="container">
					<h1 className="page-title">Meet the Team</h1>
					<div className="page-subtitle">
						A multi disciplinary team with proven ability to deliver complex solutions
					</div>
				</div>
			</section>
			<section className="section team-members">
				<div className="container">
					<div className="columns is-multiline">
						<TeamMember
							name="Kain Warwick"
							imgUrl="team-kain.png"
							title="Founder"
							bio="Before launching Havven, Kain built the largest cryptocurrency payment platform in Australia, with tens of millions in transaction volume."
						/>
						<TeamMember
							name="Kain Warwick"
							imgUrl="team-kain.png"
							title="Founder"
							bio="Before launching Havven, Kain built the largest cryptocurrency payment platform in Australia, with tens of millions in transaction volume."
						/>
						<TeamMember
							name="Kain Warwick"
							imgUrl="team-kain.png"
							title="Founder"
							bio="Before launching Havven, Kain built the largest cryptocurrency payment platform in Australia, with tens of millions in transaction volume."
						/>
					</div>
				</div>
			</section>
			<section className="section is-white join-team-section">
				<div className="container">
					<div className="section-title">Join the Team</div>
					<div className="section-desc pb-70">
						We are looking for highly skilled individuals to join the Havven team and help us
						deliver a decentralised payment network and stablecoin to the world. If you're looking
						for a challenging project and want to contribute to building a critical layer of the
						blockchain ecosystem, then please get in touch!
					</div>
					<div className="section-title is-subtle pb-30">Open Positions</div>
					<div className="columns open-positions pb-60">
						<div className="column">
							<div>Senior Blockchain Engineer</div>
						</div>
						<div className="column">
							<div>Head of Marketing and Communication</div>
						</div>
						<div className="column">
							<div>Creative Director</div>
						</div>
					</div>
					<div className="section-desc join-team-desc">
						Looking to join the team but don’t see a position suited to you? We’re always interested
						in hearing from people who are interested in joining our mission. Say hello at{" "}
						<a href="mailto:careers@havven.io">careers@havven.io</a>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default TeamPage;
