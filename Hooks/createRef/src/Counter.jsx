import React, { createRef, useState } from 'react'

const Counter = () => {
	const componentRef = createRef()
	const [count, setCount] = useState(0)
	const asyncIncreaseCounterValue = () =>
		setTimeout(() => {
			if (componentRef.current) {
				setCount(count + 1)
			}
		}, 3000)
	return (
		<div ref={componentRef}>
			<p>Wartość licznika wynosi: {count}</p>
			<button onClick={asyncIncreaseCounterValue}>Pobierz dane</button>
		</div>
	)
}

export default Counter
