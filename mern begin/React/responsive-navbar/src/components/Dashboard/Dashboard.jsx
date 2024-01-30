import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const Dashboard = () => {
    const students = [
        {
            id: 1,
            name: 'John Doe',
            physicsMarks: 85,
            chemistryMarks: 90,
            mathsMarks: 95
        },
        {
            id: 2,
            name: 'Jane Smith',
            physicsMarks: 75,
            chemistryMarks: 80,
            mathsMarks: 85
        },
        {
            id: 3,
            name: 'Alice Johnson',
            physicsMarks: 90,
            chemistryMarks: 85,
            mathsMarks: 80
        },
        {
            id: 4,
            name: 'Bob Williams',
            physicsMarks: 80,
            chemistryMarks: 75,
            mathsMarks: 70
        },
        {
            id: 5,
            name: 'Sarah Davis',
            physicsMarks: 95,
            chemistryMarks: 90,
            mathsMarks: 85
        },
        {
            id: 6,
            name: 'Michael Brown',
            physicsMarks: 70,
            chemistryMarks: 75,
            mathsMarks: 80
        },
        {
            id: 7,
            name: 'Emily Wilson',
            physicsMarks: 85,
            chemistryMarks: 80,
            mathsMarks: 75
        },
        {
            id: 8,
            name: 'David Taylor',
            physicsMarks: 90,
            chemistryMarks: 95,
            mathsMarks: 80
        },
        {
            id: 9,
            name: 'Olivia Anderson',
            physicsMarks: 80,
            chemistryMarks: 85,
            mathsMarks: 90
        },
        {
            id: 10,
            name: 'James Johnson',
            physicsMarks: 75,
            chemistryMarks: 80,
            mathsMarks: 85
        },
        // Add more student objects as needed
    ];

    return (
        <div>
        <ResponsiveContainer width='80%' height={300}>
            <BarChart className='m-24'  data={students}> 
            <XAxis dataKey='name'></XAxis>
                <Bar dataKey='physicsMarks' fill='#8884d8' />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;