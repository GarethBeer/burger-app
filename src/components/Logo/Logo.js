import React from "react";
import LogoImage from "../../assests/images/logo.png";
import classes from "./Logo.module.css";

const Logo = props => (
	<div className={classes.Logo} style={{ height: props.height }}>
		<img src={LogoImage} alt="burger" />
	</div>
);

export default Logo;
