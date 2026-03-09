import React from 'react'
import BookingChart from '../../component/BookingChart/BookingChart';

export default function Bookings() {
    return (
        <div>
            <div className="flex justify-center">
                <BookingChart></BookingChart>
            </div>
            <div className="flex justify-center my-5">
                <div className="w-[80%]">
                    <h1 className='text-2xl md:text-5xl text-center md:leading-[3.5rem]'>My Appointments</h1>
                    <p className="text-[#818181] text-center my-5">Our platform connects you with verified. exprenced doctors across vairous specialties -- all your convenience.</p>
                </div>
            </div>
        </div>
    )
}
