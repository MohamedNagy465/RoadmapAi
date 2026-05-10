import React from 'react';

import {
  Trophy,
  Download,
  BookOpen,
  Award,
} from 'lucide-react';

import {
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

export default function CertificatePage() {

  const user =
    JSON.parse(
      localStorage.getItem(
        'user'
      )
    ) || {};

  const userName =
    user?.name ||
    'Neama Mohamed';

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F6FA]">

      {/* CONTENT */}
      <div className="p-6 md:p-10">

        {/* TOP */}
        <div
          data-aos="zoom-in"
          className="relative overflow-hidden rounded-[40px] bg-white p-8 shadow-sm"
        >

          {/* CONFETTI */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {Array.from({
              length: 30,
            }).map((_, i) => (

              <span
                key={i}
                className="absolute h-3 w-3 rounded-full"
                style={{
                  background:
                    [
                      '#5C45FD',
                      '#22C55E',
                      '#F59E0B',
                      '#EF4444',
                    ][
                      i % 4
                    ],

                  top: `${
                    Math.random() *
                    100
                  }%`,

                  left: `${
                    Math.random() *
                    100
                  }%`,
                }}
              />
            ))}
          </div>

          {/* ICON */}
          <div
            data-aos="fade-down"
            className="relative z-10 flex justify-center"
          >

            <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-[#ECE8FF] bg-[#F7F5FF] shadow-inner">

              <Trophy
                size={65}
                className="text-[#5C45FD]"
              />
            </div>
          </div>

          {/* TITLE */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative z-10 mt-8 text-center"
          >

            <h1 className="text-5xl font-extrabold text-[#111827]">
              Congratulations!
              🎉
            </h1>

            <p className="mt-5 text-xl text-gray-500">
              You have
              successfully
              completed the
              course
            </p>

            <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full bg-[#F4EEFF] px-6 py-3 font-semibold text-[#5C45FD]">

              <BookOpen
                size={20}
              />

              Complete React
              Developer Course
            </div>
          </div>

          {/* CERTIFICATE */}
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="relative z-10 mx-auto mt-14 max-w-6xl overflow-hidden rounded-[40px] border-[10px] border-white bg-white shadow-[0_20px_60px_rgba(92,69,253,0.12)]"
          >

            {/* CORNERS */}
            <div className="absolute left-0 top-0 h-32 w-32 bg-gradient-to-br from-[#5C45FD] to-[#7B61FF]" />

            <div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-br from-[#5C45FD] to-[#7B61FF]" />

            {/* CONTENT */}
            <div className="relative p-10 md:p-20">

              {/* HEADER */}
              <div className="flex flex-wrap items-center justify-between gap-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5C45FD] text-2xl font-bold text-white">

                    R
                  </div>

                  <h2 className="text-3xl font-bold text-[#111827]">
                    Roadmap AI
                  </h2>
                </div>

                <span className="text-sm font-medium text-gray-400">
                  Certificate ID:
                  RD-2024-05-18-1024
                </span>
              </div>

              {/* CENTER */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mt-16 text-center"
              >

                <h3 className="text-4xl font-bold tracking-[6px] text-[#111827]">
                  CERTIFICATE OF
                  COMPLETION
                </h3>

                <p className="mt-10 text-xl text-gray-500">
                  This is to certify
                  that
                </p>

                {/* NAME */}
                <h1 className="mt-8 bg-gradient-to-r from-[#5C45FD] to-[#7B61FF] bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl">

                  {userName}
                </h1>

                <div className="mx-auto mt-8 h-[2px] w-full max-w-3xl bg-[#ECECEC]" />

                <p className="mt-10 text-xl leading-10 text-gray-500">

                  has successfully
                  completed the
                </p>

                <h2 className="mt-4 text-5xl font-bold text-[#111827]">

                  Complete React
                  Developer Course
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-500">

                  You have
                  demonstrated
                  outstanding
                  dedication and
                  achievement by
                  completing all the
                  requirements of
                  this course.
                </p>

                {/* BADGE */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  className="mt-14 flex justify-center"
                >

                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] shadow-xl">

                    <Award
                      size={70}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="mt-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
              >

                {/* DATE */}
                <div>

                  <h4 className="text-lg font-bold text-[#111827]">
                    May 18, 2024
                  </h4>

                  <p className="mt-2 text-gray-400">
                    Date of Completion
                  </p>
                </div>

                {/* SIGN */}
                <div className="text-center">

                  <h3 className="text-4xl italic text-[#111827]">
                    Faamin
                  </h3>

                  <div className="mx-auto mt-3 h-[2px] w-52 bg-[#111827]" />

                  <p className="mt-3 font-semibold text-[#111827]">
                    Team Roadmap AI
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Instructor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SHARE */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="mt-10 rounded-[32px] bg-white p-8 shadow-sm"
          >

            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

              <div>

                <h2 className="text-3xl font-bold text-[#111827]">
                  Share your
                  achievement
                </h2>

                <p className="mt-3 text-gray-500">
                  Let the world know
                  about your success!
                </p>
              </div>

              <div className="flex flex-wrap gap-4">

                <button className="flex items-center gap-3 rounded-2xl border border-[#D9CCFF] bg-[#F7F5FF] px-6 py-4 font-semibold text-[#5C45FD] transition hover:bg-[#ECE8FF]">

                  <Download
                    size={18}
                  />

                  Download
                  Certificate
                </button>

                <button className="flex items-center gap-3 rounded-2xl border border-[#ECECEC] bg-white px-6 py-4 font-semibold text-[#111827] transition hover:bg-gray-50">

                  <FaLinkedinIn
                    size={18}
                  />

                  Share on LinkedIn
                </button>

                <button className="flex items-center gap-3 rounded-2xl border border-[#ECECEC] bg-white px-6 py-4 font-semibold text-[#111827] transition hover:bg-gray-50">

                  <FaTwitter
                    size={18}
                  />

                  Share on Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}