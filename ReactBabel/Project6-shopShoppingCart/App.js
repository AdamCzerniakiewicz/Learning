class ShoppingCart extends React.Component {
	state = {
		availableProducts: 7,
		shoppingCart: 1,
	}

	handleRemoveFromCart = () => {
		this.setState({
			shoppingCart: this.state.shoppingCart - 1,
		})
	}

	handleAddToCart = () => {
		this.setState({
			shoppingCart: this.state.shoppingCart + 1,
		})
	}

	handleBuy = () => {
		this.setState({
			availableProducts: this.state.availableProducts - this.state.shoppingCart,
			shoppingCart: 0,
		})
	}

	render() {
		const { shoppingCart, availableProducts } = this.state
		const style = shoppingCart === 0 ? { opacity: 0.4 } : {}

		return (
			<div>
				<button
					disabled={shoppingCart === 0 || availableProducts <= 0 ? true : false}
					onClick={this.handleRemoveFromCart}>
					-
				</button>
				<span style={style}> {shoppingCart} </span>
				<button
					disabled={shoppingCart === availableProducts || availableProducts <= 0 ? true : false}
					onClick={this.handleAddToCart}>
					+
				</button>
				{shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
			</div>
		)
	}
}
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
