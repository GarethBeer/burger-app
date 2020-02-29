import React, { Component } from "react";
import Aux from "../../HOC/Aux";

import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerHandler = () => {
		if (this.state.showSideDrawer) {
			this.setState({
				showSideDrawer: false
			});
		} else {
			this.setState({
				showSideDrawer: true
			});
		}
	};

	render() {
		return (
			<Aux>
				<Toolbar sidedrawer={this.sideDrawerHandler} />
				<Sidedrawer
					closed={this.sideDrawerHandler}
					open={this.state.showSideDrawer}
				/>
				<main className={classes.content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
