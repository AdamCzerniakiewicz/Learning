class Form extends React.Component {
	state = {
		city: 'Londyn',
		text: '',
		isLiked: true,
		number: '0',
	}

	handleChange = e => {
		if (e.target.type === 'checkbox') {
			this.setState({
				[e.target.name]: e.target.checked,
			})
		} else {
			this.setState({
				[e.target.name]: e.target.value,
			})
		}
	}

	render() {
		return (
			<div>
				<label>
					Podaj miasto
					<input name="city" value={this.state.city} onChange={this.handleChange} type="text" />
				</label>
				<br />
				<label>
					Napisz coś o tym mieście
					<textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
				</label>
				<br />
				<label>
					Czy lubisz to miasto
					<input name="isLiked" type="checkbox" checked={this.state.isLiked} onChange={this.handleChange} />
				</label>
				<br />
				<label>
					Ile razy byłeś w tej tawernie
					<select name="number" value={this.state.number} onChange={this.handleChange}>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="more">więcej</option>
					</select>
				</label>
			</div>
		)
	}
}

ReactDOM.render(<Form />, document.querySelector('#root'))
