import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class Modal extends React.Component {
	propTypes = {
		isOpen: PropTypes.bool.isRequired,
		onRequestClose: PropTypes.func.isRequired,
		className: PropTypes.string
	};

	static defaultProps = {
		isOpen: false,
		className: ""
	};

	render() {
		const { isOpen, children, onRequestClose, className } = this.props;
		return (
			<div className={cx("modal", className, { "is-active": isOpen })}>
				<div className="modal-background" onClick={() => onRequestClose()} />
				<div className="modal-content">{children}</div>
				<button
					className="modal-close is-large"
					aria-label="close"
					onClick={() => onRequestClose()}
				/>
			</div>
		);
	}
}
