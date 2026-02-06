"use client"

import React from 'react'
import { PieChart, Pie, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import "./analytics.css"

const Analyticspage = () => {
  // Data
  const timelineData = [
    { date: 'Jan 15', views: 78, responses: 45 },
    { date: 'Jan 18', views: 145, responses: 92 },
    { date: 'Jan 21', views: 234, responses: 156 },
    { date: 'Jan 24', views: 312, responses: 198 },
    { date: 'Jan 27', views: 456, responses: 289 },
    { date: 'Jan 30', views: 589, responses: 367 },
    { date: 'Feb 2', views: 712, responses: 445 },
    { date: 'Feb 5', views: 823, responses: 534 },
  ];

  const CHOICE_COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'];

  const openResponses = [
    { text: "Live music performances would be amazing! Maybe also food trucks from local vendors around campus.", time: "15 mins ago" },
    { text: "I'd love to see some outdoor games, art exhibitions, and maybe a talent show for students!", time: "1 hour ago" },
    { text: "Comedy shows, student band performances, and interactive workshops would make it memorable!", time: "3 hours ago" }
  ];


  const data = [
    { name: '1st Year', value: 48, percentage: 48 },
    { name: '2nd Year', value: 40, percentage: 40 },
    { name: '3rd Year', value: 10, percentage: 10 },
    { name: '4th Year', value: 2, percentage: 2 },
  ];


  const MAJOR_COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#64748b'];
  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#9ed7ee'];

  const metrics = [
    {
      label: 'Total Views',
      value: '2,847',
      change: '+34.2%',
      trend: 'up',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      label: 'Student Responses',
      value: '1,892',
      change: '+45.4%',
      trend: 'up',
      bgGradient: 'from-purple-50 to-pink-50'
    },

    {
      label: 'Avg. Time',
      value: '2m 18s',
      change: '-8s',
      trend: 'up',

      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      label: 'Completion Rate',
      value: '66.5%',
      change: '+4.3%',
      trend: 'up',
      bgGradient: 'from-indigo-50 to-purple-50'
    }
  ];

  return (
    <div className="analytics-container">
      {/* Navigation */}
      <nav className="analytics-nav">
        <div className="analytics-nav-content">
          <div className="analytics-nav-left">
            <div className="analytics-logo">
              <div ><img className="analytics-logo-icon" src="ULynk.svg" alt="logo" /></div>
              <span className="analytics-logo-text">Unilynk</span>
            </div>
            <div className="analytics-tabs">
              <button className="analytics-tab">Overview</button>
              <button className="analytics-tab analytics-tab-active">Analytics</button>
              <button className="analytics-tab">Responses</button>
            </div>
          </div>
          <div className="analytics-nav-right">
            <button className="analytics-btn-secondary">Export</button>
            <button className="analytics-btn-primary">Share Form</button>
          </div>
        </div>
      </nav>

      <div className="analytics-main">
        {/* Form Header */}
        <div className="analytics-header-section">
          <button className="analytics-back-btn">
            <svg className="analytics-icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Forms</span>
          </button>

          <div className="analytics-header-card">
            <div className="analytics-header-content">
              <div className="analytics-header-info">
                <div className="analytics-title-row">
                  <h1 className="analytics-page-title">Photography Workshop</h1>
                  <span className="analytics-badge analytics-badge-live">Live</span>
                </div>
                <div className="analytics-meta-row">
                  <div className="analytics-meta-item">
                    <svg className="analytics-icon-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Created Jan 15, 2026</span>
                  </div>
                  <div className="analytics-meta-item">
                    <svg className="analytics-icon-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Last response 15 mins ago</span>
                  </div>
                  <div className="analytics-meta-item">
                    <svg className="analytics-icon-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span className="analytics-link-text">unilynk.com/s/photography-workshop</span>
                  </div>
                </div>
                <div className="analytics-tags-row">
                  <span className="analytics-tag">Innovation Cell</span>
                  <span className="analytics-separator">•</span>
                  <span className="analytics-location">National Institute of Technology, Kurukshetra</span>
                </div>
              </div>
              <button className="analytics-more-btn">
                <svg className="analytics-icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="analytics-metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className={`analytics-metric-card analytics-metric-${metric.bgGradient}`}>
              <div className="analytics-metric-content">
                <p className="analytics-metric-label">{metric.label}</p>
                <p className="analytics-metric-value">{metric.value}</p>
                <div className={`analytics-metric-change ${metric.trend === 'up' ? 'analytics-trend-up' : 'analytics-trend-down'}`}>
                  <svg className="analytics-icon-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {metric.change}
                </div>
              </div>
              <div className={`analytics-metric-glow analytics-glow-${metric.gradient}`}></div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="analytics-grid">





          <div className="analytics-grid-left">

            {/* Response Timeline */}
            <div className="analytics-card">
              <div className="analytics-card-header">
                <div>
                  <h3 className="analytics-card-title">Student Engagement</h3>
                  <p className="analytics-card-subtitle">Form views and responses since launch</p>
                </div>
                <div className="analytics-select-wrapper">
                  <svg className="analytics-icon-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <select className="analytics-select">
                    <option>Last 30 days</option>
                    <option>Last 7 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={timelineData}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorResponses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '12px' }} tickLine={false} />
                  <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', fontSize: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                  <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} iconType="circle" />
                  <Area type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={3} fill="url(#colorViews)" />
                  <Area type="monotone" dataKey="responses" stroke="#8b5cf6" strokeWidth={3} fill="url(#colorResponses)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>


            



          </div>



            <div className="analytics-grid-right">
              <div className=" piecard bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Students Year Breakdown</h3>
                  <p className="text-sm text-gray-600">Response by</p>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-3">
                  {data.map((item, index) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: COLORS[index] }}
                        />
                        <span className="text-sm text-gray-700">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>



        </div>
      </div>
    </div>

  );
}

export default Analyticspage
