import React from "react";
import PropTypes from "prop-types";

import classes from "./BuildControl.module.css";

const buildControl = props => (
	<div className={classes.BuildControl}>
		<div className={classes.Label}>{props.label}</div>
		<button
			className={classes.Less}
			onClick={props.remove}
			name={props.label}
			disabled={props.disabled}
		>
			Less
		</button>
		<button className={classes.More} onClick={props.add} name={props.label}>
			More
		</button>
	</div>
);

buildControl.propType = {
	key: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	add: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired
};

export default buildControl;
