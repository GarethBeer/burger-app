import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../../HOC/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: "capitalize" }}>{igKey}</span>:
				{props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients</p>
			<ul>{ingredientSummary}</ul>
			<h4>Price: £{props.price.toFixed(2)}</h4>
			<p>Continue to Checkout?</p>
			<Button btnType="Danger" clicked={props.cancel}>
				Cancel
			</Button>
			<Button btnType="Success" clicked={props.continue}>
				Continue
			</Button>
		</Aux>
	);
};

orderSummary.propTypes = {
	continue: PropTypes.func.isRequired,
	cancel: PropTypes.func.isRequired,
	price: PropTypes.number.isRequired
};

export default orderSummary;
