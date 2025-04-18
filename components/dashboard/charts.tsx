"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 1900 },
  { month: "Mar", amount: 1600 },
  { month: "Apr", amount: 1400 },
  { month: "May", amount: 2000 },
  { month: "Jun", amount: 1800 },
  { month: "Jul", amount: 2200 },
  { month: "Aug", amount: 2100 },
  { month: "Sep", amount: 2300 },
  { month: "Oct", amount: 2400 },
  { month: "Nov", amount: 2000 },
  { month: "Dec", amount: 2500 },
];

const brandData = [
  { name: "Brand 1", value: 88 },
  { name: "Brand 2", value: 61 },
  { name: "Brand 3", value: 48 },
  { name: "Brand 4", value: 46 },
  { name: "Brand 5", value: 31 },
];

const COLORS = ["#006D77", "#83C5BE", "#EDF6F9", "#FFDDD2", "#E29578"];

export function Charts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-lg border bg-white p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Spend (DCL)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Bar dataKey="amount" fill="#006D77" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6">
        <h3 className="text-lg font-semibold mb-4">Performing Brands (DCL)</h3>
        <div className="space-y-4">
          {brandData.map((brand, index) => (
            <div key={brand.name} className="flex items-center justify-between">
              <span>{brand.name}</span>
              <div className="flex items-center gap-2">
                <span>{brand.value}%</span>
                <span className="text-green-500">↑</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6">
        <h3 className="text-lg font-semibold mb-4">Spend by Network Brand (DCL)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={brandData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {brandData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6">
        <h3 className="text-lg font-semibold mb-4">Spend by month (DCL)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#006D77"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}