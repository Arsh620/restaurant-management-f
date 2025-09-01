import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authAPI } from '../services/api';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isLogin && formData.password) {
      const strength = calculatePasswordStrength(formData.password);
      setPasswordStrength(strength);
    }
  }, [formData.password, isLogin]);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = isLogin 
        ? await authAPI.login({ email: formData.email, password: formData.password })
        : await authAPI.register(formData);
      
      const { token, user } = response.data.data;
      login(token, user);
      navigate('/dashboard');
    } catch (err) {
      if (err.response?.data?.errors?.email) {
        setError(err.response.data.errors.email[0]);
      } else {
        setError(err.response?.data?.message || 'Authentication failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 py-24">
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">RestaurantIQ</h1>
                <p className="text-slate-300 text-sm">Analytics Platform</p>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Enterprise Restaurant Analytics
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Comprehensive data intelligence platform trusted by leading restaurant enterprises worldwide.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-6">
            {[
              "Real-time performance monitoring across all locations",
              "AI-powered predictive analytics and forecasting",
              "Enterprise-grade security and compliance",
              "Customizable reporting and dashboard solutions"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2,500+</div>
                <div className="text-slate-400 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.99%</div>
                <div className="text-slate-400 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$2.5B+</div>
                <div className="text-slate-400 text-sm">Revenue Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <span className="text-2xl font-bold text-slate-900">RestaurantIQ</span>
              </div>
            </div>

            {/* Form Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h2>
              <p className="text-slate-600">
                {isLogin 
                  ? 'Welcome back. Please sign in to your account.' 
                  : 'Join thousands of restaurant professionals using RestaurantIQ.'
                }
              </p>
            </div>



            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </>
              )}
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your business email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878l-1.415-1.414M14.12 14.12l1.415 1.415M14.12 14.12L15.536 15.536M14.12 14.12l1.415 1.415m-4.242-4.242L8.464 8.464m0 0L7.05 7.05m1.414 1.414l1.414 1.414" /></svg> : 
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    }
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {!isLogin && formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-600">
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Remember Me / Forgot Password */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-slate-900" />
                    <span className="ml-2 text-sm text-slate-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-slate-900 hover:text-slate-700 font-medium"
                    onClick={() => navigate('/forgot-password')}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </>
                ) : (
                  <>
                    {isLogin ? 'Sign In to Dashboard' : 'Create Enterprise Account'}
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-slate-50 text-slate-500">or</span>
                </div>
              </div>

              {/* SSO Options */}
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-3 border border-slate-300 rounded-xl text-slate-700 bg-white hover:bg-slate-50 font-medium transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google Workspace
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-3 border border-slate-300 rounded-xl text-slate-700 bg-white hover:bg-slate-50 font-medium transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-3" fill="#0078d4" viewBox="0 0 24 24">
                    <path d="M24 12.5c0-6.9-5.6-12.5-12.5-12.5S-1 5.6-1 12.5 4.6 25 11.5 25c3.5 0 6.6-1.4 8.9-3.7l-1.8-1.8c-1.8 1.8-4.3 2.9-7.1 2.9-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10c0 2.8-1.1 5.3-2.9 7.1l1.8 1.8c2.3-2.3 3.7-5.4 3.7-8.9z"/>
                  </svg>
                  Continue with Microsoft 365
                </button>
              </div>

              {/* Toggle Login/Register */}
              <div className="text-center pt-6">
                <span className="text-slate-600">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  type="button"
                  className="text-slate-900 hover:text-slate-700 font-semibold transition-colors duration-200"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError('');
                    setFormData({ email: '', password: '', name: '', company: '' });
                  }}
                >
                  {isLogin ? 'Create enterprise account' : 'Sign in instead'}
                </button>
              </div>
            </form>

            {/* Security Notice */}
            <div className="mt-8 p-4 bg-slate-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <div>
                  <p className="text-sm font-medium text-slate-900">Enterprise Security</p>
                  <p className="text-xs text-slate-600">SOC 2 Type II • GDPR Compliant • 256-bit Encryption</p>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-8 text-center text-xs text-slate-500 space-x-4">
              <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-700 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;