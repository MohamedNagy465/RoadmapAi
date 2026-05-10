import React, {
  useMemo,
  useState,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import {
  Search,
  Filter,
  ChevronDown,
  Play,
  BookOpen,
  Layers3,
  BarChart3,
  Brain,
} from 'lucide-react';

export default function RoadmapPage() {

  const navigate =
    useNavigate();

  /* SEARCH */
  const [search, setSearch] =
    useState('');

  /* OPEN */
  const [openTrack, setOpenTrack] =
    useState(1);

  /* DATA */
  const roadmapData = [
    {
      id: 1,
      title: 'Web Development',
      level: 'Beginner',
      progress: 65,

      lessons: [
        {
          title:
            'HTML & CSS Basics',
          type: 'Article',
          time: '15 min',
          completed: true,
        },

        {
          title:
            'JavaScript Fundamentals',
          type: 'Video',
          time: '20 min',
          completed: true,
        },

        {
          title:
            'React.js Fundamentals',
          type: 'Video',
          time: '25 min',
          current: true,
        },

        {
          title:
            'Next.js & APIs',
          type: 'Video',
          time: '28 min',
        },

        {
          title:
            'Build Full Project',
          type: 'Project',
          time: '40 min',
        },
      ],
    },

    {
      id: 2,
      title: 'Backend Development',
      level: 'Intermediate',
      progress: 40,

      lessons: [
        {
          title:
            'Node.js Basics',
          type: 'Video',
          time: '18 min',
          completed: true,
        },

        {
          title:
            'Express.js',
          type: 'Video',
          time: '24 min',
          current: true,
        },

        {
          title:
            'MongoDB',
          type: 'Article',
          time: '20 min',
        },

        {
          title:
            'Authentication JWT',
          type: 'Video',
          time: '22 min',
        },

        {
          title:
            'REST APIs Project',
          type: 'Project',
          time: '35 min',
        },
      ],
    },

    {
      id: 3,
      title: 'Data Science',
      level: 'Intermediate',
      progress: 30,

      lessons: [
        {
          title:
            'Python for Data Science',
          type: 'Video',
          time: '22 min',
          completed: true,
        },

        {
          title:
            'NumPy & Pandas',
          type: 'Video',
          time: '30 min',
          current: true,
        },

        {
          title:
            'Data Visualization',
          type: 'Article',
          time: '18 min',
        },

        {
          title:
            'Machine Learning Basics',
          type: 'Video',
          time: '35 min',
        },

        {
          title:
            'AI Data Project',
          type: 'Project',
          time: '50 min',
        },
      ],
    },
  ];

  /* FILTER */
  const filteredTracks =
    useMemo(() => {

      return roadmapData.filter(
        (track) => {

          const searchText =
            search.toLowerCase();

          const matchTitle =
            track.title
              .toLowerCase()
              .includes(
                searchText
              );

          const matchLessons =
            track.lessons?.some(
              (lesson) =>
                lesson.title
                  .toLowerCase()
                  .includes(
                    searchText
                  )
            );

          return (
            matchTitle ||
            matchLessons
          );
        }
      );
    }, [search]);

  return (
    <div className="min-h-screen bg-[#F5F6FA] p-5 md:p-8">

      {/* HERO */}
      <div
        data-aos="zoom-in"
        className="overflow-hidden rounded-[38px] bg-gradient-to-r from-[#F4EEFF] to-white p-8 shadow-sm"
      >

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <div data-aos="fade-right">

            <h1 className="text-5xl font-extrabold leading-tight text-[#111827]">

              Roadmap AI
            </h1>

            <p className="mt-5 max-w-[600px] text-lg leading-8 text-gray-500">

              Your smart path to
              learn programming,
              build projects and
              grow your career step
              by step.
            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

              <HeroCard
                icon={<Layers3 />}
                title="Tracks"
                value="20+"
              />

              <HeroCard
                icon={<BookOpen />}
                title="Courses"
                value="300+"
              />

              <HeroCard
                icon={<Brain />}
                title="Topics"
                value="1000+"
              />

              <HeroCard
                icon={<BarChart3 />}
                title="Levels"
                value="All Levels"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div
            data-aos="fade-in"
            data-aos-delay="200"
            className="flex items-center justify-center"
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
              alt=""
              className="w-full max-w-[430px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div
        data-aos="fade-up"
        className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-4"
      >

        {/* LEFT */}
        <div className="xl:col-span-3">

          {/* SEARCH */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="rounded-[35px] bg-white p-6 shadow-sm"
          >

            <div className="flex flex-col gap-4 md:flex-row">

              {/* INPUT */}
              <div className="relative flex-1">

                <Search
                  size={22}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#5C45FD]"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  placeholder="Search tracks, lessons or topics..."
                  className="w-full rounded-2xl border border-[#ECECEC] bg-[#FAFAFF] py-4 pl-14 pr-5 text-gray-700 outline-none transition focus:border-[#5C45FD]"
                />
              </div>

              {/* FILTER */}
              <button className="flex items-center justify-center gap-3 rounded-2xl border border-[#ECECEC] bg-[#FAFAFF] px-6 py-4 font-semibold text-[#5C45FD] transition hover:bg-[#F3EEFF]">

                <Filter size={18} />

                Filters
              </button>
            </div>
          </div>

          {/* TRACKS */}
          <div className="mt-6 space-y-5">

            {filteredTracks.map(
              (track) => (

                <div
                  data-aos="fade-up"
                  data-aos-delay={track.id * 100}
                  key={track.id}
                  className="rounded-[35px] bg-white p-6 shadow-sm"
                >

                  {/* HEADER */}
                  <div
                    onClick={() =>
                      setOpenTrack(
                        openTrack ===
                          track.id
                          ? null
                          : track.id
                      )
                    }
                    className="flex cursor-pointer items-center justify-between"
                  >

                    <div className="flex items-center gap-5">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5C45FD] font-bold text-white shadow-lg">

                        {track.id}
                      </div>

                      <div>

                        <h2 className="text-2xl font-bold text-[#111827]">

                          {
                            track.title
                          }
                        </h2>

                        <span className="mt-2 inline-block rounded-full bg-[#ECFFF2] px-3 py-1 text-xs font-semibold text-green-600">

                          {
                            track.level
                          }
                        </span>
                      </div>
                    </div>

                    <ChevronDown
                      className={`transition ${
                        openTrack ===
                        track.id
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </div>

                  {/* LESSONS */}
                  {openTrack ===
                    track.id && (

                      <div className="mt-8 space-y-3">

                        {track.lessons.map(
                          (
                            lesson,
                            index
                          ) => (

                            <div
                              data-aos="fade-right"
                              data-aos-delay={index * 100}
                              key={
                                index
                              }
                              className={`flex flex-col gap-4 rounded-2xl border border-[#F1F1F1] p-5 md:flex-row md:items-center md:justify-between ${
                                lesson.current
                                  ? 'bg-[#F7F4FF]'
                                  : 'bg-white'
                              }`}
                            >

                              {/* LEFT */}
                              <div className="flex items-center gap-4">

                                <div
                                  className={`h-5 w-5 rounded-full border-2 ${
                                    lesson.completed
                                      ? 'border-green-500 bg-green-500'
                                      : lesson.current
                                      ? 'border-[#5C45FD] bg-[#5C45FD]'
                                      : 'border-gray-300'
                                  }`}
                                />

                                <div>

                                  <h3 className="font-semibold text-[#111827]">

                                    {
                                      lesson.title
                                    }
                                  </h3>

                                  <p className="mt-1 text-sm text-gray-400">

                                    {
                                      lesson.type
                                    }{' '}
                                    •{' '}
                                    {
                                      lesson.time
                                    }
                                  </p>
                                </div>
                              </div>

                              {lesson.current && (

                                <button
                                  onClick={() =>
                                    navigate(
                                      '/course-player'
                                    )
                                  }
                                  className="flex items-center gap-2 rounded-xl bg-[#5C45FD] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
                                >

                                  Continue

                                  <Play
                                    size={
                                      16
                                    }
                                  />
                                </button>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    )}
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div
          data-aos="fade-in"
          data-aos-delay="400"
          className="space-y-6"
        >

          {/* PROGRESS */}
          <div
            data-aos="zoom-in-up"
            className="rounded-[35px] bg-white p-8 shadow-sm"
          >

            <h2 className="text-2xl font-bold text-[#111827]">
              Your Progress
            </h2>

            <div className="mt-10 flex justify-center">

              <div className="relative h-52 w-52">

                <svg
                  className="h-full w-full rotate-[-90deg]"
                  viewBox="0 0 160 160"
                >

                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    fill="none"
                    stroke="#ECE8FF"
                    strokeWidth="14"
                  />

                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    fill="none"
                    stroke="#5C45FD"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={427}
                    strokeDashoffset={
                      427 -
                      (427 *
                        65) /
                        100
                    }
                    className="transition-all duration-700"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <h3 className="text-5xl font-extrabold text-[#111827]">
                    65%
                  </h3>

                  <p className="mt-2 text-sm font-medium text-gray-400">
                    Overall Progress
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="rounded-[35px] bg-white p-8 shadow-sm"
          >

            <h2 className="text-2xl font-bold text-[#111827]">
              Categories
            </h2>

            <div className="mt-6 space-y-4">

              {[
                'Web Development',
                'Backend',
                'Data Science',
                'Mobile Apps',
              ].map((item) => (

                <button
                  key={item}
                  onClick={() =>
                    setSearch(item)
                  }
                  className="w-full rounded-2xl border border-[#F1F1F1] px-5 py-4 text-left font-medium text-gray-600 transition hover:border-[#5C45FD] hover:bg-[#FAF8FF]"
                >

                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* RECOMMENDED */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="rounded-[35px] bg-white p-8 shadow-sm"
          >

            <h2 className="text-2xl font-bold text-[#111827]">
              Recommended
            </h2>

            <div className="mt-6 rounded-3xl bg-[#F7F4FF] p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5C45FD] text-3xl text-white">

                  ⚛️
                </div>

                <div>

                  <h3 className="font-bold text-[#111827]">

                    React Hooks
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">

                    Video • 24 min
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  navigate(
                    '/course-player'
                  )
                }
                className="mt-5 w-full rounded-2xl bg-white py-3 font-semibold text-[#5C45FD]"
              >

                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* HERO CARD */
function HeroCard({
  icon,
  title,
  value,
}) {

  return (
    <div
      data-aos="fade-up"
      className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >

      <div className="text-[#5C45FD]">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-500">

        {title}
      </h3>

      <p className="mt-2 text-lg font-bold text-[#111827]">

        {value}
      </p>
    </div>
  );
}