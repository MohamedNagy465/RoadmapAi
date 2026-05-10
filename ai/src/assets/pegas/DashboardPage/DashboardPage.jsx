import React from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import {
  BookOpen,
  Clock3,
  Target,
  CheckCircle2,
  PlayCircle,
} from 'lucide-react';

export default function DashboardPage() {

  /* USER */
  const user =
    JSON.parse(
      localStorage.getItem(
        'user'
      )
    ) || {};

  /* NAVIGATE */
  const navigate =
    useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F6FA]">

      <div
        data-aos="fade-up"
        className="min-h-screen rounded-[32px] border border-gray-200 bg-white p-6 shadow-xl md:p-8"
      >

        {/* HEADER */}
        <div
          data-aos="fade-down"
          className="flex flex-wrap items-center justify-between gap-5"
        >

          <div>

            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back,{' '}
              {user?.name ||
                'User'}
              ! 👋
            </h1>

            <p className="mt-2 text-gray-400">
              Let’s continue your
              learning journey.
            </p>
          </div>

          <div className="flex items-center gap-5">

            <img
              src={
                user?.profileImage ||
                'https://i.pravatar.cc/100'
              }
              alt="profile"
              className="h-12 w-12 rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* STATS */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
        >

          {/* PROGRESS */}
          <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">

            <h3 className="text-sm font-semibold text-gray-500">
              Overall Progress
            </h3>

            <div className="mt-6 flex flex-col items-center">

              <div className="relative h-36 w-36">

                <svg className="h-36 w-36 rotate-[-90deg]">

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

                  <span className="mt-1 text-xs text-gray-400">
                    You’re doing
                    great!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* COMPLETED */}
          <div className="flex flex-col justify-between rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">

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

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">

              <CheckCircle2
                size={24}
              />
            </div>
          </div>

          {/* IN PROGRESS */}
          <div className="flex flex-col justify-between rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">

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

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

              <Clock3
                size={24}
              />
            </div>
          </div>

          {/* REMAINING */}
          <div className="flex flex-col justify-between rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">

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

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">

              <Target size={24} />
            </div>
          </div>
        </div>

        {/* CURRENT TRACK */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-8 rounded-[28px] border border-indigo-100 bg-gradient-to-r from-[#F3F0FF] to-[#ECE8FF] p-6"
        >

          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

            {/* LEFT */}
            <div className="flex-1">

              <span className="text-sm font-medium text-gray-500">
                Current Track
              </span>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Web Development
              </h2>

              <p className="mt-2 text-gray-500">
                Resume learning
              </p>

              {/* PROGRESS */}
              <div className="mt-6 flex items-center gap-4">

                <div className="h-3 flex-1 overflow-hidden rounded-full bg-white">

                  <div className="h-full w-[65%] rounded-full bg-[#5C45FD]" />
                </div>

                <span className="text-sm font-semibold text-gray-700">
                  65%
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
                alt="coding"
                className="w-36"
              />

              <button
                onClick={() =>
                  navigate(
                    '/roadmap?track=web-development'
                  )
                }
                className="mt-5 rounded-2xl bg-[#5C45FD] px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:-translate-y-1 hover:bg-[#4A38E0]"
              >

                Continue Roadmap →
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2"
        >

          {/* ACTIVITY */}
          <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">

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

          {/* NEXT UP */}
          <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">

            <h3 className="text-xl font-bold text-gray-900">
              Next Up
            </h3>

            <div className="mt-8 flex items-center justify-between gap-5">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">

                  <BookOpen
                    size={26}
                  />
                </div>

                <div>

                  <h4 className="text-xl font-bold text-gray-900">
                    JavaScript Basics
                  </h4>

                  <p className="mt-2 text-gray-500">
                    Learn the
                    fundamentals of
                    JavaScript.
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  navigate(
                    '/course-player'
                  )
                }
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5C45FD] text-white shadow-lg shadow-indigo-100 transition hover:bg-[#4A38E0]"
              >

                <PlayCircle
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ACTIVITY ITEM */
function ActivityItem({
  title,
  time,
  color,
}) {

  const colors = {
    green:
      'bg-green-500',
    blue: 'bg-blue-500',
    purple:
      'bg-purple-500',
    pink: 'bg-pink-500',
  };

  return (
    <div
      data-aos="fade-right"
      className="flex items-center justify-between"
    >

      <div className="flex items-center gap-3">

        <div
          className={`h-3 w-3 rounded-full ${colors[color]}`}
        />

        <span className="font-medium text-gray-700">
          {title}
        </span>
      </div>

      <span className="text-sm text-gray-400">
        {time}
      </span>
    </div>
  );
}