import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { getDoctorsStored } from '../../utilis/addToDB';

export default function BookingChart() {
    const doctors = useLoaderData();
    const [data, setData] = useState([])
    const [chartData, setChartData] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const storedChart = getDoctorsStored();
        const storedChartInt = storedChart.map(id => parseInt(id));
        const storedChartData = doctors.filter(chart => storedChartInt.includes(chart.id));

        setData(storedChartData)
    }, [])

    const newData = data.map(data => {
        return {
            name: data.name,
            consultationFee: data.consultationFee
        };
    });

    if (index < newData.length) {
        setChartData([...chartData, newData[index]]);
        setIndex(index + 1);
    }
    // console.log('handle chart', handleAddChartData())

    return (
        <div style={{ width: "90%", height: 400, marginTop: "3rem" }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="consultationFee" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[50, 20, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

