import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // Remove 'Bearer ' prefix if it already exists in the token
    const cleanToken = token.startsWith('Bearer ') ? token.slice(7) : token;
    config.headers.Authorization = `Bearer ${cleanToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post('/login', credentials),
  register: (userData) => api.post('/register', userData),
};

export const restaurantAPI = {
  getRestaurants: (params) => api.get('/restaurants', { params }),
  getRestaurant: (id) => api.get(`/restaurants/${id}`),
};

export const orderAPI = {
  getOrders: (params) => api.get('/analytics/orders', { params }),
  getOrderTrends: (restaurantId, params) => api.get(`/restaurants/${restaurantId}/trends`, { params }),
  getTopRestaurants: (params) => api.get('/analytics/top-restaurants', { params }),
};

export const dashboardAPI = {
  getOverview: (params) => api.get('/dashboard/overview', { params }),
};

export default api;