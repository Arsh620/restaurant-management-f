import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { token } = useAuth()
  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: () => <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      title: "Advanced Analytics Dashboard",
      description: "Real-time data visualization with customizable KPI tracking, trend analysis, and predictive insights to drive operational excellence.",
      stats: "95% faster reporting"
    },
    {
      icon: () => <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      title: "Performance Intelligence",
      description: "AI-powered performance monitoring with automated alerts, benchmarking against industry standards, and actionable recommendations.",
      stats: "40% revenue increase"
    },
    {
      icon: () => <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: "Enterprise Security",
      description: "Bank-grade encryption, compliance frameworks, and robust data governance ensuring complete protection of your business data.",
      stats: "SOC 2 Type II certified"
    }
  ]

  const benefits = [
    "Real-time operational visibility",
    "Data-driven decision making",
    "Automated compliance reporting", 
    "Scalable enterprise architecture"
  ]

  const testimonials = [
    {
      quote: "Transformed our multi-location operations with unprecedented visibility into performance metrics.",
      author: "Sarah Chen",
      title: "Operations Director",
      company: "Metropolitan Restaurant Group"
    },
    {
      quote: "The predictive analytics have helped us optimize inventory and reduce waste by 35%.",
      author: "Michael Rodriguez", 
      title: "CEO",
      company: "Coastal Dining Enterprises"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">RestaurantIQ</h1>
                <p className="text-xs text-slate-600 -mt-1">Analytics Platform</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Features</a>
              <a href="#solutions" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Solutions</a>
            </nav>

            <div className="flex items-center space-x-4">
              {token ? (
                <button
                  onClick={() => navigate("/dashboard")}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200"
                >
                  Dashboard
                </button>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="text-slate-600 hover:text-slate-900 px-4 py-2 font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="max-w-4xl">
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  Industry Leading Analytics Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Enterprise Restaurant
                <span className="block text-slate-600">Analytics Platform</span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl">
                Unlock operational excellence through comprehensive data analytics, real-time performance monitoring, 
                and intelligent business insights designed for enterprise restaurant operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <button
                  onClick={() => navigate("/login")}
                  className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>

                <button className="group flex items-center justify-center space-x-3 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15" /></svg>
                  <span className="font-semibold">Watch Overview</span>
                </button>
              </div>

              {/* Trust Bar */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">2,500+</div>
                  <div className="text-slate-600 font-medium">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">99.99%</div>
                  <div className="text-slate-600 font-medium">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">$2.5B+</div>
                  <div className="text-slate-600 font-medium">Revenue Tracked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Complete Analytics Suite
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive tools designed for enterprise restaurant operations, delivering actionable insights 
              that drive measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-slate-100 group-hover:bg-slate-900 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg inline-block">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Why Industry Leaders Choose RestaurantIQ
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900">
                <blockquote className="text-lg text-slate-700 italic">
                  "RestaurantIQ has become the backbone of our data strategy, enabling us to make informed decisions 
                  across 150+ locations with confidence."
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold text-slate-900">David Park</div>
                  <div className="text-slate-600">Chief Operating Officer, Prime Hospitality</div>
                </div>
              </div>
            </div>

            {/* Interactive Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-900 p-4 flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm font-medium">RestaurantIQ Dashboard</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-slate-900">Performance Overview</h3>
                    <span className="text-sm text-slate-500">Last 30 days</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-slate-900">$847K</div>
                      <div className="text-slate-600 text-sm">Total Revenue</div>
                      <div className="text-green-600 text-xs font-medium mt-1">↑ 12.5%</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-slate-900">24,391</div>
                      <div className="text-slate-600 text-sm">Orders Processed</div>
                      <div className="text-green-600 text-xs font-medium mt-1">↑ 8.3%</div>
                    </div>
                  </div>
                  
                  {/* Mock Chart */}
                  <div className="h-32 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg flex items-end justify-between p-4">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-slate-900 rounded-t"
                        style={{ height: `${Math.random() * 60 + 40}%`, width: '10%' }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join the enterprises that rely on RestaurantIQ for strategic decision making.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <blockquote className="text-lg text-white mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-slate-300 text-sm">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Company Logos */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <p className="text-center text-slate-400 text-sm mb-8">Trusted by leading restaurant enterprises</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              {["Hospitality Corp", "Dining Group", "Restaurant Systems", "Food Services Inc"].map((company, index) => (
                <div key={index} className="text-white/40 font-bold text-lg">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Enterprise Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Scalable analytics solutions designed for multi-location restaurant enterprises with complex operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>, title: "Multi-Location Management", desc: "Centralized oversight across all locations" },
              { icon: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, title: "Predictive Analytics", desc: "AI-powered forecasting and trend analysis" },
              { icon: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Real-Time Monitoring", desc: "Live performance tracking and alerts" },
              { icon: () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: "Compliance Automation", desc: "Automated regulatory reporting and auditing" }
            ].map((solution, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-slate-100 group-hover:bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <div className="text-slate-600 group-hover:text-white transition-colors duration-300">
                    <solution.icon />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join industry leaders who have revolutionized their restaurant operations with data-driven insights 
            and enterprise-grade analytics.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg"
            >
              Start Your Journey
            </button>
          </div>

          <p className="text-slate-400 text-sm mt-8">
            Enterprise implementations available • Custom pricing • Dedicated support
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-400 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <span className="text-xl font-bold text-white">RestaurantIQ</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enterprise restaurant analytics platform trusted by industry leaders worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Multi-Location Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Performance Intelligence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 RestaurantIQ Analytics Platform. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-slate-400 text-sm">SOC 2 Type II Certified</span>
              <span className="text-slate-400 text-sm">•</span>
              <span className="text-slate-400 text-sm">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home