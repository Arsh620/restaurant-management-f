import React, { useState, useEffect } from 'react';
import { restaurantAPI } from '../services/api';

const RestaurantList = ({ selectedRestaurant, setSelectedRestaurant, filters }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await restaurantAPI.getRestaurants();
      // Handle both direct array and nested data structure
      const restaurantData = response.data.data || response.data;
      setRestaurants(Array.isArray(restaurantData) ? restaurantData : []);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredRestaurants = restaurants
    .filter(restaurant => 
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'location') return a.location.localeCompare(b.location);
      if (sortBy === 'cuisine') return a.cuisine.localeCompare(b.cuisine);
      return 0;
    });

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header Section - Fixed */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Restaurants</h2>
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="name">Sort by Name</option>
          <option value="location">Sort by Location</option>
          <option value="cuisine">Sort by Cuisine</option>
        </select>
      </div>

      {/* Restaurant List - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            onClick={() => setSelectedRestaurant(restaurant)}
            className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedRestaurant?.id === restaurant.id ? 'bg-indigo-50 border-indigo-200' : ''
            }`}
          >
            <h3 className="font-medium text-gray-900">{restaurant.name}</h3>
            <p className="text-sm text-gray-600">{restaurant.location}</p>
            <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;