import React from "react";
import { withPrefix } from "gatsby";
import "./TeamMember.sass";
import icoLinkedIn from "../resources/logo-linkedin.svg";

const TeamMember = ({ imgUrl, name, title, bio, linkedInUrl }) => {
	return (
		<div className="column team-member-box">
			<div className="tm-img" style={{ backgroundImage: `url(${imgUrl})` }} />
			<div className="tm-name">{name}</div>
			<div className="tm-title">{title}</div>
			<div className="tm-bio">{bio}</div>
			<a href={linkedInUrl} className="tm-li">
				<img src={icoLinkedIn} alt="LinkedIn" />
			</a>
		</div>
	);
};

export default TeamMember;
