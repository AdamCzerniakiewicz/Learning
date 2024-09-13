import React from 'react'
import { useLocation } from 'react-router-dom'



const Footer = () => {
	let { pathname } = useLocation()
	return (
		<div>
			<p>Jesteś na podstronie: {pathname}</p>
		</div>
	)
}

export default Footer
