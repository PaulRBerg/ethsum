import React from "react";
import PropTypes from "prop-types";

const style = {
	margin: "16px"
};

const textStyle = {
	color: "#222"
};

class Whoops404 extends React.Component {

	static propTypes = {
		location: PropTypes.Function
	};

	render() {
		return (
			<div style={style}>
				<h1 style={textStyle}>Whoops, resource not found</h1>
				<p style={textStyle}>Could not find {this.props.location.pathname}</p>
			</div>
		);
	}
}

export default Whoops404;
