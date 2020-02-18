import React, {PureComponent, useCallback, useState} from "react";
import {Cell, Pie, PieChart} from "recharts";



function PieVizChart (props){

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
                                       percent, name,
                                   }) => {
        return `${name}-${(percent * 100).toFixed(0)}%`;
    };

    const options = {
        maintainAspectRatio: false,
        responsive: false,
        legend: {
            position: 'left',
            labels: {
                boxWidth: 10
            }
        }
    }

    return (
        <PieChart width={props.widthSize} height={props.heighSize}>
            <Pie
                isAnimationActive={false}
                data={props.data}
                labelLine={true}
                label={renderCustomizedLabel}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                options={options}
                fill="#8884d8"
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
