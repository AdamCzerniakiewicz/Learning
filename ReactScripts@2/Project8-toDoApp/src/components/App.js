import React, { Component } from 'react'
import './App.css'
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {
	state = {
		tasks: [
			{
				id: 0,
				text: 'Zagrać w Wiedźmina',
				date: '2024-08-30',
				important: true,
				active: true,
				finishDate: null,
			},
			{
				id: 1,
				text: 'Zrobić pranie',
				date: '2024-08-29',
				important: false,
				active: true,
				finishDate: null,
			},
			{
				id: 2,
				text: 'Zrobić obiad',
				date: '2024-08-28',
				important: false,
				active: true,
				finishDate: null,
			},
			{
				id: 3,
				text: 'Zrobić szpagat',
				date: '2024-08-27',
				important: false,
				active: true,
				finishDate: null,
			},
			{
				id: 4,
				text: 'Zadzwonić do kardiologa',
				date: '2024-08-25',
				important: true,
				active: true,
				finishDate: null,
			},
			{
				id: 5,
				text: 'Zrobić margaritę',
				date: '2024-08-24',
				important: false,
				active: true,
				finishDate: null,
			},
			{
				id: 6,
				text: 'Zebrać jabłka',
				date: '2024-08-23',
				important: false,
				active: true,
				finishDate: null,
			},
			{
				id: 7,
				text: 'Przyciąć krzaki',
				date: '2024-08-22',
				important: true,
				active: true,
				finishDate: null,
			},
		],
	}

	counter = this.state.tasks.length

	deleteTask = id => {
		const tasks = [...this.state.tasks]
		const index = tasks.findIndex(task => task.id === id)
		tasks.splice(index, 1)
		this.setState({ tasks })
	}

	changeTaskStatus = id => {
		let tasks = Array.from(this.state.tasks)
		tasks.forEach(task => {
			if (task.id === id) {
				task.active = false
				task.finishDate = new Date().getTime()
			}
		})
		this.setState({ tasks })
	}

	addTask = (text, date, important) => {
		const task = {
			id: this.counter,
			text,
			date,
			important,
			active: true,
			finishDate: null,
		}

		this.counter++

		this.setState(prevState => ({
			tasks: [...prevState.tasks, task],
		}))
		return true
	}

	render() {
		return (
			<div className="App">
				<h1>ToDo App</h1>
				<AddTask add={this.addTask} />
				<TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
			</div>
		)
	}
}

export default App
