const PositiveMessage = () => <p>Możesz obejrzeć</p>
const NegativeMessage = () => <p>Nie możesz obejrzeć, dorośnij!</p>

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
				return <NegativeMessage />
			} else {
				return <PositiveMessage />
			}
		} else {
			return null
		}
	}
	render() {
		return (
			<>
				<h1>Kup bilet!</h1>
				<form onSubmit={this.handleForSubmit}>
					<input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
					<label htmlFor="age"> Mam 18 lat</label>
					<br />
					<button type="submit">Kup bilet</button>
				</form>
				{this.displayMessage()}
			</>
		)
	}
}
ReactDOM.render(<TicketShop />, document.getElementById('root'))
