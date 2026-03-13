import { NavLink } from 'react-router'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import './NavBar.css'
import { X } from 'lucide-react';
import { navItems } from '../../utilis/NavLink';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const links = navItems;
    console.log(links)
    return (
        <div className='sticky top-0 z-50 bg-[#F3F4F6]'>
            <div className="navbar md:px-20">
                <div className="navbar-start">
                    <div className="md:hidden">
                        <div role="button" className="btn btn-ghost !text-black" onClick={() => setOpen(!open)}>
                            {
                                open ? <X></X> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            }
                        </div>
                        <ul className={`!bg-blue-300 !text-black menu menu-sm rounded-box mt-3 w-52 p-2 shadow absolute ${open ? 'top-13' : '-top-64'} duration-1000`}>
                            {
                                links.map((link, index) => <li className='small-menu'><NavLink key={index} to={link.path} className={({ isActive }) =>
                                    isActive ? "!bg-blue-500 !text-white text-center" : ""
                                }>{link.name}</NavLink></li>)
                            }
                        </ul>
                    </div>
                    <div className="flex">
                        <img src={logo} alt="" className='' />
                        <a className="btn btn-ghost !text-black text-xl md:text-2xl font-bold">Phudu</a>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 !text-[#818181]">
                        {
                            links.map((link, index) => <li><NavLink key={index} to={link.path} className={({ isActive }) =>
                                isActive ? "!text-blue-500 font-bold border-r-2" : ""
                            }>{link.name}</NavLink></li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn !bg-blue-700 !text-white rounded-[1.5rem] border-0">Emargency</a>
                </div>
            </div>
        </div>
    )
}
