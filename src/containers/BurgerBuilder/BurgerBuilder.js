import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
	salad: 0.4,
	cheese: 0.6,
	bacon: 0.8,
	meat: 1.2
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchase: false,
		summary: false,
		loading: false,
		error: false
	};

	componentDidMount() {
		axios
			.get("https://react-burger-builder-6d491.firebaseio.com/ingredients.json")
			.then(response => {
				this.setState({
					ingredients: response.data
				});
			})
			.catch(error => {
				this.setState({
					error: true
				});
			});
	}

	orderSummaryState = () => {
		if (this.state.summary === false) {
			this.setState({
				summary: true
			});
		} else {
			this.setState({
				summary: false
			});
		}
	};

	clearOrderHandler = props => {
		const resetIngredients = {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		};
		const newPrice = 4;
		this.setState({
			ingredients: resetIngredients,
			totalPrice: newPrice
		});
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

	purchaseContineHandler = props => {
		this.setState({
			loading: true
		});
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: "Gareth Beer",
				address: {
					street: "test town",
					postcode: "llllllll",
					county: "UK"
				},
				email: "test@test.co.uk"
			},
			deliveryMethod: "fastest"
		};
		axios
			.post("/orders.json", order)
			.then(response =>
				this.setState({
					loading: false,
					summary: false
				})
			)
			.catch(error => this.setState({ loading: false, summary: false }));
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
				<Modal show={this.state.summary} hide={this.orderSummaryState}>
					{!this.state.loading && this.state.ingredients ? (
						<OrderSummary
							ingredients={this.state.ingredients}
							continue={this.purchaseContineHandler}
							cancel={this.orderSummaryState}
							price={this.state.totalPrice}
						/>
					) : (
						<Spinner />
					)}
				</Modal>

				{this.state.ingredients ? (
					<Aux>
						<Burger ingredients={this.state.ingredients} />
						<BuildControls
							add={this.addIngredientHandler}
							remove={this.removeIngredientHandler}
							disabled={disabledInfo}
							price={this.state.totalPrice}
							purchase={this.state.purchase}
							summary={this.orderSummaryState}
							reset={this.clearOrderHandler}
						/>
					</Aux>
				) : (
					<Spinner />
				)}
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
