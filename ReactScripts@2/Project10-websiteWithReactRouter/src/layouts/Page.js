import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import ProductList from "../pages/ProductList"
import Contact from "../pages/Contact"
import Admin from "../pages/Admin"
import Login from "../pages/Login"
import Products from "../pages/Products"


const Page = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage/>} />
			<Route path="products" element={<ProductList/>} />
			<Route path="products/:id" element={<Products/>} />
			<Route path="contact" element={<Contact/>} />
			<Route path="admin" element={<Admin/>} />
			<Route path="login" element={<Login/>}/>
			<Route path="*" element={<div>Błędny adres</div>} />
		</Routes>
	)
}

export default Page
