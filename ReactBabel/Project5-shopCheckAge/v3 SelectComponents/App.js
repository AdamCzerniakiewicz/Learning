const ValidationMessage = props => {
	const { txt } = props
	return <p>{txt}</p>
}

const OrderForm = props => {
	const { submit, checked, change } = props
	return (
		<form onSubmit={submit}>
			<input type="checkbox" id="age" onChange={change} checked={checked} />

			<label htmlFor="age"> Mam 18 lat</label>
			<br />
			<button type="submit">Kup bilet</button>
		</form>
	)
}

class TicketShop extends React.Component {
	state = {
		isConfirmed: false,
		isFormSubmitted: false,
	}

	handleCheckboxChange = () => {
		this.setState({
			isConfirmed: !this.state.isConfirmed,
			isFormSubmitted: false,
		})
	}

	handleForSubmit = e => {
		e.preventDefault()
		if (!this.state.isFormSubmitted) {
			this.setState({
				isFormSubmitted: true,
			})
		}
	}

	displayMessage = () => {
		if (this.state.isFormSubmitted) {
			if (this.state.isConfirmed === false) {
				return <ValidationMessage txt="Nie możesz obejrzeć, dorośnij!" />
			} else {
				return <ValidationMessage txt="Możesz obejrzeć" />
			}
		} else {
			return null
		}
	}
	render() {
		const { isConfirmed, isFormSubmitted } = this.state

		return (
			<>
				<h1>Kup bilet!</h1>
				{/* <form onSubmit={this.handleForSubmit}>
					<input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
					<br />
					<label htmlFor="age"> Mam 18 lat</label>
					<button type="submit">Kup bilet</button>
				</form> */}
				<OrderForm change={this.handleCheckboxChange} checked={isConfirmed} submit={this.handleForSubmit} />
				{this.displayMessage()}
			</>
		)
	}
}
ReactDOM.render(<TicketShop />, document.getElementById('root'))
