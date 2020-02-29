import React from "react";
import classes from "./Menu.module.css";

const menu = props => {
	return (
		<div className={classes.Burger} onClick={props.sidedrawer}>
			<div> </div>
			<div> </div>
			<div> </div>
		</div>
	);
};
export default menu;
