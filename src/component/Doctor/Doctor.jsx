import React from 'react'
import { Link } from 'react-router';

export default function Doctor({ doctor }) {
    const { id, name, image, experience, education, registrationNumber, speciality } = doctor;
    // console.log("image", image)
    return (
        <div className='grid justify-center rounded-[1rem] shadow p-5 bg-[#FFFFFF]'>
            <div className="overflow-hidden P-5 rounded-[1rem]">
                {/* <img src={image} className='w-48' alt="kadhflk" /> */}
                <img
                    src={image}
                    alt={name}
                    className='shadow rounded-[1rem] w-96 h-64 bg-[#FFFFFF] hover:scale-120 duration-300 ease-in-out'
                />
            </div>
            <section className='flex gap-10 my-3'>
                <button className='btn !text-green-500 border-0 shadow-(--header-shadow) !bg-gray-200 rounded-full'>Available</button>
                <button className='btn !text-green-500 border-0 shadow-(--header-shadow) !bg-gray-200 rounded-full'>{experience}</button>
            </section>
            <h2>{name}</h2>
            <p><small>{education}</small></p>
            <p><small>{registrationNumber}</small></p>
            <Link className='btn rounded-full !text-blue-500 border-1 !border-green-500' to={`/doctors/${id}`}><button>View Details</button></Link>
        </div>
    )
}
