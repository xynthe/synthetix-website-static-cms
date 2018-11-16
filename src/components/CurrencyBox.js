import React from "react";
import { withPrefix } from "gatsby";
import "./CurrencyBox.sass";

const CurrencyBox = ({ nCurrency, currency, currencyNumber, bottomLabel }) => {
	let dotSrc = withPrefix(`/img/${nCurrency.toLowerCase()}-dot.svg`);
	let lineSrc = withPrefix(`/img/${nCurrency.toLowerCase()}-line.svg`);
	return (
		<div className="column currency-box">
			<img src={dotSrc} className="currency-dot" alt={nCurrency} />
			<div className="currency-label-1">{nCurrency}</div>
			<div className="currency-label-2">
				<span>{currencyNumber}</span>
				<span>{currency}</span>
			</div>
			{bottomLabel ? (
				<div className="bottom-label-tx">
					<span>{bottomLabel}</span>
				</div>
			) : (
				<img src={lineSrc} className="currency-line" />
			)}
		</div>
	);
};

export default CurrencyBox;
