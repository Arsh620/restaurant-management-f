# RestaurantIQ Analytics Platform - Frontend

A **React-based analytics dashboard** for restaurant order trends and performance metrics.  
Designed for **multi-location restaurants and enterprises** with real-time data insights.

---

## 🚀 Features

- **Authentication**: Login/Register with JWT tokens  
- **Restaurant Management**: View, search, and filter restaurants  
- **Order Analytics**: Daily orders, revenue trends, and peak hours  
- **Top Performers**: Highlights top 3 restaurants by revenue  
- **Advanced Filtering**: Date range, amount range, and hour range (with AM/PM)  
- **Interactive Charts**: Line, bar, and pie charts  
- **Responsive Design**: Mobile-first with sticky navigation  

---

## 🛠️ Tech Stack

- **React 19** – Frontend framework  
- **React Router DOM** – Client-side routing  
- **Axios** – API calls  
- **Recharts** – Data visualization  
- **Tailwind CSS** – Styling  
- **Date-fns** – Date manipulation  

---

## 📋 Prerequisites

- **Node.js** v14 or higher  
- **npm** or **yarn**  
- **Backend API** running at `http://localhost:8000`  

---

## ⚡ Quick Start

### 1. Clone Repository
git clone <repository-url>
cd restaurant-management-f
npm install
REACT_APP_API_URL=http://localhost:8000/api
npm start
src/
├── components/
│   ├── charts/
│   │   ├── DailyOrdersChart.js
│   │   ├── DailyRevenueChart.js
│   │   ├── OrderValuePieChart.js
│   │   └── PeakHoursChart.js
│   ├── Dashboard.js
│   ├── Home.js
│   ├── Login.js
│   ├── RestaurantList.js
│   ├── RestaurantDetails.js
│   ├── TopRestaurants.js
│   └── OrdersList.js
├── context/
│   └── AuthContext.js
├── services/
│   └── api.js
├── App.js
└── index.js
npm start       # Start dev server
npm run build   # Build for production
npm test        # Run tests
npm run eject   # Eject from CRA
API Endpoints

The frontend connects to these APIs:

POST /api/login – User login

POST /api/register – User registration

GET /api/restaurants – List all restaurants

GET /api/restaurants/{id}/trends – Restaurant trends

GET /api/restaurants/top – Top restaurants by revenue

GET /api/orders – Orders with filters

GET /api/dashboard/overview – Overview metrics

Key Features Overview
🔐 Authentication

Login/Register toggle

Password strength validation

JWT token-based authentication

Error messages for validation


Dashboard Analytics

Sticky header

Restaurant sidebar

Key metrics (Revenue, Orders, AOV, Active restaurants)

Real-time filtering

🕵️ Advanced Filters

Date range with calendar picker

Min/max order value filter

Hour range with 24H & AM/PM toggle

Data Visualization

Line charts, bar charts, pie charts

Hover interactions and animations

Fully responsive layout

Build for Production
npm run build

Security

JWT authentication

Protected routes

Input validation

Error handling

HTTPS ready
