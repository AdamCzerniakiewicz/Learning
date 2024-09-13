import React from 'react'
import '../styles/Contact.css'
// import {Prompt} from "react-router-dom" (W aktualniej wersji RRD nie ma, trzeba użyć hooki)

class Contact extends React.Component {
	state = {
		value: '',
	}

	handleSubmit = e => {
		e.preventDefault()
		this.setState({
			value: '',
		})
	}

	handleChange = e => {
		this.setState({
			value: e.target.value,
		})
	}

	render() {
		return (
			<div className="contact">
				<form>
					<h3>Napisz do nas!</h3>
					<textarea value={this.state.value} onChange={this.handleChange} placeholder="Napisz wiadomość..."></textarea>
					<button onClick={this.handleSubmit}>Wyślij</button>
				</form>
				{/* <Prompt
					when={this.state.value}
					message="Masz niewypełniony formularz. Czy napewno chcesz opościć stronę?"
				/> W aktualniej wersji RRD nie ma, trzeba użyć hooki */}
			</div>
		)
	}
}

export default Contact
