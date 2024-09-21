import React, { useMemo, useState } from 'react'

import './App.css'
import Counter from './Counter'

const App = () => {
	const [state, setState] = useState({ x: 0, y: 0 })

	const increaseX = () => setState({ ...state, x: state.x + 1 })

	const increaseY = () => setState({ ...state, y: state.y + 1 })

	const firstCounterComponent = useMemo(() => <Counter counter={state} index={1} />, [state.x])

	const secondCounterComponent = useMemo(() => <Counter counter={state} index={2} />, [state.y])

	return (
		<div className="App">
			{firstCounterComponent}
			{secondCounterComponent}
			<button onClick={increaseX}>Dodaj do licznika nr 1</button>
			<button onClick={increaseY}>Dodaj do licznika nr 2</button>
		</div>
	)
}

export default App
