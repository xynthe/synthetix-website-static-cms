import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import Logo from "../resources/logo.svg";
import cx from "classnames";

export default class Header extends React.Component {
	state = {
		isOpen: false
	};

	render() {
		const { isOpen } = this.state;
		return (
			<StaticQuery
				query={graphql`
					{
						allFile(filter: { sourceInstanceName: { eq: "topNav" } }) {
							edges {
								node {
									childTopNavJson {
										id
										title
										key
										link
										isExt
										order
										parentMenu
									}
								}
							}
						}
					}
				`}
				render={data => {
					let allMenuItems = data.allFile.edges.map(el => {
						return el.node.childTopNavJson;
					});
					let topMenuItems = allMenuItems.filter(el => !el.parentMenu).sort(numCompare);
					return (
						<nav className="navbar" role="navigation" aria-label="main navigation">
							<div className="container">
								<div className="navbar-brand">
									<a className="navbar-item site-title" href="/">
										<img src={Logo} alt="Synthetix" />
									</a>

									<a
										role="button"
										className={cx("navbar-burger", { "is-active": isOpen })}
										aria-label="menu"
										aria-expanded="false"
										onClick={() => this.setState({ isOpen: !isOpen })}
									>
										<span aria-hidden="true" />
										<span aria-hidden="true" />
										<span aria-hidden="true" />
									</a>
								</div>
								<div
									className={cx("navbar-menu", {
										"is-active": isOpen
									})}
								>
									<div className="navbar-end">
										{topMenuItems.map((el, idx) => (
											<div className="dropdown is-hoverable" key={idx}>
												<div className="dropdown-trigger">
													<UiLink
														className="navbar-item"
														aria-haspopup="true"
														aria-controls={el.key}
													>
														<span>{el.title}</span>
													</UiLink>
												</div>
												<div className="dropdown-menu" id={el.key} role="menu">
													{allMenuItems
														.filter(el2 => el2.parentMenu === el.key)
														.sort(numCompare)
														.map((el2, idx2) => (
															<UiLink key={idx2} to={el2.link} isExt={el2.isExt}>
																{el2.title}
															</UiLink>
														))}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</nav>
					);
				}}
			/>
		);
	}
}

const numCompare = function(a, b) {
	if (a.order < b.order) return -1;
	if (a.order > b.order) return 1;
	return 0;
};

const UiLink = props => {
	const { to, isExt, ...rest } = props;
	if (to && to.startsWith("/")) {
		return (
			<Link {...rest} to={to}>
				{props.children}
			</Link>
		);
	}

	let target = {};
	if (isExt) {
		target.target = "_blank";
	}

	return (
		<a {...rest} href={to} {...target}>
			{props.children}
		</a>
	);
};
