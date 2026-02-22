import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
    const footerLinks = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>My-Booking</NavLink></li>
        <li><NavLink>Blogs</NavLink></li>
        <li><NavLink>ContactUs</NavLink></li>
    </>
    return (
        <div className='md:mx-15'>
            <div className="flex justify-center">
                <img src={logo} alt="" className='' />
                <a className="btn btn-ghost text-xl md:text-2xl font-bold">Phudu</a>
            </div>
            <div className="footer shadow-sm justify-center my-5">
                <ul className='menu menu-horizontal px-1'>
                    {footerLinks}
                </ul>
            </div>
            <div className="flex justify-center gap-5 text-white">
                <p className='bg-[#008DFF] p-2 rounded-full'><Facebook></Facebook></p>
                <p className='bg-[#008DFF] p-2 rounded-full'><Twitter></Twitter></p>
                <p className='bg-[#1780B9] p-2 rounded-full'><Linkedin></Linkedin></p>
                <p className='bg-[#FF0000] p-2 rounded-full'><Youtube></Youtube></p>
            </div>
        </div>
    )
}
