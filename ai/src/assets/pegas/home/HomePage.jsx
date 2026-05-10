import React, {
  useEffect,
  useState,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

export default function RoadmapAILandingPage() {

  const navigate =
    useNavigate();

  const tracks = [
    {
      title: 'Web Development',
      description:
        'Learn to build websites and web applications from scratch.',
      duration: '6 Months',
      level: 'Beginner Friendly',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },

    {
      title: 'Data Science',
      description:
        'Master data analysis, visualization and machine learning.',
      duration: '8 Months',
      level: 'Intermediate',
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    },

    {
      title: 'Artificial Intelligence',
      description:
        'Explore AI, machine learning and deep learning.',
      duration: '10 Months',
      level: 'Advanced',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI Chatbot',
      desc:
        'Ask AI anything and get the best learning track for your goals.',
    },

    {
      icon: '🗂️',
      title: 'Structured Roadmaps',
      desc:
        'Step-by-step roadmaps designed by experts and AI.',
    },

    {
      icon: '📈',
      title: 'Track Progress',
      desc:
        'Track your learning progress and stay motivated.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA] font-sans">

      <div className="mx-auto max-w-7xl overflow-hidden">

        {/* HERO */}
        <section className="grid grid-cols-1 items-center gap-12 px-6 pb-14 pt-2 md:grid-cols-2 md:px-10 lg:px-14">

          {/* LEFT */}
          <div data-aos="fade-right">

            <div className="inline-flex items-center gap-3 rounded-full bg-[#F5F3FF] px-5 py-3 text-sm font-semibold text-[#5C45FD] shadow-sm">

              ✨

              AI-Powered Learning Guidance
            </div>

            <h2 className="mt-6 max-w-lg text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">

              Build Your
              <br />

              Learning Path
              <br />

              with AI
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-gray-500">

              Get personalized roadmaps, recommended resources
              and track your progress step-by-step.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button
                onClick={() =>
                  navigate('/login')
                }
                className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-200 transition hover:scale-105"
              >

                Start Now
              </button>

              <button
                onClick={() =>
                  navigate('/login')
                }
                className="rounded-2xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600"
              >

                Explore Tracks
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div
            data-aos="fade-left"
            className="relative flex items-center justify-center"
          >

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-100 via-violet-100 to-transparent blur-3xl" />

            <div className="relative flex h-[420px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-[40px] bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8">

              <div className="absolute right-6 top-6 h-5 w-5 rounded-full bg-indigo-500 shadow-lg shadow-indigo-300" />

              <div className="absolute bottom-10 left-8 h-4 w-4 rounded-full bg-violet-400 shadow-lg shadow-violet-300" />

              {/* ROAD SVG */}
              <svg
                viewBox="0 0 500 400"
                className="absolute inset-0 h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >

                <path
                  d="M60 320C120 250 170 270 210 210C250 150 310 170 360 100C390 60 430 70 460 90"
                  stroke="url(#paint0_linear)"
                  strokeWidth="40"
                  strokeLinecap="round"
                />

                <circle
                  cx="130"
                  cy="255"
                  r="14"
                  fill="#5B4DFF"
                />

                <circle
                  cx="260"
                  cy="175"
                  r="14"
                  fill="#5B4DFF"
                />

                <circle
                  cx="395"
                  cy="95"
                  r="14"
                  fill="#5B4DFF"
                />

                <defs>

                  <linearGradient
                    id="paint0_linear"
                    x1="60"
                    y1="320"
                    x2="460"
                    y2="90"
                    gradientUnits="userSpaceOnUse"
                  >

                    <stop stopColor="#4F46E5" />

                    <stop
                      offset="1"
                      stopColor="#7C3AED"
                    />
                  </linearGradient>
                </defs>
              </svg>

              {/* ROBOT */}
              <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-[32px] bg-white shadow-2xl">

                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 text-5xl text-white shadow-xl">

                  🤖
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="grid grid-cols-1 gap-5 px-6 pb-10 md:grid-cols-3 md:px-10 lg:px-14">

          {features.map((feature) => (

            <div
              data-aos="zoom-in"
              key={feature.title}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">

                {feature.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">

                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">

                {feature.desc}
              </p>
            </div>
          ))}
        </section>

        {/* STATS */}
        <section className="px-6 pb-14 md:px-10 lg:px-14">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
              value={<Counter end={50} suffix="K+" />}
              title="Active Students"
              active
            />

            <StatCard
              value={<Counter end={120} suffix="+" />}
              title="AI Roadmaps"
            />

            <StatCard
              value={<Counter end={95} suffix="%" />}
              title="Success Rate"
            />

            <StatCard
              value={<Counter end={24} suffix="/7" />}
              title="AI Support"
            />
          </div>
        </section>

        {/* TRACKS */}
        <section className="px-6 pb-14 pt-6 md:px-10 lg:px-14">

          <div className="mb-8 flex items-center justify-between">

            <h3 className="text-3xl font-bold text-gray-900">

              Popular Tracks
            </h3>

            <button
              onClick={() =>
                navigate('/login')
              }
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >

              View All
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {tracks.map((track) => (

              <div
                data-aos="zoom-in-up"
                key={track.title}
                className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-52 overflow-hidden">

                  <img
                    src={track.image}
                    alt={track.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">

                  <h4 className="text-xl font-bold text-gray-900">

                    {track.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-gray-500">

                    {track.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-sm">

                    <span className="rounded-full bg-indigo-50 px-4 py-2 font-medium text-indigo-600">

                      {track.duration}
                    </span>

                    <span className="font-medium text-gray-600">

                      {track.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-6 pb-16 md:px-10 lg:px-14">

          <div className="mb-10 flex items-center justify-between">

            <h2 className="text-4xl font-bold text-gray-900">

              What Students Say
            </h2>

            <button
              onClick={() =>
                navigate('/login')
              }
              className="font-semibold text-[#5C45FD]"
            >

              View All
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            <TestimonialCard
              image="https://i.pravatar.cc/100?img=5"
              name="Ahmed Ali"
              role="Frontend Developer"
              text="Roadmap AI helped me become a frontend developer in just 6 months."
            />

            <TestimonialCard
              image="https://i.pravatar.cc/100?img=12"
              name="Sara Mohamed"
              role="Data Analyst"
              text="The AI roadmap made learning Data Science much easier for me."
            />

            <TestimonialCard
              image="https://i.pravatar.cc/100?img=15"
              name="Mohamed Essam"
              role="AI Engineer"
              text="Best platform for organizing learning paths and tracking progress."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

/* COUNTER */
function Counter({
  end,
  suffix = '',
}) {

  const [count,
    setCount] =
    useState(0);

  useEffect(() => {

    let start = 0;

    const duration =
      2000;

    const increment =
      end /
      (duration / 20);

    const timer =
      setInterval(() => {

        start +=
          increment;

        if (
          start >= end
        ) {

          setCount(end);

          clearInterval(
            timer
          );

        } else {

          setCount(
            Math.floor(
              start
            )
          );
        }
      }, 20);

    return () =>
      clearInterval(
        timer
      );

  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* STAT CARD */
function StatCard({
  value,
  title,
  active,
}) {

  return (
    <div
      data-aos="fade-up"
      className={`rounded-[30px] p-8 shadow-sm ${
        active
          ? 'bg-gradient-to-br from-[#5C45FD] to-[#7C6CFF] text-white shadow-xl'
          : 'border border-gray-200 bg-white'
      }`}
    >

      <h2 className={`text-5xl font-bold ${
        active
          ? 'text-white'
          : 'text-gray-900'
      }`}>
        {value}
      </h2>

      <p className={`mt-4 text-lg ${
        active
          ? 'text-indigo-100'
          : 'text-gray-500'
      }`}>
        {title}
      </p>
    </div>
  );
}

/* TESTIMONIAL CARD */
function TestimonialCard({
  image,
  name,
  role,
  text,
}) {

  return (
    <div
      data-aos="fade-up"
      className="rounded-[30px] border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>

          <h3 className="text-lg font-bold text-gray-900">

            {name}
          </h3>

          <p className="text-gray-400">

            {role}
          </p>
        </div>
      </div>

      <p className="mt-6 leading-8 text-gray-500">

        {text}
      </p>
    </div>
  );
}