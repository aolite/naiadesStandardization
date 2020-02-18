import React from "react";
import {Cell, Pie, PieChart} from "recharts";



function PieVizChart (props){

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const renderCustomizedLabel = ({
                                       percent, name,
                                   }) => {
        return `${name}-${(percent * 100).toFixed(0)}%`;
    };

    return (
        <PieChart width={props.widthSize} height={props.heighSize}>
            <text x={props.widthSize/2} y={props.heighSize/2} textAnchor="middle" dominantBaseline="middle">
                {props.title}
            </text>
            <Pie
                data={props.data}
                labelLine={true}
                label={renderCustomizedLabel}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
            >
                {
                    props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
        </PieChart>
    );
}

export default PieVizChart;
