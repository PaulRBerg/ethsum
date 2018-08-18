import React from "react";

import "styles/1-layouts/footer.css";

class Footer extends React.Component {

	render() {
		return (
			<footer>
				<p>© 2018 EthSum Technologies Limited</p>
				<p className={"separator"}> | </p>
				<p> Terms & Conditions </p>
				<p className={"separator"}> | </p>
				<p> Privacy Policy </p>
			</footer>
		);
	}
}

export default Footer;