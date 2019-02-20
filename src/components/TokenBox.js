import React from "react";
import { withPrefix } from "gatsby";
import "./TokenBox.sass";

class TokenBox extends React.Component {

	componentDidMount() {
		let { title, tokens } = this.props

		let hasSelect = tokens.length > 1

		this.setState({
			token: tokens[0],
			hasSelect: hasSelect
		})

	}

	state = {
		hasSelect: false,
		token: null
	}

	onTokenChange = (event) => {
		let symbol = event.target.value
		let token = this.props.tokens.find(t => t.symbol === symbol)
		this.setState({ token })
	}

	renderSelect(tokens) {
		return (
			<select className="token-select" value={this.state.token.symbol} onChange={this.onTokenChange}>
				{tokens.map(t => 
					<option key={t.symbol} value={t.symbol}>{t.symbol}</option>
				)}
			</select>
		)
	}

	render() {
		let { token, hasSelect } = this.state
		let { title, tokens } = this.props

		if (!token) return null

		return (
			<div className="column token-box">
				<div className="token-box-title">{title} Details</div>
				<div className="token-details">
					<div className="token-symbol">
						{ hasSelect ? this.renderSelect(tokens) : <span>{token.symbol}</span> }
						<span className="token-label">Symbol</span>
					</div>
					<div className="token-address">
						<span>{token.address}</span>
						<span className="token-label">Contract Address</span>
					</div>
					<div className="token-decimals">
						<span>{token.decimals}</span>
						<span className="token-label">Decimals</span>
					</div>
				</div>
			</div>
		);
	}
};

export default TokenBox;
