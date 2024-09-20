import React, { useState } from 'react'

const Form = ({ addHandler }) => {
	const [inputData, setInputData] = useState('')

	const handlerOnChange = e => {
		setInputData(e.target.value)
	}

	const handlerAdd = () => {
		const newCourse = {
			id: Math.floor(Math.random() * 1000),
			title: inputData,
		}
		addHandler({ type: 'ADD', course: newCourse })
		setInputData('')
	}

	return (
		<div>
			<input type="text" placeholder="Podaj tytuł kursu..." onChange={handlerOnChange} value={inputData} />
			<button onClick={handlerAdd}>Dodaj kurs</button>
		</div>
	)
}

export default Form
