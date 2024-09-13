import React from 'react'
import Product from '../components/Product'
import { Link, useParams } from 'react-router-dom'

// const Products = ({match}) =>  Nie działa w nowej wersji RRD

const Products = () => {
	const {id} = useParams()
	return (
		<>
			<div>Strona produktu</div>
			{/* <Product id={match.params.id} />  Tak jak wyżej*/}
			<Product id={id} />
			<Link to="/products">Powrót do listy produktów</Link>
		</>
	)
}

export default Products
