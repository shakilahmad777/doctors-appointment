import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

export default function BookingChart({booking}) {

    const chartData = booking.map(doctor => {
        return {
            name: doctor.name,
            fee: doctor.consultationFee
        }
    })

    return (
        <div style={{ width: "90%", height: 400, marginTop: "3rem" }}>
            <ResponsiveContainer>
                <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="fee" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[50, 20, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

