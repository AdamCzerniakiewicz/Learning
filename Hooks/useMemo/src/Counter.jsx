import React from 'react'

const Counter = ({ counter, index }) => {
	console.log(`render indexu nr: ${index}`)
	return (
		<div>
			<p>
				Licznik nr {index}, wynosi: {counter.x}
			</p>
		</div>
	)
}

export default Counter
