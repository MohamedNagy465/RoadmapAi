import React from 'react';

import {
  Award,
  CalendarDays,
  CheckCircle2,
  BadgeCheck,
} from 'lucide-react';

import { Link } from 'react-router-dom';

export default function ProfilePage() {

  /* Get User From LocalStorage */
  const user =
    JSON.parse(localStorage.getItem('user')) ||
    {};

  const badges = [
    {
      title: 'HTML 5 Hero',
      icon: '🟧',
    },

    {
      title: 'JS Ninja',
      icon: '🟨',
    },

    {
      title: 'CSS Master',
      icon: '🟦',
    },

    {
      title: 'React Pro',
      icon: '🟪',
    },

    {
      title: 'Git Expert',
      icon: '🟫',
    },

    {
      title: 'C++ Master',
      icon: '🔷',
    },

    {
      title: 'HTML 5 Hero',
      icon: '🟧',
    },

    {
      title: 'JS Ninja',
      icon: '🟨',
    },

    {
      title: 'CSS Master',
      icon: '🟦',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA]">

      <div className="min-h-screen bg-white rounded-[32px] border border-gray-200 shadow-xl overflow-hidden">

        {/* Cover */}
        <div className="h-52 bg-gradient-to-r from-[#B6A8FF] to-[#8E7BFF]" />

        {/* Profile */}
        <div className="px-6 md:px-10 pb-10">

          {/* Avatar */}
          <div className="flex justify-center -mt-20">

            <img
              src={
                user?.profileImage ||
                'https://i.pravatar.cc/200?img=5'
              }
              alt="profile"
              className="w-40 h-40 rounded-full border-[8px] border-white object-cover shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="text-center mt-5">

            <h1 className="text-4xl font-bold text-gray-900">
              {user?.name || 'User'} 💜
            </h1>

            <p className="mt-3 text-xl text-gray-500">
              {user?.headline ||
                user?.email ||
                'example@email.com'}
            </p>

            {/* Extra Info */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-gray-500">

              {user?.location && (
                <span className="px-4 py-2 rounded-full bg-gray-100 text-sm">
                  📍 {user.location}
                </span>
              )}

              {user?.github && (
                <a
                  href={`https://github.com/${user.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-[#5C45FD] hover:text-white transition"
                >
                  💻 GitHub
                </a>
              )}

              {user?.linkedin && (
                <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-[#5C45FD] hover:text-white transition"
                >
                  🔗 LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

            <StatCard
              icon={<Award size={30} />}
              title="Certificates Earned"
              value="8"
            />

            <StatCard
              icon={<CalendarDays size={30} />}
              title="Learning Streak"
              value="12 days"
            />

            <StatCard
              icon={<CheckCircle2 size={30} />}
              title="Completed Topics"
              value="23"
            />
          </div>

          {/* Bio */}
          <div className="mt-8 bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900">
              Personal Bio
            </h2>

            <p className="mt-5 text-gray-600 leading-8 text-lg">
              {user?.bio ||
                'Passionate about learning programming and building modern web applications.'}
            </p>

            <Link
              to="/editProfile"
              className="mt-6 w-full flex items-center justify-center rounded-2xl border-2 border-[#5C45FD] py-3 font-semibold text-[#5C45FD] hover:bg-[#5C45FD] hover:text-white transition"
            >
              Edit Profile
            </Link>
          </div>

          {/* Badges */}
          <div className="mt-8 bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm">

            <div className="flex items-center gap-3">

              <BadgeCheck
                size={28}
                className="text-[#5C45FD]"
              />

              <h2 className="text-3xl font-bold text-gray-900">
                Badges & Achievements
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">

              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition"
                >

                  <div className="text-5xl">
                    {badge.icon}
                  </div>

                  <h3 className="mt-4 font-bold text-gray-800">
                    {badge.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Stat Card */
function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm flex flex-col items-center text-center">

      <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-[#5C45FD] flex items-center justify-center">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-600">
        {title}
      </h3>

      <span className="mt-4 text-4xl font-bold text-gray-900">
        {value}
      </span>
    </div>
  );
}