import React from "react";
import { Link, withPrefix } from "gatsby";
import "./Menu.sass";

const numCompare = function(a, b) {
	if (a.order < b.order) return -1;
	if (a.order > b.order) return 1;
	return 0;
};

class Menu extends React.Component {
	render() {
		const { allMenuItems, isVisible } = this.props;
		let topMenuItems = allMenuItems.filter(el => !el.parentMenu).sort(numCompare);

		return (
			<nav className="nav">
				<ul className={`nav__menu ${isVisible ? "nav__menu-visible" : ""}`}>
					{topMenuItems.map(topMenuItem => {
						const subMenuItems = allMenuItems
							.filter(el2 => el2.parentMenu === topMenuItem.key)
							.sort(numCompare);

						return (
							<li className="nav__menu-item">
								<div className="nav__menu-item-wrapper">
									<UiLink to={topMenuItem.link}>{topMenuItem.title}</UiLink>
								</div>
								<Submenu items={subMenuItems} />
							</li>
						);
					})}
					<li className="trade-mobile">
						<a
							className="trade-mobile-button"
							href="https://beta.synthetix.exchange/"
							target="_blank"
						>
							TRADE NOW
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

const Submenu = ({ items }) => {
	return (
		<ul className="nav__submenu">
			{items.map(item => (
				<li className="nav__submenu-item">
					<div className="menu-img">
						<img src={withPrefix(`/img/${item.icon}.svg`)}></img>
					</div>
					<UiLink to={item.link}>{item.title}</UiLink>
				</li>
			))}
		</ul>
	);
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

export default Menu;
