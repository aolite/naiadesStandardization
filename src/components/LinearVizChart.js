
import React from "react";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

function LinearVizChart (props){

    return (
        <LineChart width={400} height={400} data={props.data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }}/>
            <Line type="monotone" dataKey="pv" stroke="#FF5733" activeDot={{ r: 8 }}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    );
}

export default LinearVizChart;
