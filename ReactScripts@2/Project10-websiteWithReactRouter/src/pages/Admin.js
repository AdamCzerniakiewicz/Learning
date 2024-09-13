import React from 'react'
// import {Route, Redirect} from 'react-router-dom' Brak wsparcia w nowej wersji RRD
import Login from '../pages/Login'
const Admin = () => {
	const permission = false;
 
	if(!permission){
	  return <Login/>
	} else {
	  return (
		<>
		  <h3>Panel admina - dzień dobry</h3>
		</>
	  )
	};
  };

export default Admin
