import React, { createRef, useState } from 'react'
import Counter from './Counter'
import './App.css'

const App = () => {
	const [counterVisible, setCounterVisible] = useState(true)
	const counterElement = counterVisible ? <Counter /> : null
	const textInput = createRef()
	const paragraphElement = createRef()
	const focusTextInput = () => textInput.current.focus()
	const addChar = () => (paragraphElement.current.textContent += '!')
	const toggleVisiblityCounter = () => setCounterVisible(!counterVisible)

	return (
		<div className="App">
			<input ref={textInput} type="text" />
			<p ref={paragraphElement}>Hello</p>
			<button onClick={focusTextInput}>Ustaw focus na input</button>
			<button onClick={addChar}>Dodaj wykrzyknik</button>
			<button onClick={toggleVisiblityCounter}>Pokaż/Ukryj Counter</button>
			{counterElement}
		</div>
	)
}

export default App
