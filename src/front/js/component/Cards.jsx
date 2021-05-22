import React, { Component } from "react";
import Card from "./CardUI.jsx";
import PropTypes from "prop-types";

class Cards extends Component {
	render() {
		return (
			<div className="container d-flex- justify-content-center">
				<div className="row justify-content-center">
					<Card />
				</div>
			</div>
		);
	}
}
export default Cards;
