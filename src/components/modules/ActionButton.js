import React from "react";
import PropTypes from "prop-types";
import Spinner from "react-spinkit";

import palette from "../../styles/palette";

const ActionButton = ({text, loading, style}) => (
	<div className={"wrap-form-btn-container"} style={style ? style : {}}>
		<button className={"wrap-form-btn"} style={{ background: loading ? palette.eth.complementary : palette.eth.main }}>
			{loading ? <Spinner name={"circle"} color={"white"} size={32} fadeIn={"none"} /> : text}
		</button>
	</div>
);
ActionButton.propTypes = {
	text: PropTypes.string.isRequired,
	loading: PropTypes.bool
};

export default ActionButton;