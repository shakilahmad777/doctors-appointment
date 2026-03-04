
import Banner from '../../component/Banner/Banner'
import Doctors from '../../component/Doctors/Doctors'
import MedicalService from '../../component/MedicalService/MedicalService'

export default function Home() {
	return (
		<div>
			<h1>this is home</h1>
			<Banner></Banner>
			<Doctors></Doctors>
			<MedicalService></MedicalService>
		</div>
	)
}
