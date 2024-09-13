import React from 'react'
import '../styles/Header.css'
import { Route, Routes } from 'react-router-dom'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

const Header = () => {
	// const images=[img1, img2, img3]
	// const index = Math.floor(Math.random() * 3)
	// const img = images[index]
	// Nie działa bez hook

	return (
		<Routes>
			<Route path="/" element={<img src={img1} alt="kamyki" />} />
			<Route path="/products" element={<img src={img2} alt="kamyki" />} />
			<Route path="/contact" element={<img src={img3} alt="kamyki" />} />
			<Route path="/admin" element={<img src={img3} alt="kamyki" />} />
			<Route path="*" element={<img src={img1} alt="kamyki" />} />
		</Routes>
	)
}

export default Header
