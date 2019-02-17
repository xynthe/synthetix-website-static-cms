import React from "react";
import { withPrefix } from "gatsby";
import "./CurrencyBox.sass";

const CurrencyBox = ({ nCurrency = '', currency, currencyNumber, bottomLabel, texts, buttons }) => {
	let logoSrc = withPrefix(`/img/${nCurrency.toLowerCase()}_blue.svg`);

	return (
		<div className="column currency-box">
			{currency === 'none' ? (
				<React.Fragment>
					{ texts && texts.map((t,i) => <p key={i} className="currency-text">{t}</p>) }
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className="currency-label-1">{nCurrency}</div>
					<div className="currency-label-2">
						<span>{currencyNumber}</span>
						<span className="currency-sign">{currency}</span>
					</div>
					<div className="currency-logo">
						<img src={logoSrc} />
					</div>
					<div className="buttons">
						{buttons.map(b => (
							<a href={b.link} key={b.platform} target="_blank" className="currency-button">
								<img src={withPrefix(`/img/${b.platform}.svg`)} />
							</a>
						))}
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default CurrencyBox;
