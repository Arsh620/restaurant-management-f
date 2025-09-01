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

  const formatTimeToAMPM = (time24) => {
    if (!time24) return '';
    const [hours, minutes] = time24.split(':');
    const hour12 = hours % 12 || 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
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
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">Hour Range</label>
            {(filters.hourRange.start || filters.hourRange.end) && (
              <button
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, hourRange: { start: '', end: '' } }))}
                className="text-xs text-red-600 hover:text-red-800 font-medium"
              >
                Clear
              </button>
            )}
          </div>
          <div className="space-y-2">
            <div className="relative">
              <input
                type="time"
                value={filters.hourRange.start}
                onChange={(e) => handleHourChange('start', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Start time"
              />
              {filters.hourRange.start && (
                <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  {formatTimeToAMPM(filters.hourRange.start)}
                </div>
              )}
            </div>
            <div className="relative">
              <input
                type="time"
                value={filters.hourRange.end}
                onChange={(e) => handleHourChange('end', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="End time"
              />
              {filters.hourRange.end && (
                <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  {formatTimeToAMPM(filters.hourRange.end)}
                </div>
              )}
            </div>
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
      {/* Sticky Header - Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200 flex-shrink-0">
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

      <div className="flex flex-1 h-full">
        {/* Sticky Left Sidebar - Restaurant List */}
        <aside className="w-80 bg-white border-r border-gray-200 flex-shrink-0 h-full overflow-y-auto">
          <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Restaurants
            </h2>
          </div>
          <div className="p-4">
            <RestaurantList 
              selectedRestaurant={selectedRestaurant}
              setSelectedRestaurant={setSelectedRestaurant}
              filters={filters}
            />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-6 max-w-7xl">
            {/* Filters Section */}
            <section className="mb-6">
              <Filters filters={filters} setFilters={setFilters} />
            </section>

            {/* Overview Section */}
            {overview && (
              <section className="mb-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Dashboard Overview
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100 text-sm font-medium">Total Revenue</p>
                          <p className="text-3xl font-bold mt-2">₹{parseFloat(overview.total_revenue).toLocaleString()}</p>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-100 text-sm font-medium">Total Orders</p>
                          <p className="text-3xl font-bold mt-2">{overview.total_orders}</p>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100 text-sm font-medium">Avg Order Value</p>
                          <p className="text-3xl font-bold mt-2">₹{parseFloat(overview.avg_order_value).toFixed(0)}</p>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-orange-100 text-sm font-medium">Active Restaurants</p>
                          <p className="text-3xl font-bold mt-2">{overview.active_restaurants}</p>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Analytics Sections */}
            <div className="space-y-6">
              {/* Top Restaurants */}
              <section className="bg-white rounded-xl shadow-sm border border-gray-200">
                <TopRestaurants filters={filters} />
              </section>
              
              {/* Orders List */}
              <section className="bg-white rounded-xl shadow-sm border border-gray-200">
                <OrdersList filters={filters} />
              </section>
              
              {/* Restaurant Details */}
              {selectedRestaurant && (
                <section className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <RestaurantDetails 
                    restaurant={selectedRestaurant} 
                    filters={filters}
                  />
                </section>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;