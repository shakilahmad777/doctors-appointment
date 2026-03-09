import React, { useEffect, useState } from 'react'
import doctor from '../../assets/success-doctor.png'
import patients from '../../assets/success-patients.png'
import review from '../../assets/success-review.png'
import staffs from '../../assets/success-staffs.png'
import {countUp} from '../../utilis/countUp'

export default function MedicalService() {
    const [doctorCount, setDoctorCount] = useState(0);
    const [patientsCount, setPatientsCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [staffsCount, setStaffsCount] = useState(0);

    useEffect(() => {
        countUp(200, 2000, setDoctorCount);
        countUp(3000, 2000, setPatientsCount);
        countUp(400, 2000, setReviewCount);
        countUp(500, 2000, setStaffsCount);
    },[])

    return (
        <div>
            <div className="flex justify-center my-5">
                <div className="w-[80%]">
                    <h1 className='text-2xl md:text-5xl text-center md:leading-[3.5rem]'>We Provide Best Medical Services</h1>
                    <p className="text-[#818181] text-center my-5">Our platform connects you with verified. exprenced doctors across vairous specialties -- all your convenience.</p>
                </div>
            </div>
            <div className="flex justify-center gap-5 flex-wrap my-5">
                <div className="shadow p-5 rounded w-[250px] bg-[#FFFFFF]">
                    <div className="">
                        <img src={doctor} alt="" />
                    </div>
                    <h1 className='text-5xl my-5'> {doctorCount} +</h1>
                    <p>Total Doctors</p>
                </div>
                <div className="shadow p-5 rounded w-[250px] bg-[#FFFFFF]">
                    <div className="">
                        <img src={patients} alt="" />
                    </div>
                    <h1 className='text-5xl my-5'> {patientsCount} +</h1>
                    <p>Total Patients</p>
                </div>
                <div className="shadow p-5 rounded w-[250px] bg-[#FFFFFF]">
                    <div className="">
                        <img src={review} alt="" />
                    </div>
                    <h1 className='text-5xl my-5'> {reviewCount} +</h1>
                    <p>Total Review</p>
                </div>
                <div className="shadow p-5 rounded w-[250px] bg-[#FFFFFF]">
                    <div className="">
                        <img src={staffs} alt="" />
                    </div>
                    <h1 className='text-5xl my-5'> {staffsCount} +</h1>
                    <p>Total Staffs</p>
                </div>
            </div>
        </div>
    )
}
