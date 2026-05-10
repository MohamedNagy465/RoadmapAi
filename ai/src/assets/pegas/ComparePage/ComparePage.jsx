import React, {
  useMemo,
  useState,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import {
  Share2,
  Plus,
  Trash2,
  Star,
  Bookmark,
  ShieldCheck,
  Clock3,
  BriefcaseBusiness,
  Layers3,
  BarChart3,
  CircleDollarSign,
  UserRound,
  Sparkles,
} from 'lucide-react';

import {
  FaReact,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';

export default function ComparePage() {

  const navigate =
    useNavigate();

  const tracksData = [
    {
      id: 1,

      title:
        'Full Stack Web Developer',

      category:
        'Web Development',

      icon: <FaReact />,

      color:
        'from-[#5C45FD] to-[#7B61FF]',

      iconBg:
        'bg-gradient-to-r from-[#5C45FD] to-[#7B61FF]',

      focus:
        'Frontend + Backend',

      duration:
        '8 - 12 Months',

      courses:
        '42 Courses',

      topics:
        '350+ Topics',

      difficulty: 4,

      jobs: 'High',

      salary:
        '$85,000 - $130,000',

      bestFor:
        'People who love building complete apps.',

      tech: [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
      ],
    },

    {
      id: 2,

      title:
        'Frontend Developer',

      category:
        'Web Development',

      icon: <FaNodeJs />,

      color:
        'from-[#22C55E] to-[#16A34A]',

      iconBg:
        'bg-gradient-to-r from-[#22C55E] to-[#16A34A]',

      focus:
        'UI/UX & Client Side',

      duration:
        '6 - 8 Months',

      courses:
        '28 Courses',

      topics:
        '220+ Topics',

      difficulty: 3,

      jobs: 'High',

      salary:
        '$70,000 - $110,000',

      bestFor:
        'People who enjoy design and UI interactions.',

      tech: [
        'JavaScript',
        'TypeScript',
        'React',
      ],
    },

    {
      id: 3,

      title:
        'Backend Developer (Python)',

      category:
        'Backend Development',

      icon: <FaPython />,

      color:
        'from-[#2563EB] to-[#3B82F6]',

      iconBg:
        'bg-gradient-to-r from-[#2563EB] to-[#3B82F6]',

      focus:
        'Server-side & Databases',

      duration:
        '6 - 10 Months',

      courses:
        '30 Courses',

      topics:
        '260+ Topics',

      difficulty: 4,

      jobs: 'High',

      salary:
        '$80,000 - $120,000',

      bestFor:
        'People who enjoy logic and APIs.',

      tech: [
        'Python',
        'Django',
        'SQL',
      ],
    },

    {
      id: 4,

      title:
        'Data Science',

      category:
        'AI & Data',

      icon: '📊',

      color:
        'from-[#F59E0B] to-[#FBBF24]',

      iconBg:
        'bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]',

      focus:
        'Data Analysis & ML',

      duration:
        '10 - 14 Months',

      courses:
        '35 Courses',

      topics:
        '400+ Topics',

      difficulty: 5,

      jobs: 'Very High',

      salary:
        '$100,000 - $150,000',

      bestFor:
        'People who love numbers and AI.',

      tech: [
        'Python',
        'Pandas',
        'ML',
      ],
    },
  ];

  const [selectedTracks,
    setSelectedTracks] =
    useState([
      tracksData[0],
      tracksData[1],
      tracksData[2],
    ]);

  const addTrack = (
    track
  ) => {

    if (
      selectedTracks.find(
        (t) =>
          t.id === track.id
      )
    )
      return;

    if (
      selectedTracks.length >=
      4
    )
      return;

    setSelectedTracks([
      ...selectedTracks,
      track,
    ]);
  };

  const removeTrack = (
    id
  ) => {

    setSelectedTracks(
      selectedTracks.filter(
        (track) =>
          track.id !== id
      )
    );
  };

  const availableTracks =
    useMemo(() => {

      return tracksData.filter(
        (track) =>
          !selectedTracks.find(
            (t) =>
              t.id === track.id
          )
      );
    }, [selectedTracks]);

  const comparisonRows = [
    {
      label: 'Focus',
      key: 'focus',
      icon:
        <ShieldCheck size={16} />,
    },

    {
      label: 'Duration',
      key: 'duration',
      icon:
        <Clock3 size={16} />,
    },

    {
      label: 'Courses',
      key: 'courses',
      icon:
        <Layers3 size={16} />,
    },

    {
      label: 'Topics',
      key: 'topics',
      icon:
        <BarChart3 size={16} />,
    },

    {
      label:
        'Job Opportunities',
      key: 'jobs',
      icon:
        <BriefcaseBusiness size={16} />,
    },

    {
      label:
        'Average Salary',
      key: 'salary',
      icon:
        <CircleDollarSign size={16} />,
    },

    {
      label: 'Best For',
      key: 'bestFor',
      icon:
        <UserRound size={16} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA] p-5 md:p-8">

      {/* HEADER */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-5xl font-extrabold text-[#111827]">
            Compare Tracks
          </h1>

          <p className="mt-3 text-lg text-gray-400">
            Compare learning
            tracks side by side
            and choose the best
            one for your career.
          </p>
        </div>

        <button className="flex items-center gap-3 rounded-2xl border border-[#D9CCFF] bg-white px-6 py-4 font-semibold text-[#5C45FD] shadow-sm transition hover:bg-[#F8F5FF]">

          <Share2 size={18} />

          Share Comparison
        </button>
      </div>

      {/* SELECT TRACKS */}
      <div className="mt-8 rounded-[35px] bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-[#111827]">
            Select tracks to compare
          </h2>

          <button
            onClick={() =>
              setSelectedTracks([])
            }
            className="flex items-center gap-2 font-semibold text-[#5C45FD]"
          >

            <Trash2 size={16} />

            Clear All
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

          {selectedTracks.map(
            (track) => (

              <div
                key={track.id}
                className="relative rounded-3xl border border-[#ECECEC] bg-[#FAFAFF] p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >

                <button
                  onClick={() =>
                    removeTrack(
                      track.id
                    )
                  }
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#EFEAFF] text-[#5C45FD]"
                >
                  ✕
                </button>

                <div className="flex items-start gap-4">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-md ${track.iconBg}`}
                  >
                    {track.icon}
                  </div>

                  <div>

                    <h3 className="max-w-[170px] text-lg font-bold leading-7 text-[#111827]">
                      {track.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      {track.category}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}

          {/* ADD */}
          {selectedTracks.length <
            4 && (

            <div className="rounded-3xl border-2 border-dashed border-[#D8CCFF] bg-[#FCFBFF] p-5">

              <div className="flex h-full flex-col items-center justify-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EFEAFF] text-[#5C45FD]">

                  <Plus size={30} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#111827]">
                  Add Track
                </h3>

                <select
                  onChange={(e) => {

                    const selected =
                      tracksData.find(
                        (
                          track
                        ) =>
                          track.id ===
                          Number(
                            e.target
                              .value
                          )
                      );

                    if (
                      selected
                    ) {

                      addTrack(
                        selected
                      );
                    }
                  }}
                  className="mt-4 w-full rounded-2xl border border-[#ECECEC] bg-white px-4 py-3 outline-none focus:border-[#5C45FD]"
                >

                  <option>
                    Choose Track
                  </option>

                  {availableTracks.map(
                    (
                      track
                    ) => (

                      <option
                        key={
                          track.id
                        }
                        value={
                          track.id
                        }
                      >
                        {track.title}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MAIN */}
      <div className="mt-8 grid grid-cols-1 gap-6 2xl:grid-cols-[1fr_340px]">

        {/* TABLE */}
      {/* TABLE */}
<div className="overflow-hidden rounded-[32px] border border-[#ECECEC] bg-white shadow-sm">

  {/* HEADER */}
  <div className="flex items-center justify-between border-b border-[#F3F3F3] px-8 py-6">

    <div>

      <h2 className="text-2xl font-bold text-[#111827]">
        Side-by-side Comparison
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        Compare all selected tracks in detail.
      </p>
    </div>

    <div className="rounded-full bg-[#F4EEFF] px-4 py-2 text-sm font-semibold text-[#5C45FD]">
      {selectedTracks.length} Tracks
    </div>
  </div>

  {/* TABLE */}
  <div className="w-full overflow-hidden">

    <div className="grid w-full">

      {/* HEAD */}
      <div className="grid grid-cols-[220px_repeat(3,1fr)] bg-[#FAFAFF]">

        <div className="border-r border-[#F1F1F1] p-4 lg:p-6 font-bold text-[#111827]">
          Criteria
        </div>

        {selectedTracks.map(
          (track) => (

            <div
              key={track.id}
              className="border-r border-[#F1F1F1] p-4 lg:p-6 last:border-r-0"
            >

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl text-xl lg:text-2xl text-white shadow-md ${track.iconBg}`}
                >
                  {track.icon}
                </div>

                <div>

                  <h3 className="max-w-[160px] text-xs lg:text-sm font-bold leading-6 text-[#111827]">
                    {track.title}
                  </h3>

                  <p className="mt-1 text-[11px] lg:text-xs text-gray-400">
                    {track.category}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* ROWS */}
      {comparisonRows.map(
        (row, index) => (

          <div
            key={row.key}
            className={`grid grid-cols-[220px_repeat(3,1fr)] border-t border-[#F7F7F7] transition hover:bg-[#FAFAFF] ${
              index % 2 === 0
                ? 'bg-white'
                : 'bg-[#FCFCFF]'
            }`}
          >

            {/* LABEL */}
            <div className="flex items-center gap-3 border-r border-[#F3F3F3] p-4 lg:p-6 font-semibold text-gray-700">

              <div className="text-[#5C45FD]">
                {row.icon}
              </div>

              <span className="text-sm lg:text-base">
                {row.label}
              </span>
            </div>

            {/* VALUES */}
            {selectedTracks.map(
              (track) => (

                <div
                  key={track.id}
                  className="border-r border-[#F3F3F3] p-4 lg:p-6 text-xs lg:text-sm leading-6 lg:leading-7 text-gray-600 last:border-r-0"
                >

                  {
                    track[
                      row.key
                    ]
                  }
                </div>
              )
            )}
          </div>
        )
      )}

      {/* DIFFICULTY */}
      <div className="grid grid-cols-[220px_repeat(3,1fr)] border-t border-[#F3F3F3] bg-white">

        <div className="flex items-center gap-3 border-r border-[#F3F3F3] p-4 lg:p-6 font-semibold text-gray-700">

          <Sparkles size={16} />

          Difficulty
        </div>

        {selectedTracks.map(
          (track) => (

            <div
              key={track.id}
              className="border-r border-[#F3F3F3] p-4 lg:p-6 last:border-r-0"
            >

              <div className="flex gap-1">

                {[1, 2, 3, 4, 5].map(
                  (item) => (

                    <Star
                      key={item}
                      size={18}
                      className={`transition ${
                        item <=
                        track.difficulty
                          ? 'fill-[#5C45FD] text-[#5C45FD]'
                          : 'text-gray-300'
                      }`}
                    />
                  )
                )}
              </div>
            </div>
          )
        )}
      </div>

      {/* TECH */}
      <div className="grid grid-cols-[220px_repeat(3,1fr)] border-t border-[#F3F3F3] bg-[#FCFCFF]">

        <div className="border-r border-[#F3F3F3] p-4 lg:p-6 font-semibold text-gray-700">
          Technologies
        </div>

        {selectedTracks.map(
          (track) => (

            <div
              key={track.id}
              className="border-r border-[#F3F3F3] p-4 lg:p-6 last:border-r-0"
            >

              <div className="flex flex-wrap gap-2">

                {track.tech.map(
                  (tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-[#F4EEFF] px-3 py-2 text-[11px] lg:text-xs font-semibold text-[#5C45FD]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          )
        )}
      </div>

      {/* BUTTONS */}
      <div className="grid grid-cols-[220px_repeat(3,1fr)] bg-white">

        <div />

        {selectedTracks.map(
          (track) => (

            <div
              key={track.id}
              className="border-r border-[#F3F3F3] p-4 lg:p-6 last:border-r-0"
            >

              <button
                onClick={() =>
                  navigate('/roadmap')
                }
                className={`w-full rounded-2xl bg-gradient-to-r px-4 lg:px-5 py-3 lg:py-4 text-sm lg:text-base font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl ${track.color}`}
              >

                View Roadmap →
              </button>
            </div>
          )
        )}
      </div>
    </div>
  </div>
</div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* SAVE */}
          

          {/* AI */}
          <div className="rounded-[32px] bg-gradient-to-br from-[#5C45FD] to-[#7B61FF] p-8 text-white shadow-lg">

            <h2 className="text-3xl font-bold">
              AI Recommendation
            </h2>

            <p className="mt-4 leading-7 text-white/80">
              Get personalized
              suggestions based on
              your skills and goals.
            </p>

          <button
  onClick={() =>
    navigate('/chat')
  }
  className="mt-8 w-full rounded-2xl bg-white py-4 font-semibold text-[#5C45FD] transition hover:scale-105"
>

  ✨ Get Started
</button>
          </div>
        </div>
      </div>
    </div>
  );
}