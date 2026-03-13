import React from 'react'
import './Banner.css'
import bannerImg1 from '../../assets/banner-img-1.png'
import bannerImg2 from '../../assets/banner-image2.jpg'

export default function Banner() {
    return (
        <div className='flex flex-col justify-center items-center border-2 p-5 border-[#FFFFFF] rounded-[1rem] border-b-0 shadow-(--header-shadow) !bg-linear-to-b from-gray-200 to-gray-50'>
            <div className="w-[80%]">
                <h1 className='text-2xl md:text-5xl !text-black text-center md:leading-[3.5rem]'>Dependable Care, Backed by Trusted Professionals.</h1>
                <p className="!text-gray-500 text-center my-5">Our platform connects you with verified. exprenced doctors across vairous specialties -- all your convenience. Whether it's a routine checkup or urgent consultation book appointment in minutes and receive quality care you can trust</p>
                <section className="grid sm:flex gap-5 justify-center">
                    <input className='rounded-[1.5rem] text-gray-500 md:w-[40%] border-1 border-gray-300 sm:border-0 shadow px-5 py-2 md:py-0' type="text" placeholder='Search any doctors' />
                    <button className='btn !bg-blue-700 !text-white rounded-[1.5rem] border-0'>Search Now</button>
                </section>
            </div>
            <div className="md:flex gap-5 mt-5">
                <img className='w-96 h-64 rounded mb-5' src={bannerImg1} alt="" />
                <img className='w-96 h-64 rounded' src={bannerImg2} alt="" />
            </div>
        </div>
    )
}
