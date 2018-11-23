import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import Logo from "../resources/logo-havven.svg";
import cx from "classnames";

let menu = [
	{
		name: "Foundation",
		link: "",
		isExt: false,
		children: [
			{ name: "Team", link: "/team", isExt: false },
			{ name: "Partner with us", link: "/partner-with-us", isExt: false }
		]
	},
	{
		name: "Developers",
		link: "",
		isExt: false,
		children: [
			{ name: "Dev Portal", link: "https://developer.havven.io/api/docs/home.html", isExt: true },
			{
				name: "Havven-JS Lib",
				link: "https://developer.havven.io/api/docs/home.html",
				isExt: true
			},
			{
				name: "Contracts",
				link: "https://developer.havven.io/api/docs/deployed-contracts.html",
				isExt: true
			}
		]
	},
	{
		name: "Learn",
		link: "",
		isExt: false,
		children: [
			{ name: "How It Works ", link: "/how-it-works", isExt: false },
			{ name: "Blog", link: "https://blog.havven.io/", isExt: true },
			{ name: "Whitepaper", link: "https://havven.io/uploads/havven_whitepaper.pdf", isExt: true }
		]
	},
	{
		name: "Products",
		link: "",
		isExt: false,
		children: [
			{ name: "Dashboard", link: "https://dashboard.havven.io/", isExt: true },
			{ name: "Mintr", link: "https://mintr.havven.io/", isExt: true },
			{ name: "Swappr", link: "https://swappr.io/", isExt: true },
			{ name: "eStore", link: "https://shop.havven.io/", isExt: true }
		]
	},
	{
		name: "Connect",
		link: "",
		isExt: false,
		children: [
			{ name: "Community", link: "/community", isExt: false },
			{ name: "Contact Us", link: "/contact-us", isExt: false }
		]
	}
];

export default class Header extends React.Component {
	state = {
		isOpen: false
	};

	render() {
		console.log(this.props.data);
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
										<img src={Logo} alt="Havven" />
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
										{menu.map((el, idx) => (
											<div className="dropdown is-hoverable" key={idx}>
												<div className="dropdown-trigger">
													<UiLink
														className="navbar-item"
														aria-haspopup="true"
														aria-controls={el.name}
													>
														<span>{el.name}</span>
													</UiLink>
												</div>
												<div className="dropdown-menu" id={el.name} role="menu">
													{el.children.map((el2, idx2) => (
														<UiLink key={idx2} to={el2.link} isExt={el2.isExt}>
															{el2.name}
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
