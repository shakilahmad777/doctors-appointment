import React from 'react'

export default function Doctor({ doctor }) {
    const { id, name, image, experience, education, registrationNumber, speciality } = doctor;
    // console.log("image", image)
    return (
        <div className='grid justify-center rounded shadow p-5'>
            <div className=" P-5">
                {/* <img src={image} className='w-48' alt="kadhflk" /> */}
                <img
                    src={image}
                    alt={name}
                    className='shadow rounded-[1rem] w-96 h-64 bg-[#FFFFFF]'
                />
            </div>
            <section className='flex gap-10 my-3'>
                <button className='btn text-green-500 bg-gray-200 rounded-full'>Available</button>
                <button className='btn text-blue-500 bg-gray-200 rounded-full'>{experience}</button>
            </section>
            <h2>{name}</h2>
            <p><small>{education}</small></p>
            <p><small>{registrationNumber}</small></p>
            <button className='btn rounded-full text-blue-500 border-1 border-blue-500'>View Details</button>
        </div>
    )
}
