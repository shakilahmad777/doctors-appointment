import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'
import { navItems } from '../../utilis/NavLink'

export default function Footer() {
    const footerLinks = navItems;
    return (
        <div className='bg-[#FFFFFF] mt-10 p-10'>
            <div className="flex justify-center">
                <img src={logo} alt="" className='' />
                <a className="btn btn-ghost text-xl md:text-2xl font-bold">Phudu</a>
            </div>
            <div className="shadow my-7 mx-10">
                <ul className='menu menu-horizontal px-1 footer justify-center'>
                    {
                        footerLinks.map((link, index) => <li className=''><NavLink key={index} to={link.path} className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold border-r-2" : ""
                        }>{link.name}</NavLink></li>)
                    }
                </ul>
            </div>
            <div className="flex justify-center gap-5 text-white">
                <p className='bg-[#008DFF] p-2 rounded-full'><Link to=''><Facebook></Facebook></Link></p>
                <p className='bg-[#008DFF] p-2 rounded-full'><Link to=''><Twitter></Twitter></Link></p>
                <p className='bg-[#1780B9] p-2 rounded-full'><Link to=''><Linkedin></Linkedin></Link></p>
                <p className='bg-[#FF0000] p-2 rounded-full'><Link to=''><Youtube></Youtube></Link></p>
            </div>
        </div>
    )
}
