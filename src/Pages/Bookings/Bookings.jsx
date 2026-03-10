import React, { useEffect, useState } from 'react'
import BookingChart from '../../component/BookingChart/BookingChart';
import { getDoctorsStored } from '../../utilis/addToDB';
import { useLoaderData } from 'react-router';
import Appointments from '../../component/Appointments/Appointments';

export default function Bookings() {
    const doctors = useLoaderData()
    const [booking, setBooking] = useState([]);
    
    useEffect(() => {
        const storedBookingDoctor = getDoctorsStored();
        const bookingDoctorInt = storedBookingDoctor.map(id => parseInt(id));
        const bookingDoctor = doctors.filter(booking => bookingDoctorInt.includes(booking.id));
        
        setBooking(bookingDoctor)
        console.log('appointment',storedBookingDoctor)
    }, [])

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
            <div className="flex gap-5 flex-col">
                {
                    booking.map(appoints => <Appointments key={appoints.id} appoints={appoints}></Appointments>)
                }
            </div>
        </div>
    )
}
