"use client"

import React from "react";
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const Chart = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <Card x-chunk="dashboard-01-chunk-3" className="bg-gray-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-300">
              <CardTitle className="text-sm font-medium text-gray-800">
                Total Orders
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-96">
              <LineChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </CardContent>
          </Card>
        </div>
        <div className="flex-grow">
          <Card x-chunk="dashboard-01-chunk-3" className="bg-gray-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-300">
              <CardTitle className="text-sm font-medium text-gray-800">
                Total Orders (Bar Chart)
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-96">
              <BarChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex-grow">
        <Card x-chunk="dashboard-01-chunk-3" className="bg-gray-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-300">
            <CardTitle className="text-sm font-medium text-gray-800">
              Total Orders (Pie Chart)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-96">
            <PieChart width={730} height={450}>
              <Pie
                data={data}
                dataKey="uv"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chart;
