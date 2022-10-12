import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const loaderData = useLoaderData();
    const data = loaderData.data
  

    return (
        <div className='mt-10'>
          <h2 className='mt-5 mb-5 text-center text-cyan-500 text-5xl'>Quiz Statistics</h2>
        <div
          style={{ width: "100%", height: "500px" }}
          className="recharts-wrapper last: "
        >
          <ResponsiveContainer>
          <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="name" stroke="#8884d8" />
  <Line type="monotone" dataKey="total" stroke="#82ca9d" />
</LineChart>
          </ResponsiveContainer>
        </div>
        </div>
    );
};

export default Statistics;