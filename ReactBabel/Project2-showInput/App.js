class App extends React.Component {
	state = {
		value: '',
	}

	handleChange = e => {
		this.setState({
			value: e.target.value,
		})
	}

	handleClick = () => {
		this.setState({
			value: '',
		})
	}

	render() {
		return (
			<>
				<input value={this.state.value} placeHolder="Wpisz tekst..." onChange={this.handleChange} type="text" />
				<button onClick={this.handleClick}>Reset</button>
				<h1 className="title">{this.state.value.toUpperCase()}</h1>
			</>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#root'))
