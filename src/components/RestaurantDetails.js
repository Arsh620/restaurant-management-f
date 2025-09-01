import React, { useState, useEffect } from 'react';
import { orderAPI } from '../services/api';
import DailyOrdersChart from './charts/DailyOrdersChart';
import DailyRevenueChart from './charts/DailyRevenueChart';
import PeakHoursChart from './charts/PeakHoursChart';
import OrderValuePieChart from './charts/OrderValuePieChart';

const RestaurantDetails = ({ restaurant, filters }) => {
  const [trends, setTrends] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (restaurant) {
      fetchTrends();
    }
  }, [restaurant, filters]);

  const fetchTrends = async () => {
    setLoading(true);
    try {
      const response = await orderAPI.getOrderTrends(restaurant.id, {
        start_date: filters.dateRange.start,
        end_date: filters.dateRange.end,
        min_amount: filters.amountRange.min,
        max_amount: filters.amountRange.max,
        start_hour: filters.hourRange.start,
        end_hour: filters.hourRange.end
      });
      // Handle both direct object and nested data structure
      const trendsData = response.data.data || response.data;
      setTrends(trendsData);
    } catch (error) {
      console.error('Error fetching trends:', error);
      setTrends(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!trends) return null;

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{restaurant.name} - Analytics Dashboard</h2>
        
        {/* Metrics Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Orders</p>
                <p className="text-3xl font-bold mt-2">{trends.trends?.reduce((sum, day) => sum + day.daily_orders, 0) || 0}</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold mt-2">₹{trends.trends?.reduce((sum, day) => sum + parseFloat(day.daily_revenue), 0).toFixed(0) || 0}</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Avg Order Value</p>
                <p className="text-3xl font-bold mt-2">₹{trends.trends?.length ? (trends.trends.reduce((sum, day) => sum + parseFloat(day.avg_order_value), 0) / trends.trends.length).toFixed(0) : 0}</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section - Vertical Layout */}
      <div className="space-y-8">
        <DailyOrdersChart data={trends.trends} />
        <DailyRevenueChart data={trends.trends} />
        <PeakHoursChart data={trends.peak_hours} />
        <OrderValuePieChart data={trends.trends} />
      </div>
    </div>
  );
};

export default RestaurantDetails;