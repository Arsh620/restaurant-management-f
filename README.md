# RestaurantIQ Analytics Platform - Frontend

<<<<<<< HEAD
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14%2B-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](#)

A comprehensive React-based analytics dashboard for restaurant order trends and performance metrics. This platform provides real-time insights into restaurant operations, revenue tracking, and customer behavior analysis.

## 📸 Screenshots

### Dashboard Overview
![Dashboard](docs/images/dashboard.png)

### Restaurant Analytics
![Analytics](docs/images/analytics.png)

### Mobile View
![Mobile](docs/images/mobile.png)

## 🚀 Features

### Core Features
- **🔐 User Authentication**: Secure login/register with JWT tokens and password strength validation
- **🏪 Restaurant Management**: Comprehensive restaurant listing with search, filter, and detailed analytics
- **📊 Order Analytics**: Real-time daily orders, revenue trends, and peak hours analysis
- **🏆 Top Performers**: Dynamic top 3 restaurants ranking by revenue and order volume
- **🔍 Advanced Filtering**: Multi-parameter filtering with date ranges, amount ranges, and time-based filters
- **📈 Interactive Charts**: Dynamic line charts, bar charts, pie charts with hover effects and animations
- **📱 Responsive Design**: Mobile-first approach with sticky navigation and touch-friendly interface

### Advanced Analytics
- **Revenue Tracking**: Daily, weekly, and monthly revenue analysis
- **Customer Insights**: Order patterns and customer behavior analytics
- **Performance Metrics**: Average order value, peak hours, and trend analysis
- **Comparative Analysis**: Restaurant performance comparison tools
- **Export Functionality**: Data export in CSV and PDF formats
- **Real-time Updates**: Live data synchronization with backend

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features and improved performance
- **React Router DOM v6** - Modern client-side routing with nested routes
- **React Context API** - State management for authentication and global state

### UI & Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework with JIT compilation
- **Headless UI** - Unstyled, accessible UI components
- **React Icons** - Popular icon library with 10k+ icons
- **Framer Motion** - Production-ready motion library for animations

### Data & API
- **Axios 1.6** - Promise-based HTTP client with interceptors
- **React Query (TanStack Query)** - Data fetching and caching library
- **Date-fns 3.0** - Modern JavaScript date utility library

### Charts & Visualization
- **Recharts 2.8** - Composable charting library built on React components
- **D3.js** - Data-driven documents for advanced visualizations

### Development Tools
- **Create React App** - Zero-configuration React development environment
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit validation

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

### Required Software
- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** - For version control

### Backend Requirements
- **Backend API** running on `http://localhost:8000`
- **Database** (PostgreSQL/MySQL) configured and running
- **Redis** (optional) for session management

### Development Environment
- **VS Code** (recommended) with React extensions
- **Chrome DevTools** or **React Developer Tools**
- **Postman** or similar API testing tool

### System Requirements
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 2GB free space
- **OS**: Windows 10+, macOS 10.14+, or Linux Ubuntu 18.04+
=======
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
>>>>>>> a055665ba86db53695a317bc31efce6d7f88a6e0

## ⚡ Quick Start

### 1. Clone Repository
git clone <repository-url>
cd restaurant-management-f
npm install
<<<<<<< HEAD
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```bash
# API Configuration
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_API_TIMEOUT=10000

# Authentication
REACT_APP_JWT_SECRET=your-jwt-secret-key
REACT_APP_TOKEN_EXPIRY=24h

# Features
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_ENABLE_EXPORT=true
REACT_APP_MAX_UPLOAD_SIZE=5242880

# Development
REACT_APP_DEBUG_MODE=true
REACT_APP_LOG_LEVEL=info

# External Services (Optional)
REACT_APP_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
REACT_APP_SENTRY_DSN=your-sentry-dsn
```

### 4. Additional Configuration Files

Create these optional configuration files:

#### `.env.local` (for local development)
```bash
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_DEBUG_MODE=true
```

#### `.env.production` (for production)
```bash
REACT_APP_API_URL=https://api.yourdomain.com/api
REACT_APP_DEBUG_MODE=false
```

### 5. Start Development Server

```bash
npm start
```

The application will automatically open at [http://localhost:3000](http://localhost:3000)

### 6. Verify Installation

Check if everything is working correctly:

1. **Frontend**: Navigate to [http://localhost:3000](http://localhost:3000)
2. **API Connection**: Check browser console for any API errors
3. **Authentication**: Try logging in with test credentials
4. **Charts**: Verify that charts are rendering properly

## 🔧 Development Setup

### IDE Configuration

#### VS Code Extensions (Recommended)
```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

#### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

## 📁 Project Structure

```
=======
REACT_APP_API_URL=http://localhost:8000/api
npm start
>>>>>>> a055665ba86db53695a317bc31efce6d7f88a6e0
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

<<<<<<< HEAD
### Development Commands

```bash
npm start              # Start development server (http://localhost:3000)
npm run dev            # Alias for npm start
npm run build          # Create production build
npm run build:analyze  # Build with bundle analyzer
npm test               # Run test suite in watch mode
npm run test:coverage  # Run tests with coverage report
npm run test:ci        # Run tests in CI mode
npm run eject          # Eject from Create React App (irreversible)
```

### Code Quality

```bash
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint errors automatically
npm run format         # Format code with Prettier
npm run type-check     # Run TypeScript type checking
```

### Deployment

```bash
npm run deploy         # Deploy to production
npm run deploy:staging # Deploy to staging environment
npm run preview        # Preview production build locally
```

### Utilities

```bash
npm run clean          # Clean build artifacts
npm run deps:check     # Check for outdated dependencies
npm run deps:update    # Update dependencies
npm run size           # Analyze bundle size
```
=======
POST /api/login – User login

POST /api/register – User registration
>>>>>>> a055665ba86db53695a317bc31efce6d7f88a6e0

GET /api/restaurants – List all restaurants

<<<<<<< HEAD
### Authentication Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `POST` | `/api/auth/login` | User authentication | `{email, password}` | `{token, user, expiresIn}` |
| `POST` | `/api/auth/register` | User registration | `{name, email, password, confirmPassword}` | `{token, user}` |
| `POST` | `/api/auth/logout` | User logout | `{token}` | `{message}` |
| `POST` | `/api/auth/refresh` | Refresh JWT token | `{refreshToken}` | `{token, expiresIn}` |
| `GET` | `/api/auth/profile` | Get user profile | - | `{user}` |
| `PUT` | `/api/auth/profile` | Update user profile | `{name, email}` | `{user}` |

### Restaurant Endpoints

| Method | Endpoint | Description | Query Parameters | Response |
|--------|----------|-------------|------------------|----------|
| `GET` | `/api/restaurants` | Get all restaurants | `page, limit, search, category` | `{restaurants[], total, page}` |
| `GET` | `/api/restaurants/{id}` | Get restaurant details | - | `{restaurant}` |
| `GET` | `/api/restaurants/{id}/analytics` | Get restaurant analytics | `startDate, endDate` | `{analytics}` |
| `GET` | `/api/restaurants/{id}/trends` | Get order trends | `period, startDate, endDate` | `{trends[]}` |
| `GET` | `/api/restaurants/top` | Top restaurants by revenue | `limit, period` | `{restaurants[]}` |
| `POST` | `/api/restaurants` | Create restaurant | `{name, address, category}` | `{restaurant}` |
| `PUT` | `/api/restaurants/{id}` | Update restaurant | `{name, address, category}` | `{restaurant}` |
| `DELETE` | `/api/restaurants/{id}` | Delete restaurant | - | `{message}` |

### Orders Endpoints

| Method | Endpoint | Description | Query Parameters | Response |
|--------|----------|-------------|------------------|----------|
| `GET` | `/api/orders` | Get filtered orders | `page, limit, restaurantId, startDate, endDate, minAmount, maxAmount, startHour, endHour` | `{orders[], total, page}` |
| `GET` | `/api/orders/{id}` | Get order details | - | `{order}` |
| `POST` | `/api/orders` | Create new order | `{restaurantId, items[], totalAmount}` | `{order}` |
| `PUT` | `/api/orders/{id}` | Update order status | `{status}` | `{order}` |
| `DELETE` | `/api/orders/{id}` | Cancel order | - | `{message}` |

### Dashboard Endpoints

| Method | Endpoint | Description | Query Parameters | Response |
|--------|----------|-------------|------------------|----------|
| `GET` | `/api/dashboard/overview` | Dashboard metrics | `startDate, endDate` | `{totalRevenue, totalOrders, avgOrderValue, activeRestaurants}` |
| `GET` | `/api/dashboard/charts/daily-orders` | Daily orders chart data | `startDate, endDate` | `{chartData[]}` |
| `GET` | `/api/dashboard/charts/daily-revenue` | Daily revenue chart data | `startDate, endDate` | `{chartData[]}` |
| `GET` | `/api/dashboard/charts/peak-hours` | Peak hours analysis | `startDate, endDate` | `{chartData[]}` |
| `GET` | `/api/dashboard/charts/order-distribution` | Order value distribution | `startDate, endDate` | `{chartData[]}` |

### Export Endpoints

| Method | Endpoint | Description | Query Parameters | Response |
|--------|----------|-------------|------------------|----------|
| `GET` | `/api/export/orders/csv` | Export orders as CSV | `startDate, endDate, restaurantId` | CSV file |
| `GET` | `/api/export/orders/pdf` | Export orders as PDF | `startDate, endDate, restaurantId` | PDF file |
| `GET` | `/api/export/analytics/csv` | Export analytics as CSV | `startDate, endDate` | CSV file |

### Error Responses

All endpoints return consistent error responses:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": "Additional error details",
    "timestamp": "2024-01-01T00:00:00Z"
  }
}
```

### Common HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Validation Error
- `500` - Internal Server Error
=======
GET /api/restaurants/{id}/trends – Restaurant trends

GET /api/restaurants/top – Top restaurants by revenue
>>>>>>> a055665ba86db53695a317bc31efce6d7f88a6e0

GET /api/orders – Orders with filters

GET /api/dashboard/overview – Overview metrics

Key Features Overview
🔐 Authentication

Login/Register toggle

Password strength validation

JWT token-based authentication

Error messages for validation

<<<<<<< HEAD
```bash
# Create optimized production build
npm run build

# Analyze bundle size
npm run build:analyze

# Test production build locally
npm run preview
```

This creates a `build` folder with optimized production files including:
- Minified JavaScript and CSS
- Optimized images and assets
- Service worker for caching
- Source maps for debugging

### Deployment Platforms

#### 1. Netlify (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=build
```

**netlify.toml**
```toml
[build]
  publish = "build"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  REACT_APP_API_URL = "https://api.yourdomain.com/api"
```

#### 2. Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

**vercel.json**
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "buildCommand": "npm run build",
        "outputDirectory": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

#### 3. AWS S3 + CloudFront

```bash
# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure

# Deploy to S3
aws s3 sync build/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

#### 4. Docker Deployment

**Dockerfile**
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf**
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# Build and run Docker container
docker build -t restaurant-frontend .
docker run -p 80:80 restaurant-frontend
```

### Environment Variables for Different Environments

#### Production
```bash
REACT_APP_API_URL=https://api.yourdomain.com/api
REACT_APP_DEBUG_MODE=false
REACT_APP_LOG_LEVEL=error
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

#### Staging
```bash
REACT_APP_API_URL=https://staging-api.yourdomain.com/api
REACT_APP_DEBUG_MODE=true
REACT_APP_LOG_LEVEL=info
REACT_APP_ENABLE_ANALYTICS=false
```

### Performance Optimization

#### Build Optimization
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Remove unused code
- **Asset Optimization**: Image compression and lazy loading
- **Bundle Analysis**: Use webpack-bundle-analyzer

#### Runtime Optimization
- **Service Worker**: Cache static assets
- **CDN**: Use CloudFront or similar CDN
- **Gzip Compression**: Enable server-side compression
- **HTTP/2**: Use HTTP/2 for better performance

### Monitoring and Analytics

#### Error Tracking
```bash
# Install Sentry
npm install @sentry/react @sentry/tracing
```

#### Performance Monitoring
```bash
# Install Web Vitals
npm install web-vitals
```

#### Google Analytics
```bash
# Install GA4
npm install gtag
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **Protected Routes**: Route guards for authenticated users
- **Input Validation**: Client-side form validation
- **Error Handling**: Secure error messages
- **HTTPS Ready**: Production-ready security headers

## 🎨 UI/UX Features

- **Modern Design**: Gradient cards with hover effects
- **Smooth Animations**: Transitions and micro-interactions
- **Loading States**: User feedback during API calls
- **Error States**: User-friendly error messages
- **Mobile Responsive**: Touch-friendly interface

## 🧪 Testing

### Test Structure

```
src/
├── __tests__/
│   ├── components/
│   ├── services/
│   └── utils/
├── components/
│   └── __tests__/
└── setupTests.js
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- Dashboard.test.js

# Run tests matching pattern
npm test -- --testNamePattern="should render"
```

### Test Types

#### Unit Tests
```javascript
// Example: Component unit test
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('should render dashboard with correct title', () => {
  render(<Dashboard />);
  expect(screen.getByText('Restaurant Analytics')).toBeInTheDocument();
});
```

#### Integration Tests
```javascript
// Example: API integration test
import { render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/restaurants', (req, res, ctx) => {
    return res(ctx.json({ restaurants: [] }));
  })
);
```

#### E2E Tests (Cypress)
```javascript
// cypress/integration/dashboard.spec.js
describe('Dashboard', () => {
  it('should display restaurant analytics', () => {
    cy.visit('/dashboard');
    cy.get('[data-testid="revenue-chart"]').should('be.visible');
  });
});
```

### Test Configuration

**jest.config.js**
```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/reportWebVitals.js'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

## 🔍 Code Quality

### Linting Configuration

**.eslintrc.js**
```javascript
module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    '@typescript-eslint/recommended'
  ],
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'react/prop-types': 'error'
  }
};
```

### Prettier Configuration

**.prettierrc**
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### Husky Git Hooks

**.husky/pre-commit**
```bash
#!/bin/sh
npx lint-staged
```

**package.json**
```json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
}
```

## 📊 Performance

### Bundle Analysis

```bash
# Analyze bundle size
npm run build:analyze

# Check bundle size limits
npm run size
```

### Performance Metrics

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Techniques

1. **Code Splitting**
```javascript
const Dashboard = lazy(() => import('./components/Dashboard'));
```

2. **Memoization**
```javascript
const MemoizedChart = memo(Chart);
```

3. **Virtual Scrolling**
```javascript
import { FixedSizeList as List } from 'react-window';
```

4. **Image Optimization**
```javascript
<img 
  src="image.jpg" 
  loading="lazy" 
  alt="Restaurant" 
/>
```

## 🐛 Troubleshooting

### Common Issues

#### 1. API Connection Failed
**Symptoms**: Network errors, 404 responses
**Solutions**:
- Verify backend server is running on correct port
- Check REACT_APP_API_URL in .env file
- Ensure CORS is configured on backend
- Test API endpoints with Postman

```bash
# Test API connection
curl -X GET http://localhost:8000/api/restaurants
```

#### 2. Authentication Not Working
**Symptoms**: Login fails, token errors
**Solutions**:
- Clear browser localStorage and sessionStorage
- Check JWT token expiration
- Verify API response format
- Check network tab for 401/403 errors

```javascript
// Clear storage
localStorage.clear();
sessionStorage.clear();
```

#### 3. Charts Not Displaying
**Symptoms**: Empty chart containers, console errors
**Solutions**:
- Verify Recharts installation
- Check data format matches chart requirements
- Ensure container has proper dimensions
- Check for JavaScript errors in console

```javascript
// Debug chart data
console.log('Chart data:', chartData);
```

#### 4. Build Failures
**Symptoms**: npm run build fails
**Solutions**:
- Clear node_modules and reinstall
- Check for TypeScript errors
- Verify all imports are correct
- Update dependencies

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

#### 5. Performance Issues
**Symptoms**: Slow loading, high memory usage
**Solutions**:
- Implement code splitting
- Optimize images and assets
- Use React.memo for expensive components
- Check for memory leaks

### Debug Tools

#### React Developer Tools
- Install browser extension
- Use Profiler tab for performance analysis
- Check component props and state

#### Network Debugging
```javascript
// Add request interceptor
axios.interceptors.request.use(request => {
  console.log('Starting Request:', request);
  return request;
});
```

#### Error Boundary
```javascript
class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }
}
```

### Development Tips

1. **Use React DevTools**: Essential for debugging React components
2. **Network Tab**: Monitor API calls and responses
3. **Console Logging**: Strategic logging for debugging
4. **Source Maps**: Enable for production debugging
5. **Performance Tab**: Analyze runtime performance
6. **Lighthouse**: Regular performance audits

### Getting Help

1. **Check Console**: Always check browser console first
2. **Network Tab**: Verify API calls are working
3. **React DevTools**: Inspect component state and props
4. **Documentation**: Review API documentation
5. **Stack Overflow**: Search for similar issues
6. **GitHub Issues**: Check project issues for known problems

## 🤝 Contributing

### Development Workflow

1. **Fork the Repository**
```bash
git clone https://github.com/yourusername/restaurant-management-f.git
cd restaurant-management-f
```

2. **Create Feature Branch**
```bash
git checkout -b feature/your-feature-name
```

3. **Make Changes**
- Follow coding standards
- Add tests for new features
- Update documentation

4. **Commit Changes**
```bash
git add .
git commit -m "feat: add new feature description"
```

5. **Push and Create PR**
```bash
git push origin feature/your-feature-name
```

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Build process or auxiliary tool changes

### Code Style Guidelines

1. **Use functional components** with hooks
2. **Follow naming conventions**: PascalCase for components, camelCase for functions
3. **Add PropTypes** for all components
4. **Write meaningful comments** for complex logic
5. **Keep components small** and focused
6. **Use custom hooks** for reusable logic

### Pull Request Process

1. Ensure all tests pass
2. Update documentation if needed
3. Add screenshots for UI changes
4. Request review from maintainers
5. Address review feedback

## 📚 Additional Resources

### Documentation
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/en-US/)
- [React Router Documentation](https://reactrouter.com/)

### Tutorials
- [React Hooks Guide](https://reactjs.org/docs/hooks-intro.html)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first)
- [Chart.js with React](https://www.chartjs.org/docs/latest/)

### Tools
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🔗 Related Projects

- **Backend API**: [Restaurant Management Backend](https://github.com/yourusername/restaurant-management-backend)
- **Mobile App**: [Restaurant Management Mobile](https://github.com/yourusername/restaurant-management-mobile)
- **Admin Panel**: [Restaurant Management Admin](https://github.com/yourusername/restaurant-management-admin)

## 📈 Roadmap

### Version 2.0 (Q2 2024)
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Offline functionality

### Version 2.1 (Q3 2024)
- [ ] Mobile app integration
- [ ] Advanced filtering options
- [ ] Export to multiple formats
- [ ] Custom dashboard widgets

### Version 3.0 (Q4 2024)
- [ ] AI-powered insights
- [ ] Predictive analytics
- [ ] Advanced reporting
- [ ] Integration with POS systems

## 📞 Support

### Getting Help

1. **Documentation**: Check this README and inline documentation
2. **Issues**: [GitHub Issues](https://github.com/yourusername/restaurant-management-f/issues)
3. **Discussions**: [GitHub Discussions](https://github.com/yourusername/restaurant-management-f/discussions)
4. **Email**: support@yourdomain.com

### Reporting Bugs

When reporting bugs, please include:
- Operating system and version
- Node.js and npm versions
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Console errors

### Feature Requests

For feature requests:
- Use GitHub Issues with "enhancement" label
- Provide detailed description
- Explain use case and benefits
- Include mockups if applicable

## 🏆 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Recharts** for the beautiful chart library
- **Open Source Community** for inspiration and contributions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---

**Made with ❤️ by [Your Name](https://github.com/yourusername)**

**⭐ Star this repository if you found it helpful!**
=======

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
>>>>>>> a055665ba86db53695a317bc31efce6d7f88a6e0
