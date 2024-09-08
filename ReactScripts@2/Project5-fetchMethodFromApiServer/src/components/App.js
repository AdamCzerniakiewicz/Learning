import React, { Component } from 'react'
import './App.css'
import ButtonFetchUsers from './ButtonFetchUsers'
import UsersList from './UsersList'

const API = 'https://randomuser.me/api/?results=5'

class App extends Component {
	state = {
		users: null,
	}

	handleDataFetch = () => {
		fetch(API)
			.then(response => {
				if (response.ok === true) {
					return response
				}
				throw Error(response.status)
			})
			.then(response => response.json())
			.then(data => {
				this.setState({
					users: data.results,
				})
			})
			.catch(error => console.log(`Błąd wyczytywania danych z API! ${error}`))
	}

	render() {
		const users = this.state.users

		return (
			<div>
				<ButtonFetchUsers click={this.handleDataFetch} />
				{users ? <UsersList users={users} /> : users}
			</div>
		)
	}
}

export default App
