class Message extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			messageIsActive: false,
		}
		this.handleMessageButton = this.handleMessageButton.bind(this)
	}

	handleMessageButton() {
		this.setState(prevState => ({
			messageIsActive: !prevState.messageIsActive,
		}))
	}

	render() {
		const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugit minus. Cum, accusamus doloremque? Praesentium eum quibusdam et natus, doloribus mollitia placeat culpa iure nulla sit incidunt odio minus ipsam?'
		return (
			<>
				<button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}</button>
				{/* <p>{this.state.messageIsActive && text}</p> */}
				{/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
				{this.state.messageIsActive && <p>{text}</p>}
			</>
		)
	}
}

ReactDOM.render(<Message />, document.querySelector('#root'))
