import React, { useState, useEffect } from 'react';
import { orderAPI } from '../services/api';

const TopRestaurants = ({ filters }) => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopRestaurants();
  }, [filters]);

  const fetchTopRestaurants = async () => {
    setLoading(true);
    try {
      const response = await orderAPI.getTopRestaurants({
        start_date: filters.dateRange.start,
        end_date: filters.dateRange.end,
        limit: 3
      });
      // Handle both direct array and nested data structure
      const restaurantData = response.data.data || response.data;
      setTopRestaurants(Array.isArray(restaurantData) ? restaurantData : []);
    } catch (error) {
      console.error('Error fetching top restaurants:', error);
      setTopRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Top 3 Restaurants by Revenue</h2>
      
      {topRestaurants.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No data available for the selected filters</p>
      ) : (
        <div className="space-y-4">
          {topRestaurants.map((restaurant, index) => (
            <div key={restaurant.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  index === 0 ? 'bg-yellow-500' : 
                  index === 1 ? 'bg-gray-400' : 'bg-orange-600'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{restaurant.name}</h3>
                  <p className="text-sm text-gray-600">{restaurant.location} • {restaurant.cuisine}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">₹{restaurant.total_revenue}</p>
                <p className="text-sm text-gray-600">{restaurant.total_orders} orders</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRestaurants;