import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Chart = ({ data }) => {
  return (
    <div>
        <h1 className="text-3xl font-semibold text-secondary-focus mt-2 text-center">Statistic Of Quiz</h1>
      <div className="flex justify-center items-center h-[80vh]">
        <LineChart width={600} height={500} data={data}>
          <Line
            type="monotone"
            dataKey="total"
            stroke="#e97f8e"
            strokeWidth={2}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
