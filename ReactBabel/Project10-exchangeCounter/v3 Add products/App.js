const Cash = props => {
	const value = ((props.cash / props.ratio) * props.price).toFixed(2)
	return (
		<div>
			{props.title} {props.cash <= 0 ? '' : value}
		</div>
	)
}

class ExchangeCounter extends React.Component {
	state = {
		amount: '',
		product: 'electricity',
	}

	static defaultProps = {
		currencies: [
			{ id: 0, name: 'zloty', ratio: 1, title: 'Wartość w złotówkach: ' },
			{ id: 1, name: 'dollar', ratio: 3.6, title: 'Wartość w dolarach: ' },
			{ id: 2, name: 'euro', ratio: 4.2, title: 'Wartość w euro: ' },
			{ id: 3, name: 'pound', ratio: 4.55, title: 'Wartość w funtach: ' },
		],
		prices: {
			electricity: 0.51,
			gasoline: 4.76,
			oranges: 3.79,
		},
	}

	handleChange = e => {
		this.setState({
			amount: e.target.value,
		})
	}

	handleSelect = e => {
		this.setState({
			product: e.target.value,
			amount: '',
		})
	}

	insertSuffix(select) {
		if (select === 'electricity') return <em>kWh</em>
		else if (select === 'gasoline') return <em>litrów</em>
		else if (select === 'oranges') return <em>kilogramów</em>
		else return null
	}

	selectPrice(select) {
		return this.props.prices[select]
	}

	render() {
		const { amount, product } = this.state
		const price = this.selectPrice(product)
		const calculators = this.props.currencies.map(currency => (
			<Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={price} />
		))
		return (
			<div className="app">
				<label>
					Wybierz produkt:
					<select value={product} onChange={this.handleSelect}>
						<option value="electricity">Prąd</option>
						<option value="gasoline">Benzyna</option>
						<option value="oranges">Pomarańcze</option>
					</select>
				</label>
				<br />
				<label>
					<input type="number" value={amount} onChange={this.handleChange} />
					{this.insertSuffix(product)}
				</label>
				{calculators}
			</div>
		)
	}
}

ReactDOM.render(<ExchangeCounter />, document.querySelector('#root'))
