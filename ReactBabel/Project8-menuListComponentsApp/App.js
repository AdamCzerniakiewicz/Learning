class App extends React.Component {
	state = {
		items: [
			{ id: 1, name: 'herbata', active: true },
			{ id: 2, name: 'zimniok', active: false },
			{ id: 3, name: 'kasza', active: false },
			{ id: 4, name: 'wodzionka', active: false },
			{ id: 5, name: 'woda z czajnika', active: false },
			{ id: 6, name: 'chleb', active: true },
		],
	}

	handleChangeStatus = id => {
		console.log(id)
		const items = this.state.items.map(item => {
			if (id === item.id) {
				item.active = !item.active
			}
			return item
		})
		this.setState({ items })
	}

	render() {
		return (
			<React.Fragment>
				<Header items={this.state.items} />
				<ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
			</React.Fragment>
		)
	}
}
