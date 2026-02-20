import { NavLink } from 'react-router'
import logo from '../../assets/logo.png'

export default function NavBar() {
    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>My-Booking</NavLink></li>
        <li><NavLink>Blogs</NavLink></li>
        <li><NavLink>ContactUs</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="flex">
                        <img src={logo} alt="" className=''/>
                        <a className="btn btn-ghost text-xl md:text-2xl font-bold">Phudu</a>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-blue-700 text-white rounded-[1.5rem]">Emargency</a>
                </div>
            </div>
        </div>
    )
}
