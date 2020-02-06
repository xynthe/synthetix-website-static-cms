import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import Logo from "../resources/logo-synthetix.svg";
import cx from "classnames";
import Menu from "./Menu";
import "./Header.sass";

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
										icon
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

					return (
						<div className="navbar">
							<div className="container" style={{ position: "static" }}>
								<a className="navbar-item site-title" href="/">
									<img src={Logo} alt="Synthetix" />
								</a>
								<Menu allMenuItems={allMenuItems}></Menu>
								<div className="navbar-trade">
									<a
										className="trade-button"
										href="https://beta.synthetix.exchange/"
										target="_blank"
									>
										Trade now
									</a>
								</div>
								<div className="menu-button">X</div>
							</div>
						</div>
						// <nav className="navbar" role="navigation" aria-label="main navigation">
						// 	<div className="container" style={{ position: "static" }}>
						// 		<div className="navbar-brand">
						// 			<a className="navbar-item site-title" href="/">
						// 				<img src={Logo} alt="Synthetix" />
						// 			</a>

						// 			<a
						// 				role="button"
						// 				className={cx("navbar-burger", { "is-active": isOpen })}
						// 				aria-label="menu"
						// 				aria-expanded="false"
						// 				href="javascript:void(0)"
						// 				onClick={() => this.setState({ isOpen: !isOpen })}
						// 			>
						// 				<span aria-hidden="true" />
						// 				<span aria-hidden="true" />
						// 				<span aria-hidden="true" />
						// 			</a>
						// 		</div>
						// 		<div
						// 			className={cx("navbar-menu", {
						// 				"is-active": isOpen
						// 			})}
						// 		>
						// 			<div className="navbar-pages">
						// 				{topMenuItems.map((el, idx) => (
						// 					<div className="dropdown is-hoverable" key={idx}>
						// 						<div className="dropdown-trigger">
						// 							<UiLink
						// 								className="navbar-item"
						// 								aria-haspopup="true"
						// 								aria-controls={el.key}
						// 							>
						// 								<span>{el.title}</span>
						// 							</UiLink>
						// 						</div>
						// 						<div
						// 							className="nav__submenu"
						// 							id={el.key}
						// 							role="menu"
						// 						>
						// 							{allMenuItems
						// 								.filter(el2 => el2.parentMenu === el.key)
						// 								.sort(numCompare)
						// 								.map((el2, idx2) => (
						// 									<UiLink
						// 										key={idx2}
						// 										to={el2.link}
						// 										isExt={el2.isExt}
						// 									>
						// 										{el2.title}
						// 									</UiLink>
						// 								))}
						// 						</div>
						// 					</div>
						// 				))}
						// 			</div>
						// 		</div>
						// 		<div className="navbar-trade">
						// 			<a
						// 				className="trade-button"
						// 				href="alpha.synthetix.exchange"
						// 				target="_blank"
						// 			>
						// 				Trade now
						// 			</a>
						// 		</div>
						// 	</div>
						// </nav>
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
