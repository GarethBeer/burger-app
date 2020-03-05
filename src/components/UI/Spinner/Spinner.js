import React from "react";
import classes from "./Spinner.module.css";
const Spinner = () => {
	return (
		<div className={classes.Spinner}>
			...loading
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};

export default Spinner;
