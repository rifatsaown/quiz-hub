import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart';

const Statistic = () => {
    const data= useLoaderData();
    return (
        <div>
            <Chart data={data.data}></Chart>
        </div>
    );
};

export default Statistic;