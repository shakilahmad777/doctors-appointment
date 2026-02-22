import React from 'react'
import NavBar from '../../component/Header/NavBar'
import { Outlet } from 'react-router'
import Footer from '../../component/Footer/Footer'

export default function Root() {
	return (
		<div className="bg-gray-100">
			<div className='max-w-full md:mx-10 mx-5'>
				<NavBar></NavBar>
				<Outlet></Outlet>
				<Footer></Footer>
			</div>
		</div>
	)
}
