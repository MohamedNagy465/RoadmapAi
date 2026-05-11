import React from 'react';

import {
  PlayCircle,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Eye,
  Bookmark,
  Download,
  ArrowRight,
} from 'lucide-react';
import video1 from "../../video/WhatsApp Video 2026-05-11 at 15.19.35.mp4"
export default function CoursePlayerPage() {

  const user =
    JSON.parse(
      localStorage.getItem(
        'user'
      )
    ) || {};

  const lessons = [
    {
      title:
        'Introduction to React',
      time: '15:45',
      done: true,
      active: true,
    },

    {
      title:
        'Setting Up the Environment',
      time: '12:30',
      done: true,
    },

    {
      title:
        'JSX Explained',
      time: '18:20',
      done: true,
    },

    {
      title:
        'Components and Props',
      time: '20:15',
      done: true,
    },

    {
      title:
        'Mini Project: Your First App',
      time: '25:10',
      done: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA] p-6">

      {/* CONTENT */}
      <div
        data-aos="fade-up"
        className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3"
      >

        {/* LEFT */}
        <div className="space-y-6 xl:col-span-2">

          {/* VIDEO */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="overflow-hidden rounded-[32px] bg-black shadow-xl"
          >

            <video
              controls
              autoPlay
              className="h-[520px] w-full object-cover"
              poster="https://images.unsplash.com/photo-1515879218  367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
            >

              <source
                src={video1}
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>

          {/* LESSON */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm"
          >

            <div className="p-8">

              <div className="flex items-start justify-between gap-5">

                <div>

                  <h2 className="text-4xl font-bold text-gray-900">
                    1. Introduction to React
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-gray-500">
                    In this lesson,
                    we'll learn what
                    React is, why it's
                    so popular, and how
                    it works.
                  </p>
                </div>

                <Bookmark
                  size={24}
                  className="text-gray-400"
                />
              </div>

              {/* INFO */}
              <div className="mt-8 flex flex-wrap items-center gap-8 text-gray-500">

                <div className="flex items-center gap-2">

                  <Clock3 size={18} />

                  15:45
                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                  />

                  Intermediate
                </div>

                <div className="flex items-center gap-2">

                  <Eye size={18} />

                  12,345 views
                </div>
              </div>
            </div>

            {/* TABS */}
            <div className="border-t border-gray-100 px-8">

              <div className="flex items-center gap-10 overflow-x-auto">

                <button className="whitespace-nowrap border-b-2 border-[#5C45FD] py-5 font-semibold text-[#5C45FD]">

                  Overview
                </button>

                <button className="whitespace-nowrap py-5 text-gray-500">

                  Resources
                </button>

                <button className="whitespace-nowrap py-5 text-gray-500">

                  Notes
                </button>

                <button className="whitespace-nowrap py-5 text-gray-500">

                  Discussions
                </button>
              </div>
            </div>

            {/* OVERVIEW */}
            <div className="p-8">

              <h3 className="text-2xl font-bold text-gray-900">

                About this lesson
              </h3>

              <p className="mt-5 text-lg leading-9 text-gray-500">

                React is a
                JavaScript library
                for building user
                interfaces. It
                allows us to create
                reusable UI
                components and
                build single-page
                applications.
              </p>

              {/* LEARN */}
              <div className="mt-10">

                <h3 className="text-2xl font-bold text-gray-900">

                  What you'll learn
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

                  {[
                    'What is React?',
                    'JSX Syntax',
                    'Components and Props',
                    'React vs Other Libraries',
                    'Setting up the Environment',
                  ].map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        data-aos="fade-right"
                        data-aos-delay={index * 100}
                        key={index}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2
                          size={20}
                          className="text-green-500"
                        />

                        <span className="text-gray-700">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 p-6">

              <button className="rounded-2xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">

                ← Previous Lesson
              </button>

              <span className="font-medium text-gray-500">

                Lesson 1 of 23
              </span>

              <button className="flex items-center gap-2 rounded-2xl bg-[#5C45FD] px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:bg-[#4A38E0]">

                Next Lesson

                <ArrowRight
                  size={18}
                />
              </button>
            </div>
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
            className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm"
          >

            <h3 className="text-2xl font-bold text-gray-900">

              Course Progress
            </h3>

            <div className="mt-8 flex items-center gap-5">

              {/* CIRCLE */}
              <div className="relative h-24 w-24">

                <svg className="h-24 w-24 rotate-[-90deg]">

                  <circle
                    cx="48"
                    cy="48"
                    r="38"
                    stroke="#F1F1F4"
                    strokeWidth="8"
                    fill="none"
                  />

                  <circle
                    cx="48"
                    cy="48"
                    r="38"
                    stroke="#5C45FD"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="240"
                    strokeDashoffset="84"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900">

                  65%
                </div>
              </div>

              {/* INFO */}
              <div className="flex-1">

                <h4 className="font-bold text-gray-900">

                  15 of 23 lessons
                  completed
                </h4>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">

                  <div className="h-full w-[65%] bg-[#5C45FD]" />
                </div>

                <p className="mt-4 text-gray-400">

                  Estimated time left
                </p>

                <h5 className="mt-1 text-2xl font-bold text-gray-900">

                  12h 30m
                </h5>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">

            {/* TABS */}
            <div className="flex items-center gap-10 border-b border-gray-100 pb-5">

              <button className="border-b-2 border-[#5C45FD] pb-4 font-semibold text-[#5C45FD]">

                Course Content
              </button>

              <button className="font-semibold text-gray-400">

                Instructor
              </button>
            </div>

            {/* SECTION */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">

              <div className="flex items-center justify-between bg-gray-50 px-5 py-4">

                <h3 className="font-bold text-gray-900">

                  Section 1:
                  Getting Started
                </h3>

                <span className="font-semibold text-gray-500">

                  5 / 5
                </span>
              </div>

              {/* LESSONS */}
              <div className="divide-y divide-gray-100">

                {lessons.map(
                  (
                    lesson,
                    index
                  ) => (

                    <div
                      data-aos="fade-right"
                      data-aos-delay={index * 100}
                      key={index}
                      className={`flex items-center justify-between px-5 py-4 ${
                        lesson.active
                          ? 'bg-[#F5F3FF]'
                          : 'bg-white'
                      }`}
                    >

                      <div className="flex items-center gap-4">

                        <PlayCircle
                          size={18}
                          className={
                            lesson.active
                              ? 'text-[#5C45FD]'
                              : 'text-gray-400'
                          }
                        />

                        <span className="font-medium text-gray-800">

                          {index + 1}.{' '}
                          {
                            lesson.title
                          }
                        </span>
                      </div>

                      <div className="flex items-center gap-4">

                        <span className="text-sm text-gray-400">

                          {
                            lesson.time
                          }
                        </span>

                        {lesson.done && (

                          <CheckCircle2
                            size={18}
                            className="text-green-500"
                          />
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* OTHER */}
            {[
              'Section 2: Core Concepts',
              'Section 3: State & Events',
              'Section 4: Hooks',
              'Section 5: Routing',
            ].map(
              (
                section,
                index
              ) => (

                <div
                  key={index}
                  className="mt-4 flex items-center justify-between rounded-2xl border border-gray-100 px-5 py-4"
                >

                  <span className="font-semibold text-gray-700">

                    {section}
                  </span>

                  <ChevronDown
                    size={18}
                    className="text-gray-400"
                  />
                </div>
              )
            )}
          </div>

          {/* DOWNLOADS */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm"
          >

            <h3 className="text-2xl font-bold text-gray-900">

              Download Resources
            </h3>

            <div className="mt-6 space-y-4">

              {[
                'Course Slides.pdf',
                'Code Examples.zip',
                'Cheat Sheet.pdf',
              ].map(
                (
                  file,
                  index
                ) => (

                  <div
                    key={index}
                    className="flex items-center justify-between rounded-2xl border border-gray-100 px-5 py-4"
                  >

                    <div className="flex items-center gap-4">

                      <Download
                        size={20}
                        className="text-[#5C45FD]"
                      />

                      <span className="font-medium text-gray-700">

                        {file}
                      </span>
                    </div>

                    <button className="font-semibold text-[#5C45FD] hover:underline">

                      Download
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}