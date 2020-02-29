import React from "react";
import PropTypes from "prop-types";

import classes from "./Modal.module.css";
import Aux from "../../../HOC/Aux";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
	return (
		<Aux>
			<Backdrop show={props.show} clicked={props.hide} />
			<div
				className={classes.Modal}
				style={{
					transform: props.show ? "translateY(0)" : "translateY(-100vh)",
					opacity: props.show ? "1" : "0"
				}}
			>
				{props.children}
			</div>
		</Aux>
	);
};

modal.propTypes = {
	show: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired
};

export default modal;