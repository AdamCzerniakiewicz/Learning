class WishMaster extends React.Component {
	state = {
		wishes: ['Jagody w tym roku są dojrzałe', 'A bezrybiu i rak ryba', 'Alleluja i do przodu'],
		wish: null,
		newWish: null,
	}

	randomWish = () => {
		const arrayLong = this.state.wishes.length
		const randomId = Math.floor(Math.random() * arrayLong)
		this.setState({
			wish: this.state.wishes[randomId],
		})
	}

	handleWishWrite = e => {
		this.setState({
			newWish: e.target.value,
		})
	}

	handleWishAdd = () => {
		if (this.state.newWish === null) {
			alert('Nie wpisałeś wróżby!')
		} else {
			const inputWish = this.state.newWish
			this.state.wishes.push(inputWish)
			alert(`Dodałeś nową wróżbę: ${inputWish}`)
		}
		this.setState({
			wish: null,
			newWish: null,
		})
	}

	render() {
		return (
			<div className="app">
				<button type="button" onClick={this.randomWish}>
					Losowa wróżba
				</button>
				<br />

				<input type="string" value={this.state.newWish ?? ''} onChange={this.handleWishWrite} />
				<button type="button" onClick={this.handleWishAdd}>
					Dodaj wróżbę
				</button>
				<br />
				<div>{this.state.wish}</div>
			</div>
		)
	}
}

ReactDOM.render(<WishMaster />, document.querySelector('#root'))
