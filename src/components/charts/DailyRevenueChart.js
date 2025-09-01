import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';

const DailyRevenueChart = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-96 flex items-center justify-center">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-96">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Daily Revenue</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(value) => format(parseISO(value), 'MMM dd')}
          />
          <YAxis />
          <Tooltip 
            labelFormatter={(value) => format(parseISO(value), 'MMM dd, yyyy')}
            formatter={(value) => [`₹${value}`, 'Revenue']}
          />
          <Line type="monotone" dataKey="daily_revenue" stroke="#10B981" strokeWidth={2} />
        </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyRevenueChart;