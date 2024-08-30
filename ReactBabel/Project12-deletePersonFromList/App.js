const Person = props => {
	return (
		<li>
			{props.name} <button onClick={() => props.removeObject(props.id)}>Usuń</button>
		</li>
	)
}

class List extends React.Component {
	state = {
		people: [
			{ id: 1, name: 'Karol Wojtyła' },
			{ id: 2, name: 'Jan Paweł 2' },
			{ id: 3, name: 'Papaj' },
			{ id: 4, name: 'Kremówa' },
		],
	}

	removeObject = id => {
		const updatedArray = this.state.people.filter(person => person.id !== id)
		this.setState({ people: updatedArray })
	}
	// PIERWSZE PODEJŚCIE NIE USUWAJĄCE LI I NIE WRACAJĄCEGO NOWEJ LISTY
	// handleDelete = id => {
	// 	const people = this.state.people.map(item => {
	// 		if (id === item.id) {
	// 			item.active = !item.active
	// 			item.name = ''
	// 			item.id = ''
	// 		}
	// 		return item
	// 	})
	// 	this.setState({ people })
	// }

	render() {
		const personsList = this.state.people.map(person => (
			<Person key={person.id} id={person.id} name={person.name} removeObject={this.removeObject} />
		))

		return (
			<div className="app">
				<ul>{personsList}</ul>
			</div>
		)
	}
}

ReactDOM.render(<List />, document.querySelector('#root'))
