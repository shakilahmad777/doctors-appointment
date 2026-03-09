import { toast } from "react-toastify";

const getDoctorsStored = () => {
    const getDoctorStored = localStorage.getItem('doctor-list');
    if(getDoctorStored) {
        const doctorStoredSTR = JSON.parse(getDoctorStored);
        return doctorStoredSTR;
    }
    else {
        return [];
    }
}

const addToDoctorDB = (id) => {
    const storedDoctor = getDoctorsStored();
    if(storedDoctor.includes(id)) {
        alert("doctor is alredy exist")
    }
    else{
        storedDoctor.push(id);
        const storedDoctorStringify = JSON.stringify(storedDoctor);
        localStorage.setItem('doctor-list', storedDoctorStringify)

        toast.success('your appointment confirm')
    }
}

export {addToDoctorDB}