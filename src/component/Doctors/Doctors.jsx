import React, { useEffect, useState } from 'react'
import Doctor from '../Doctor/Doctor';

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [vigibleDoctor, setVigibleDoctor] = useState(6);

    const handleVigibleDoctors = () => {
        if (vigibleDoctor === 6) {
            setVigibleDoctor(doctors.length);
        }
        else {
            setVigibleDoctor(6)
        }
    }

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    // console.log("doctors", doctors)
    return (
        <div className="">
            <div className="flex justify-center my-5">
                <div className="w-[80%]">
                    <h1 className='text-2xl md:text-5xl text-center md:leading-[3.5rem]'>Our Best Doctors</h1>
                    <p className="md:text-[#818181] text-center my-5">Our platform connects you with verified. exprenced doctors across vairous specialties -- all your convenience. Whether it's a routine checkup or urgent consultation book appointment in minutes and receive quality care you can trust</p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5'>
                {
                    doctors.slice(0, vigibleDoctor).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
            {
                doctors.length > 6 && (
                    <div className="flex justify-center">
                        <button className='btn shadow my-5 bg-blue-500 text-white' onClick={handleVigibleDoctors}>
                            {vigibleDoctor === 6 ? 'View All Doctors' : 'Show Less'}
                        </button>
                    </div>
                )
            }
        </div>
    )
}
