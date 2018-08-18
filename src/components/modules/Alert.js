import React, { Component } from "react";
import PropTypes from "prop-types";

class Alert extends Component {

	static propTypes = {
		message: PropTypes.string.isRequired,
		clearAlert: PropTypes.func.isRequired
	};

	render() {
		return (
			<div className={"alert alert-danger alert-dismissible"} role={"alert"}>
				<span>{this.props.alert.message}</span>
				<button
					className={"close"}
					type={"button"}
					data-dismiss={"alert"}
					aria-label={"Close"}
					onClick={this.props.clearAlert}>
					<span aria-hidden={true}>&times;</span>
				</button>
			</div>
		);
	}
}

export default Alert;