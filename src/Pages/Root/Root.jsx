import React, { createContext } from 'react'
import NavBar from '../../component/Header/NavBar'
import { Outlet } from 'react-router'
import Footer from '../../component/Footer/Footer'
import { ToastContainer } from 'react-toastify'

export default function Root() {
	return (
		<div className="bg-gray-100">
			<div className='md:mx-10 mx-5'>
				<ToastContainer></ToastContainer>
				<NavBar></NavBar>
				<Outlet></Outlet>
				<Footer></Footer>
			</div>
		</div>
	)
}
