import React from "react";
import PropTypes from "prop-types";

import Logo from "../../Logo/Logo";
import NavigationItems from "../Toolbar/NavigationItems/NavigationItems";
import classes from "./Sidedrawer.module.css";
import Aux from "../../../HOC/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sidedrawer = props => {
	let attachedClasses = [classes.Sidedrawer, classes.Closed];

	if (props.open) {
		attachedClasses = [classes.Sidedrawer, classes.Open];
	}

	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(" ")}>
				<Logo height="11%" />
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

sidedrawer.propTypes = {
	closed: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired
};

export default sidedrawer;
