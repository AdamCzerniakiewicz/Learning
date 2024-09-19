import React, { createRef, useRef, useState } from 'react'

import './App.css'

const App = () => {
const [counter, setCounter] = useState(0)
const textInputRef = useRef(true)
const numberInputRef = createRef()

const focusOnInput = () => textInputRef.current.focus()
const increaseCounter = () => setCounter(counter + 1)

console.log(textInputRef.current);
console.log(numberInputRef.current);

	return <div className="App">
		<input type="text" ref={textInputRef}/>
		<input type="number" ref={numberInputRef} />
		<button onClick={focusOnInput}>Ustaw focus na input</button>
		<button onClick={increaseCounter}>Przerenderuj komponent</button>
	</div>
}

export default App
