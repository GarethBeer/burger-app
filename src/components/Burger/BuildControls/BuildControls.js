import React from "react";
import PropTypes from "prop-types";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" }
];

const buildControls = props => (
	<div className={classes.BuildControls}>
		<p>
			<strong>{props.price.toFixed(2)}</strong>
		</p>
		{controls.map(el => (
			<BuildControl
				key={el.label}
				label={el.type}
				add={() => props.add(el.type)}
				remove={() => props.remove(el.type)}
				disabled={props.disabled[el.type]}
			/>
		))}
		<button
			className={classes.OrderButton}
			disabled={!props.purchase}
			onClick={props.summary}
		>
			Order Now
		</button>
	</div>
);

buildControls.propTypes = {
	add: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
	price: PropTypes.number.isRequired,
	purchase: PropTypes.bool.isRequired,
	summary: PropTypes.func.isRequired
};
export default buildControls;
