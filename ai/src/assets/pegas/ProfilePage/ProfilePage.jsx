import React from 'react';

import { useNavigate } from 'react-router-dom';

import {
  MapPin,
  CalendarDays,
  Mail,
  Phone,
  Globe,
  Pencil,
} from 'lucide-react';

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';

export default function ProfilePage() {

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem('user')) ||
    {};

  /* SKILLS */
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
      color: 'text-orange-500',
    },

    {
      name: 'CSS',
      icon: <FaCss3Alt />,
      color: 'text-blue-500',
    },

    {
      name: 'JavaScript',
      icon: <SiJavascript />,
      color: 'text-yellow-400',
    },

    {
      name: 'React',
      icon: <FaReact />,
      color: 'text-cyan-400',
    },

    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      color: 'text-green-500',
    },

    {
      name: 'GitHub',
      icon: <FaGithub />,
      color: 'text-black',
    },

    {
      name: 'Tailwind',
      icon: <SiTailwindcss />,
      color: 'text-sky-400',
    },

    {
      name: 'Express',
      icon: <SiExpress />,
      color: 'text-gray-700',
    },

    {
      name: 'MongoDB',
      icon: <SiMongodb />,
      color: 'text-green-600',
    },
  ];

  /* BADGES */
  const badges = [
    'HTML Hero',
    'JS Ninja',
    'CSS Master',
    'React Dev',
    'Problem Solver',
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F6FA] p-5 md:p-8">

      {/* PAGE HEADER */}
      <div
        data-aos="fade-down"
        className="mb-8"
      >

        <h1 className="text-4xl font-bold text-[#111827]">
          Profile Overview
        </h1>

        <p className="mt-2 text-lg text-gray-400">
          Manage your profile,
          track your progress and
          achievements.
        </p>
      </div>

      {/* HERO */}
      <div
        data-aos="zoom-in"
        className="relative overflow-hidden rounded-[38px] border border-[#ECECEC] bg-gradient-to-r from-[#F3ECFF] via-[#F8F5FF] to-[#F9F7FF] p-8 shadow-sm"
      >

        {/* BG */}
        <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-[#E9DEFF] opacity-40" />

        <div className="absolute right-40 top-20 h-10 w-10 rounded-full bg-[#D9C8FF] opacity-60" />

        <div className="absolute left-20 bottom-10 h-6 w-6 rounded-full bg-[#D9C8FF]" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center">

            {/* IMAGE */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="relative"
            >

              <div className="rounded-full bg-white p-2 shadow-xl">

                <img
                  src={
                    user?.profileImage ||
                    'https://i.pravatar.cc/300'
                  }
                  alt="profile"
                  className="h-44 w-44 rounded-full object-cover"
                />
              </div>

              {/* EDIT BUTTON */}
              <button
                onClick={() =>
                  navigate('/editProfile')
                }
                className="absolute bottom-3 right-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-105"
              >

                <Pencil
                  size={20}
                  className="text-[#5C45FD]"
                />
              </button>
            </div>

            {/* INFO */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <div className="flex items-center gap-3">

                <h2 className="text-5xl font-extrabold text-[#111827]">

                  {user?.name ||
                    'Neama B.'}
                </h2>

                <span className="text-3xl">
                  💜
                </span>
              </div>

              <p className="mt-4 text-2xl font-medium text-[#5C45FD]">

                {user?.headline ||
                  'Aspiring Full Stack Developer'}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-6 text-gray-500">

                <div className="flex items-center gap-2">

                  <MapPin size={18} />

                  {user?.location ||
                    'Egypt'}
                </div>

                <div className="flex items-center gap-2">

                  <CalendarDays size={18} />

                  Joined May 2024
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/70 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm">

                <p className="font-medium text-gray-600">
                  ✨ Learning today,
                  building tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* EDIT PROFILE BUTTON */}
          <button
            data-aos="fade-left"
            data-aos-delay="400"
            onClick={() =>
              navigate('/editProfile')
            }
            className="rounded-2xl bg-white px-7 py-4 font-semibold text-[#5C45FD] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >

            Edit Profile
          </button>
        </div>
      </div>

      {/* STATS */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
      >

        <StatCard
          icon="🎓"
          title="Certificates Earned"
          value="8"
          color="bg-[#F4EEFF]"
        />

        <StatCard
          icon="🔥"
          title="Learning Streak"
          value="12 Days"
          color="bg-[#ECFFF3]"
        />

        <StatCard
          icon="✅"
          title="Completed Topics"
          value="23"
          color="bg-[#EEF6FF]"
        />

        <StatCard
          icon="🏆"
          title="Current Level"
          value="Intermediate"
          color="bg-[#FFF6EC]"
        />
      </div>

      {/* MAIN GRID */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2"
      >

        {/* ABOUT */}
        <div
          data-aos="fade-right"
          className="rounded-[35px] border border-[#ECECEC] bg-white p-8 shadow-sm"
        >

          <h2 className="text-3xl font-bold text-[#111827]">
            About Me
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-500">

            {user?.bio ||
              'I’m passionate about building web applications and solving real-world problems through code.'}
          </p>

          <div className="mt-8 space-y-5">

            <InfoItem
              icon={<Mail size={18} />}
              text={
                user?.email ||
                'neama@example.com'
              }
            />

            <InfoItem
              icon={<Phone size={18} />}
              text={
                user?.phone ||
                '+20 123 456 7890'
              }
            />

            <InfoItem
              icon={<MapPin size={18} />}
              text={
                user?.location ||
                'Cairo, Egypt'
              }
            />

            <InfoItem
              icon={<Globe size={18} />}
              text={
                user?.website ||
                'neama.dev'
              }
            />
          </div>
        </div>

        {/* SKILLS */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="rounded-[35px] border border-[#ECECEC] bg-white p-8 shadow-sm"
        >

          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-bold text-[#111827]">
              Skills
            </h2>

            <button className="font-bold text-[#5C45FD]">
              Edit
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

            {skills.map((skill, index) => (

              <div
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                key={index}
                className="flex min-w-0 items-center gap-3 rounded-2xl border border-gray-100 bg-[#FAFAFF] px-4 py-4 transition hover:-translate-y-1 hover:shadow-md"
              >

                {/* ICON */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm ${skill.color}`}
                >

                  {skill.icon}
                </div>

                {/* TEXT */}
                <span className="truncate text-sm font-semibold text-gray-700">

                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full rounded-2xl border-2 border-dashed border-[#D8CCFF] py-4 font-semibold text-[#5C45FD] transition hover:bg-[#F5F3FF]">

            + Add More Skills
          </button>
        </div>
      </div>

      {/* BADGES */}
      <div
        data-aos="fade-in"
        data-aos-delay="700"
        className="mt-8 rounded-[35px] border border-[#ECECEC] bg-white p-8 shadow-sm"
      >

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-[#111827]">
              Badges &
              Achievements
            </h2>

            <p className="mt-2 text-gray-400">
              Unlock badges while
              learning.
            </p>
          </div>

          <button className="font-bold text-[#5C45FD]">
            View all
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-5">

          {badges.map(
            (
              badge,
              index
            ) => (

              <div
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                key={index}
                className="rounded-3xl border border-gray-100 bg-[#FAFAFF] p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="text-6xl">
                  🏅
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-800">

                  {badge}
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* STAT */
function StatCard({
  icon,
  title,
  value,
  color,
}) {

  return (
    <div
      data-aos="zoom-in"
      className="rounded-[30px] border border-[#ECECEC] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >

      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${color}`}>

        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold text-gray-500">
        {title}
      </h3>

      <p className="mt-3 text-3xl font-bold text-[#111827]">
        {value}
      </p>
    </div>
  );
}

/* INFO */
function InfoItem({
  icon,
  text,
}) {

  return (
    <div className="flex items-center gap-4 text-gray-600">

      <div className="text-[#5C45FD]">
        {icon}
      </div>

      <span className="text-lg">
        {text}
      </span>
    </div>
  );
}