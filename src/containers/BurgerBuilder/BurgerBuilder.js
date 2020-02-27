import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
	salad: 0.4,
	cheese: 0.6,
	bacon: 0.8,
	meat: 1.2
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchase: false
	};

	updatePurchaseState = ingredients => {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({
			purchase: sum > 0
		});
	};

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];

		const updatedCount = oldCount + 1;

		const updatedIngredients = {
			...this.state.ingredients
		};

		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];

		if (oldCount === 0) {
			window.alert("You have not added any ingredients yet");
		} else {
			const updatedCount = oldCount - 1;
			const updatedIngredients = {
				...this.state.ingredients
			};
			updatedIngredients[type] = updatedCount;
			const priceReduce = INGREDIENT_PRICES[type];
			const oldPrice = this.state.totalPrice;
			let newPrice = oldPrice - priceReduce;
			if (newPrice < 4) {
				newPrice = 4;
			}
			this.setState({
				ingredients: updatedIngredients,
				totalPrice: newPrice
			});
			this.updatePurchaseState(updatedIngredients);
		}
	};
	render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					add={this.addIngredientHandler}
					remove={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchase={this.state.purchase}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
