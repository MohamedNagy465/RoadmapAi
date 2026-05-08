import React from 'react';

import {
  Bell,
  BookOpen,
  Clock3,
  Target,
  CheckCircle2,
  PlayCircle,
} from 'lucide-react';

export default function DashboardPage() {

  /* User */
  const user =
    JSON.parse(localStorage.getItem('user')) ||
    {};

  return (
    <div className="min-h-screen bg-[#F5F6FA]">

      <div className="min-h-screen bg-white rounded-[32px] border border-gray-200 shadow-xl p-6 md:p-8">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-5">

          <div>

            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name || 'User'}! 👋
            </h1>

            <p className="mt-2 text-gray-400">
              Let’s continue your learning journey.
            </p>
          </div>

          <div className="flex items-center gap-5">

            <button className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition">
              <Bell size={20} />
            </button>

            <img
              src={
                user?.profileImage ||
                'https://i.pravatar.cc/100'
              }
              alt="profile"
              className="w-12 h-12 rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">

          {/* Progress */}
          <div className="bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm">

            <h3 className="text-sm font-semibold text-gray-500">
              Overall Progress
            </h3>

            <div className="mt-6 flex flex-col items-center">

              <div className="relative w-36 h-36">

                <svg className="w-36 h-36 rotate-[-90deg]">

                  <circle
                    cx="72"
                    cy="72"
                    r="58"
                    stroke="#F1F1F4"
                    strokeWidth="12"
                    fill="none"
                  />

                  <circle
                    cx="72"
                    cy="72"
                    r="58"
                    stroke="#5C45FD"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray="365"
                    strokeDashoffset="128"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <span className="text-4xl font-bold text-gray-900">
                    65%
                  </span>

                  <span className="text-xs text-gray-400 mt-1">
                    You’re doing great!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Completed */}
          <div className="bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm flex flex-col justify-between">

            <div>

              <h3 className="text-sm font-semibold text-gray-500">
                Completed Topics
              </h3>

              <h2 className="mt-6 text-5xl font-bold text-gray-900">
                23
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Topics
              </p>
            </div>

            <div className="mt-6 w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">

              <CheckCircle2 size={24} />
            </div>
          </div>

          {/* In Progress */}
          <div className="bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm flex flex-col justify-between">

            <div>

              <h3 className="text-sm font-semibold text-gray-500">
                In Progress
              </h3>

              <h2 className="mt-6 text-5xl font-bold text-gray-900">
                8
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Topics
              </p>
            </div>

            <div className="mt-6 w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

              <Clock3 size={24} />
            </div>
          </div>

          {/* Remaining */}
          <div className="bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm flex flex-col justify-between">

            <div>

              <h3 className="text-sm font-semibold text-gray-500">
                Remaining
              </h3>

              <h2 className="mt-6 text-5xl font-bold text-gray-900">
                12
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Topics
              </p>
            </div>

            <div className="mt-6 w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">

              <Target size={24} />
            </div>
          </div>
        </div>

        {/* Current Track */}
        <div className="mt-8 bg-gradient-to-r from-[#F3F0FF] to-[#ECE8FF] rounded-[28px] p-6 border border-indigo-100">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            {/* Left */}
            <div className="flex-1">

              <span className="text-sm text-gray-500 font-medium">
                Current Track
              </span>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Web Development
              </h2>

              <p className="mt-2 text-gray-500">
                Resume learning
              </p>

              {/* Progress */}
              <div className="mt-6 flex items-center gap-4">

                <div className="flex-1 h-3 rounded-full bg-white overflow-hidden">

                  <div className="w-[65%] h-full bg-[#5C45FD] rounded-full" />
                </div>

                <span className="text-sm font-semibold text-gray-700">
                  65%
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
                alt="coding"
                className="w-36"
              />

              <button className="mt-5 px-7 py-3 rounded-2xl bg-[#5C45FD] text-white font-semibold shadow-lg shadow-indigo-100 hover:bg-[#4A38E0] transition">
                Continue Roadmap →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

          {/* Activity */}
          <div className="bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm">

            <h3 className="text-xl font-bold text-gray-900">
              Recent Activity
            </h3>

            <div className="mt-6 space-y-5">

              <ActivityItem
                title="Completed: CSS Flexbox"
                time="Today"
                color="green"
              />

              <ActivityItem
                title="Completed: HTML Forms"
                time="Yesterday"
                color="blue"
              />

              <ActivityItem
                title="Started: JavaScript Basics"
                time="2 days ago"
                color="purple"
              />

              <ActivityItem
                title="Quiz Completed: HTML Basics"
                time="3 days ago"
                color="pink"
              />
            </div>
          </div>

          {/* Next Up */}
          <div className="bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm">

            <h3 className="text-xl font-bold text-gray-900">
              Next Up
            </h3>

            <div className="mt-8 flex items-center justify-between gap-5">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600">

                  <BookOpen size={26} />
                </div>

                <div>

                  <h4 className="text-xl font-bold text-gray-900">
                    JavaScript Basics
                  </h4>

                  <p className="mt-2 text-gray-500">
                    Learn the fundamentals of JavaScript.
                  </p>
                </div>
              </div>

              <button className="w-14 h-14 rounded-2xl bg-[#5C45FD] text-white flex items-center justify-center shadow-lg shadow-indigo-100 hover:bg-[#4A38E0] transition">

                <PlayCircle size={24} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* Activity Item */
function ActivityItem({
  title,
  time,
  color,
}) {

  const colors = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };

  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div
          className={`w-3 h-3 rounded-full ${colors[color]}`}
        />

        <span className="text-gray-700 font-medium">
          {title}
        </span>
      </div>

      <span className="text-sm text-gray-400">
        {time}
      </span>
    </div>
  );
}