const data = {
	users: [
		{
			id: 1,
			age: 29,
			name: 'Arek',
			sex: 'male',
		},
		{
			id: 2,
			age: 49,
			name: 'Marta',
			sex: 'female',
		},
		{
			id: 3,
			age: 19,
			name: 'Stasia',
			sex: 'female',
		},
		{
			id: 4,
			age: 24,
			name: 'Karol',
			sex: 'male',
		},
	],
}
const Item = ({ user }) => (
	<div className="userInfo">
		<h1>
			Użytkownik <strong>{user.name}</strong>
		</h1>
		<p>Informacje o użytkowniku</p>
		<p>
			Wiek: <strong>{user.age}</strong>
		</p>
		<p>
			Płeć: <strong>{user.sex}</strong>
		</p>
	</div>
)

class ListItems extends React.Component {
	state = {
		select: 'all',
	}

	handleUsersFilter = option => {
		this.setState({
			select: option,
		})
	}

	userList = () => {
		let users = this.props.data.users
		switch (this.state.select) {
			case 'all':
				return users.map(user => <Item user={user} key={user.id} />)
			case 'female':
				users = users.filter(user => user.sex === 'female')
				return users.map(user => <Item user={user} key={user.id} />)
			case 'male':
				users = users.filter(user => user.sex === 'male')
				return users.map(user => <Item user={user} key={user.id} />)
			default:
				return 'Brak danych'
		}
	}

	render() {
		return (
			<div>
				<button onClick={this.handleUsersFilter.bind(this, 'all')}>Pokaż wszystko</button>
				<button onClick={this.handleUsersFilter.bind(this, 'female')}>Pokaż kobiety</button>
				<button onClick={this.handleUsersFilter.bind(this, 'male')}>Pokaż mężczyzn</button>
				{this.userList()}
			</div>
		)
	}
}
ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
