import React from "react";
import classes from "./Menu.module.css";

const menu = props => {
	return (
		<div className={classes.Burger} onClick={props.sidedrawer}>
			<div className={classes.line1}> </div>
			<div className={classes.line2}> </div>
			<div className={classes.line3}> </div>
		</div>
	);
};
export default menu;
