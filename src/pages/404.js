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
						<h1 className="page-title">Page not found</h1>
					</div>
				</section>
				<section className="section is-white">
					<div className="container pb-70 pt-30">
						<div className="section pv-0 ph-20">
							<div className="content main-img">
								<img src={img404} alt="404" />
							</div>
							<div className="s-desc pb-50 error-message">
								The page you are looking for has a different URL or no longer
								exists.
								<br />
								Try checking the URL, using the navigation bar above, or returning
								to our homepage.
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
