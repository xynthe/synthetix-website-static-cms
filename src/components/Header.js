import React from "react";
import { Link } from "gatsby";
import Logo from "../resources/logo-havven.svg";

const Header = ({ siteTitle }) => (
	<nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="container">
			<div className="navbar-brand">
				<a className="navbar-item site-title" href="/">
					<img src={Logo} alt="Havven" />
				</a>

				<a
					role="button"
					// className={cx('navbar-burger', { 'is-active': isOpen })}
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					// onClick={() => this.setState({ isOpen: !isOpen })}
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>
			<div
				// className={cx('navbar-menu', {
				//   'is-active': isOpen
				// })}
				className="navbar-menu"
			>
				<div className="navbar-end">
					<Link className="navbar-item">Foundation</Link>
					<a className="navbar-item" href="https://developer.havven.io/" target="_blank">Developers</a>
					<Link className="navbar-item">Learn</Link>
					<Link className="navbar-item">Products</Link>
					<Link className="navbar-item">Connect</Link>
				</div>
			</div>
		</div>
	</nav>
);

export default Header;
