import React from "react";
import { withPrefix } from "gatsby";
import "./TokenBox.sass";

class TokenBox extends React.Component {
	componentDidMount() {
		let { title, tokens } = this.props;

		let hasSelect = tokens.length > 1;

		this.setState({
			token: tokens[0],
			hasSelect: hasSelect
		});
	}

	state = {
		hasSelect: false,
		token: null
	};

	onTokenChange = event => {
		let symbol = event.target.value;
		let token = this.props.tokens.find(t => t.symbol === symbol);
		this.setState({ token });
	};

	renderSelect(tokens) {
		return (
			<React.Fragment>
				<span>&nbsp;</span>
				<select
					className="token-select"
					value={this.state.token.symbol}
					onChange={this.onTokenChange}
				>
					{tokens.map(t => (
						<option key={t.symbol} value={t.symbol}>
							{t.symbol}
						</option>
					))}
				</select>
			</React.Fragment>
		);
	}

	render() {
		let { token, hasSelect } = this.state;
		let { title, tokens, description } = this.props;

		if (!token) return null;

		return (
			<div className="column token-box">
				<div className="token-box-title">{title} Details</div>
				<div className="token-details">
					<div className="token-symbol">
						<span className="token-label">Symbol</span>
						{hasSelect ? this.renderSelect(tokens) : <span>{token.symbol}</span>}
					</div>
					<div className="token-address">
						<span className="token-label">Contract Address</span>
						<a
							className="word-break"
							target="_blank"
							href={"https://etherscan.io/token/" + token.address}
						>
							{token.address}
						</a>
					</div>
					<div className="token-decimals">
						<span className="token-label">Decimals</span>
						<span>{token.decimals}</span>
					</div>
				</div>
				<div className="description-section">
					<span className="token-label">Description</span>
					<div className="token-description">
						<span>{token.description || description}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default TokenBox;
