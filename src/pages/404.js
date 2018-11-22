import React from "react";
import Layout from "../components/layout";
import "./404.sass";
import img404 from "../resources/img-404.svg";

const NotFoundPage = () => {
	return (
		<Layout>
			<div className="not-found-page">
				<section className="section header-section">
					<div className="container">
						<h1 className="page-title">404 — Page not found</h1>
						<div className="page-subtitle">
							The page you are looking for has a different URL or no longer
							<br />
							exists.
							<br />
							Try checking the URL, using the navigation bar above, or returning to our homepage.
						</div>
					</div>
				</section>
				<section className="section is-white pb-120">
					<div className="container pb-70">
						<div className="section pv-0 ph-20">
							<div className="content main-img">
								<img src={img404} alt="404" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
