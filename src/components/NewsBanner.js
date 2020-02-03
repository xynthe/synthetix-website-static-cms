import React from "react";
import "./NewsBanner.sass";

function NewsBanner(props) {
	return (
		<a className="banner" href="https://beta.synthetix.exchange/" target="_blank">
			<p className="text">
				NEW: sDEFI, sLINK, sLTC, sXRP AND THEIR INVERSES AVAILABLE TO TRADE NOW!
			</p>
		</a>
	);
}

export default NewsBanner;
