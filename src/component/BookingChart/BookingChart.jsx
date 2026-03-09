import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

export default function BookingChart() {
    const [chartData, setChartData] = useState([])
    const [index, setIndex] = useState(0)

    const doctors = useLoaderData();

    const data = doctors.map(doctor => {
        return {
            name: doctor.name,
            consultationFee: doctor.consultationFee
        };
    });

    const handleAddData = () => {
        if (index < data.length) {
            setChartData([...chartData, data[index]]);
            setIndex(index + 1);
        }
    }

    console.log('handle chart', handleAddData)

    return (
        <div style={{ width: "80%", height: 400 }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="consultationFee" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[30, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
