import React from "react";
import PropTypes from "prop-types";

import classes from "./Modal.module.css";
import Aux from "../../../HOC/Aux";
import Backdrop from "../Backdrop/Backdrop";
import { Component } from "react";

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.show !== this.props.show ||
			nextProps.children !== this.props.children
		);
	}
	componentDidUpdate() {
		console.log("modal  willUpdate");
	}

	render() {
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.hide} />
				<div
					className={classes.Modal}
					style={{
						transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
						opacity: this.props.show ? "1" : "0"
					}}
				>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	hide: PropTypes.func.isRequired
};

export default Modal;
