import React from "react";
import PropTypes from "prop-types";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import Menu from "../../Navigation/Menu/Menu";

const toolbar = props => (
	<header className={classes.Toolbar}>
		<Menu sidedrawer={props.sidedrawer} />
		<Logo height="80%" />
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);
toolbar.propTypes = {
	sidedrawer: PropTypes.func.isRequired
};
export default toolbar;
