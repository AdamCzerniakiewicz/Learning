class App extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		text: ""
	// 	}
	// 	this.handleClick = this.handleClick.bind(this)
	// }
	state = {
		text: '',
		btn: 'Uruchom'
	}

	handleClick = () => {
		// this.state.text += "A"
		const number = Math.floor(Math.random() * 10)
		// this.setState({
		// 	text: this.state.text + letter,
		// })
		this.setState(() => ({
			text: this.state.text + number,
		}))
	}

	render() {
		const btnName = "Stwórz Liczbę"
		return (
			<>
				<button onClick={this.handleClick}>{this.state.btn}</button>
				{/* <h1>{this.state.text}</h1> */}
				<PanelResult text={this.state.text} />
			</>
		)
	}
}

const PanelResult = props => {
	return <h1>{props.text}</h1>
}

ReactDOM.render(<App btnTitle="Dodaj Cyfrę" />, document.querySelector('#root'))
