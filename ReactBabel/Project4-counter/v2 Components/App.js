class Counter extends React.Component {
	state = {
		count: 0,
		//result: 0,
		result: this.props.result,
	}

	handleMathClick = (type, number = 1) => {
		//debugger
		if (type === 'subtraction') {
			this.setState(prevState => ({
				count: prevState.count + 1,
				result: prevState.result - number,
			}))
		} else if (type === 'reset') {
			this.setState(prevState => ({
				count: prevState.count + 1,
				result: 0,
			}))
		} else if (type === 'addition') {
			this.setState(prevState => ({
				count: prevState.count + 1,
				result: prevState.result + number,
			}))
		}
	}

	render() {
		return (
			<>
				<MathButton name="-" number={1} type="subtraction" click={this.handleMathClick} />
				<MathButton name="Restart" type="reset" click={this.handleMathClick} />
				<MathButton name="+" number={1} type="addition" click={this.handleMathClick} />
				<ResultPanel count={this.state.count} result={this.state.result} />
			</>
		)
	}
}

const MathButton = props => {
	return <button onClick={() => props.click(props.type, props.number)}>{props.name}</button>
}

const ResultPanel = props => {
	return (
		<>
			<h1>Liczba kliknięć: {props.count}</h1>
			<h1>{props.count > 10 ? <span>NIEZŁY WYNIK!</span> : null}</h1>
			<h1>Wynik: {props.result}</h1>
		</>
	)
}

ReactDOM.render(<Counter result={0} />, document.querySelector('#root'))
