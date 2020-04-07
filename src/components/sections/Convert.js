/* eslint-disable no-mixed-spaces-and-tabs,indent */
import React  from "react";
import GithubCorner from "react-github-corner";
import { ActionButton } from "../../components/modules";
import { FaEthereum } from "react-icons/fa";

import palette from "../../styles/palette";
import update from "immutability-helper";
import utils from "web3-utils";

import "../../styles/2-sections/convert.css";


function isEmpty(obj) {
	for(var key in obj) {
		if(obj.hasOwnProperty(key))
			return false;
	}
	return true;
}

class Convert extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			input: "",
			output: "",
			label: {
				color: "",
				message: ""
			}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		const state = this.state;
		let output = {}, label = {};

		if (!isEmpty(state.output)) {
			output = {
				$set: ""
			};
		}

		if (!isEmpty(state.label)) {
			label = {
				$set: {
					color: "",
					message: ""
				}
			};
		}

		this.setState(update(state, {
			output: output,
			label: label,
			[e.target.name]: { $set: e.target.value }
		}));
	}

	onSubmit(e) {
		e.preventDefault();

		const { input } = this.state;

		if (input.length !== 42 || !input.startsWith("0x")) {
			this.setState(update(this.state, {
				output: { $set: "" },
				label: { $set: {
						color: palette.alert.red,
						message: "Address needs to be 42 characters and start with 0x"
					}
				}
			}));
			return;
		}

		const output = utils.toChecksumAddress(input);
		console.log(input, output);
		if (input === output) {
			this.setState(update(this.state, {
				output: { $set: "" },
				label: { $set: {
						color: palette.alert.green,
						message: "Address is already checksummed"
					}
				}
			}));
			return;
		}

		this.label.value = output;
		this.setState(update(this.state, {
			output: { $set: output },
			label: { $set: {
					color: palette.eth.gold,
					message: "Address has been checksummed"
				}
			}
		}));
	}

	render() {
		const state = this.state;

		return (
			<div className={"main-container"}>
				<GithubCorner href={"https://github.com/PaulRBerg/ethsum"}
				              bannerColor={palette.eth.gold}/>
				<div className={"wrap-container"}>
					<form className={"wrap-form"} onSubmit={this.onSubmit}>
						<h1 className={"wrap-form-title"}>
							{"Ethereum Address Checksum"}
						</h1>
						<div className={"form-item"}>
							<input className={"input-item"}
							       type={"text"}
							       name={"input"}
							       value={undefined}
							       placeholder={"Input"}
							       autoComplete={""}
							       required={true}
							       onChange={this.onChange}
							       readOnly={false}
							       ref={l => this.label = l}
							/>
							<span className={"focus"}/>
							<span className={"symbol"}>
								<FaEthereum size={18}/>
							</span>
						</div>
						<p className={"output-text"} style={{ color: state.label.color }}>
							{state.label.message}
						</p>
						<ActionButton
							text={"Submit"}
							loading={false}
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default Convert;