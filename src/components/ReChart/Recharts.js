import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const data=[
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 1241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 42300,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 30000,
        "sell": 2726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 250000,
        "sell": 65290,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 60000,
        "sell": 1601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 170000,
        "sell": 26700,
        "revenue": 61000
    }
]

const Recharts = () => {
    return (
        <div>
            <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="month" stroke="#8884d8" />
  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
  <Line type="monotone" dataKey="sell" stroke="#F011ED" />
  <Line type="monotone" dataKey="investment" stroke="#35B505" />
</LineChart>
            
        </div>
    );
};

export default Recharts;