/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React, { Component } from "react";
import PropTypes from "prop-types";
import * as fa from "react-icons/fa";

import "styles/3-modules/form-item.css";

class FormItem extends Component {

	static propTypes = {
		type: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		autocomplete: PropTypes.string,
		validate: PropTypes.string,
		required: PropTypes.bool,
		onChange: PropTypes.func
	};

	constructor(props) {
		super(props);

		this.state = {};
		this.renderIcon = this.renderIcon.bind(this);
	}

	renderIcon() {
		const iconSize = 20;

		switch (this.props.name) {
		case "name":
			return <fa.FaUser size={iconSize}/>;
		case "your-email":
			return <fa.FaEnvelope size={iconSize}/>;
		case "friend-email":
			return <fa.FaEnvelope size={iconSize}/>;
		case "amount":
			return <fa.FaDatabase size={iconSize}/>;
		case "coin-adderss":
			return <fa.FaDatabase size={iconSize}/>;
		default:
			return <fa.FaUser size={iconSize}/>;
		}
	}

	render() {
		const props = this.props;

		return (
			<div className={"form-item"}
			     data-validate={props.validate ? props.validate : ""}
			     style={props.style ? props.style : {}}
			>
				<input className={"input-item"}
					type={props.type}
					name={props.name}
				    value={props.value}
					placeholder={props.placeholder}
					autoComplete={props.autocomplete}
					required={props.required ? props.required : false}
					onChange={props.onChange ? props.onChange : null}
					readOnly={props.readOnly}
				/>
				<span className={"focus"}/>
				<span className={"symbol"}>
					{this.renderIcon()}
				</span>
			</div>
		);
	}
}

export default FormItem;