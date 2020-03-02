import React, { Component } from "react";
import Aux from "../../HOC/Aux";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
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
