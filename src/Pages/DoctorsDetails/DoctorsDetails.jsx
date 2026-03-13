import { ArrowRight, BadgeAlert } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify';
import { addToDoctorDB } from '../../utilis/addToDB';

export default function DoctorsDetails() {
    const [on, setOn] = useState(true);

    const { id } = useParams();
    const idParsInt = parseInt(id);
    const doctors = useLoaderData();
    const singleDoctors = doctors.find(doctor => doctor.id === idParsInt);
    const { name, image, experience, education, registrationNumber, speciality, available, consultationFee, hospital, schedule } = singleDoctors;

    const navigate = useNavigate();

    const handleDoctorList = (id) => {
        addToDoctorDB(id)
    }

    return (
        <div className=''>
            <div className="!bg-[#FFFFFF] rounded-[1rem] mb-5 py-15 text-center shadow-(--header-shadow)">
                <h1 className='text-2xl md:text-5xl mb-5 shadow-(--header-shadow) p-3'>Doctors Profile Details</h1>
                <div className="flex justify-center">
                    <div className="md:w-[70%] ">
                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat iste, corporis qui accusantium sed velit architecto quisquam quis dignissimos rem, natus, voluptatem quam. Minima animi facere enim, ipsa quis illo.</p>
                    </div>
                </div>
            </div>
            {/* doctores profile details end */}

            <div className="md:flex gap-5 !bg-[#FFFFFF] rounded-[1rem] p-5 md:p-15 shadow-(--header-shadow)">
                <div className="flex justify-center">
                    <img src={image} className='shadow rounded-[1rem] w-96 h-64 !bg-[#FFFFFF]' alt="" />
                </div>
                <div className="flex flex-col leading-7">
                    <h1>{name}</h1>
                    <small>{education}</small>
                    <small>Working at</small>
                    <p>{hospital}</p>
                    <small className='border-y-1 border-dashed my-3 !border-orange-300'>{registrationNumber}</small>
                    <span className='flex flex-wrap gap-3 items-center '>
                        <small>Availability</small>
                        {
                            on ? (schedule.workingDays.map((day, index) => <button className='btn border !border-green-200 !bg-green-50 !text-green-500 rounded-full' key={index}>{day}</button>)) : (<button className='btn border !border-orange-200 !bg-orange-50 !text-orange-500 rounded-full'>Not Available | Please Come <ArrowRight className='animate-ping'></ArrowRight></button>)
                        }
                        {
                            on ? '' : (schedule.workingDays.map((day, index) => <small className='  !text-green-500' key={index}>{day}</small>))
                        }
                    </span>
                    <small>Consultation Fee: {consultationFee} Taka (include Vat) Per Consultation</small>
                    <button className={`btn ${on ? '!bg-blue-600 text-white mt-3' : '!bg-red-400'}`} onClick={() => setOn(!on)}>
                        {
                            on ? 'ON' : 'OFF'
                        }
                    </button>
                </div>
            </div>
            {/* doctors details end */}

            <div className="!bg-[#FFFFFF] rounded-[1rem] mt-5 py-15 shadow-(--header-shadow)">
                <div className="">
                    <h1 className='text-2xl md:text-3xl text-center shadow-(--header-shadow) p-3 mb-5'>Book an Appointment</h1>
                    <div className="flex justify-between mx-5">
                        <p>Availability</p>
                        {
                            on ? (<button className='btn border !border-green-200 !bg-green-50 !text-green-500 rounded-full'>Doctor Available Today</button>) : (<button className='btn border border-orange-200 bg-orange-50 text-orange-500 rounded-full'>Doctor Not Available Today</button>)
                        }
                    </div>
                </div>
                <div className="grid">
                    <p className='md:flex gap-2 m-5 p-2 !bg-orange-50 !text-orange-400 rounded md:rounded-full'>
                        <BadgeAlert></BadgeAlert> Due to high patient volume, we currently accepting appointments for doday only. We appreciate your understanding and cooperation.
                    </p>
                    {
                        on ? (<button onClick={() => {handleDoctorList(id), navigate('/bookings')}} className='btn !bg-blue-500 rounded-full mx-10 !text-white md:text-2xl py-5'>Book Appointment Now</button>) : (<button onClick={() => toast.error("Doctor Not Available")} className='btn !bg-blue-500 rounded-full mx-10 !text-white md:text-2xl py-5 opacity-50'>Book Appointment Now</button>)
                    }
                </div>
            </div>
        </div>
    )
}
