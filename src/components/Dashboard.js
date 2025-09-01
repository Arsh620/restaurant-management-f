import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { dashboardAPI } from '../services/api';
import RestaurantList from './RestaurantList';
import RestaurantDetails from './RestaurantDetails';
import TopRestaurants from './TopRestaurants';
import OrdersList from './OrdersList';

const Filters = ({ filters, setFilters }) => {
  const handleDateChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      dateRange: { ...prev.dateRange, [field]: value }
    }));
  };

  const handleAmountChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      amountRange: { ...prev.amountRange, [field]: value }
    }));
  };

  const handleHourChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      hourRange: { ...prev.hourRange, [field]: value }
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Advanced Filters
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Date Range */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Date Range</label>
          <div className="space-y-2">
            <input
              type="date"
              value={filters.dateRange.start}
              onChange={(e) => handleDateChange('start', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
            <input
              type="date"
              value={filters.dateRange.end}
              onChange={(e) => handleDateChange('end', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Amount Range */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Amount Range</label>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Min amount"
              value={filters.amountRange.min}
              onChange={(e) => handleAmountChange('min', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
            <input
              type="number"
              placeholder="Max amount"
              value={filters.amountRange.max}
              onChange={(e) => handleAmountChange('max', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Hour Range */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Hour Range</label>
          <div className="space-y-2">
            <input
              type="time"
              value={filters.hourRange.start}
              onChange={(e) => handleHourChange('start', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
            <input
              type="time"
              value={filters.hourRange.end}
              onChange={(e) => handleHourChange('end', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { logout, user } = useAuth();
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [overview, setOverview] = useState(null);
  const [filters, setFilters] = useState({
    dateRange: {
      start: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0],
      end: new Date().toISOString().split('T')[0]
    },
    amountRange: { min: '', max: '' },
    hourRange: { start: '', end: '' }
  });

  useEffect(() => {
    fetchOverview();
  }, [filters.dateRange]);

  const fetchOverview = async () => {
    try {
      const response = await dashboardAPI.getOverview({
        start_date: filters.dateRange.start,
        end_date: filters.dateRange.end
      });
      setOverview(response.data);
    } catch (error) {
      console.error('Error fetching overview:', error);
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header - Fixed */}
      <header className="bg-white shadow-lg border-b border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Restaurant Analytics
                </h1>
                <p className="text-gray-600 text-sm">Advanced business insights</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-semibold text-sm">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="hidden md:block">
                  <p className="text-gray-900 font-medium">Welcome back,</p>
                  <p className="text-gray-600 text-sm">{user?.name || 'User'}</p>
                </div>
              </div>
              
              {/* Logout Button */}
              <button
                onClick={logout}
                className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Fixed Left Sidebar - Restaurant List */}
        <div className="w-80 bg-white border-r border-gray-200 flex-shrink-0 h-full overflow-y-auto">
          <RestaurantList 
            selectedRestaurant={selectedRestaurant}
            setSelectedRestaurant={setSelectedRestaurant}
            filters={filters}
          />
        </div>

        {/* Scrollable Main Content */}
        <div className="flex-1 overflow-y-auto">
          <main className="max-w-5xl mx-auto py-8 px-6">
            {/* Filters Section - Reduced Width */}
            <div className="mb-6">
              <div className="max-w-4xl">
                <Filters filters={filters} setFilters={setFilters} />
              </div>
            </div>

            {/* Overview Cards - Reduced Width */}
            {overview && (
              <div className="mb-8 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                    <h3 className="text-sm font-medium opacity-90">Total Revenue</h3>
                    <p className="text-2xl font-bold">₹{parseFloat(overview.total_revenue).toLocaleString()}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                    <h3 className="text-sm font-medium opacity-90">Total Orders</h3>
                    <p className="text-2xl font-bold">{overview.total_orders}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                    <h3 className="text-sm font-medium opacity-90">Avg Order Value</h3>
                    <p className="text-2xl font-bold">₹{parseFloat(overview.avg_order_value).toFixed(0)}</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white">
                    <h3 className="text-sm font-medium opacity-90">Active Restaurants</h3>
                    <p className="text-2xl font-bold">{overview.active_restaurants}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Main Content Sections */}
            <div className="space-y-8">
              {/* Top Restaurants */}
              <TopRestaurants filters={filters} />
              
              {/* Filtered Orders */}
              <OrdersList filters={filters} />
              
              {/* Restaurant Details */}
              {selectedRestaurant && (
                <RestaurantDetails 
                  restaurant={selectedRestaurant} 
                  filters={filters}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;