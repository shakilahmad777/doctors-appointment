import React from 'react'

export default function Appointments({ appoints }) {
    const { name, education, consultationFee } = appoints;
    return (
        <div className="bg-[#FFFFFF] shadow-(--header-shadow) p-5 md:p-10  rounded">
            <div className='flex justify-between items-center'>
                <div className="">
                    <h1>{name}</h1>
                    <small>{education}</small>
                </div>
                <small>
                    ConsultationFee: {
                        consultationFee
                    } Tk inc Vat
                </small>
            </div>
            <div className="grid mt-5">
                <button className='btn border-red-600 text-red-600 rounded-full'>Cancle Appointment</button>
            </div>
        </div>
    )
}
