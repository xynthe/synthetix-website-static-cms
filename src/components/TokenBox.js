import React from "react";
import { withPrefix } from "gatsby";
import "./TokenBox.sass";

const TokenBox = ({ title, symbol, address, decimals }) => {

	return (
		<div className="column token-box">
			<div className="token-box-title">{title} Details</div>
			<div className="token-details">
				<div className="token-symbol">
					<span>{symbol}</span>
					<span className="token-label">Symbol</span>
				</div>
				<div className="token-address">
					<span>{address}</span>
					<span className="token-label">Contact Address</span>
				</div>
				<div className="token-decimals">
					<span>{decimals}</span>
					<span className="token-label">Decimals</span>
				</div>
			</div>
		</div>
	);
};

export default TokenBox;
