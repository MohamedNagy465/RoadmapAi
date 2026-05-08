import React from 'react';

import {
  ArrowLeft,
  Bell,
  Settings,
  Search,
  PlayCircle,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Eye,
  Bookmark,
  Download,
  ArrowRight,
} from 'lucide-react';

export default function CoursePlayerPage() {

  const user =
    JSON.parse(localStorage.getItem('user')) ||
    {};

  const lessons = [
    {
      title: 'Introduction to React',
      time: '15:45',
      done: true,
      active: true,
    },

    {
      title: 'Setting Up the Environment',
      time: '12:30',
      done: true,
    },

    {
      title: 'JSX Explained',
      time: '18:20',
      done: true,
    },

    {
      title: 'Components and Props',
      time: '20:15',
      done: true,
    },

    {
      title: 'Mini Project: Your First App',
      time: '25:10',
      done: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA] p-6">

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-5">

        {/* Left */}
       

        {/* Right */}
   
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

        {/* Left Side */}
        <div className="xl:col-span-2 space-y-6">

          {/* Video */}
          <div className="bg-black rounded-[32px] overflow-hidden relative">

            <img
              src="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?q=80&w=1200&auto=format&fit=crop"
              alt="video"
              className="w-full h-[520px] object-cover opacity-90"
            />

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">

              {/* Progress */}
              <div className="w-full h-1 rounded-full bg-white/20 overflow-hidden">

                <div className="w-[35%] h-full bg-[#5C45FD]" />
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-5 text-white">

                <div className="flex items-center gap-5">

                  <PlayCircle size={28} />

                  <span className="font-medium">
                    04:32 / 15:45
                  </span>
                </div>

                <div className="flex items-center gap-5">

                  <Settings size={22} />

                  <Bookmark size={22} />
                </div>
              </div>
            </div>
          </div>

          {/* Lesson */}
          <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">

            <div className="p-8">

              <div className="flex items-start justify-between gap-5">

                <div>

                  <h2 className="text-4xl font-bold text-gray-900">
                    1. Introduction to React
                  </h2>

                  <p className="mt-5 text-lg text-gray-500 leading-8">
                    In this lesson, we'll learn what React is,
                    why it's so popular, and how it works.
                  </p>
                </div>

                <Bookmark
                  size={24}
                  className="text-gray-400"
                />
              </div>

              {/* Info */}
              <div className="flex flex-wrap items-center gap-8 mt-8 text-gray-500">

                <div className="flex items-center gap-2">

                  <Clock3 size={18} />

                  15:45
                </div>

                <div className="flex items-center gap-2">

                  <CheckCircle2 size={18} />

                  Intermediate
                </div>

                <div className="flex items-center gap-2">

                  <Eye size={18} />

                  12,345 views
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-t border-gray-100 px-8">

              <div className="flex items-center gap-10 overflow-x-auto">

                <button className="py-5 border-b-2 border-[#5C45FD] text-[#5C45FD] font-semibold whitespace-nowrap">
                  Overview
                </button>

                <button className="py-5 text-gray-500 whitespace-nowrap">
                  Resources
                </button>

                <button className="py-5 text-gray-500 whitespace-nowrap">
                  Notes
                </button>

                <button className="py-5 text-gray-500 whitespace-nowrap">
                  Discussions
                </button>
              </div>
            </div>

            {/* Overview */}
            <div className="p-8">

              <h3 className="text-2xl font-bold text-gray-900">
                About this lesson
              </h3>

              <p className="mt-5 text-gray-500 leading-9 text-lg">
                React is a JavaScript library for building user
                interfaces. It allows us to create reusable UI
                components and build single-page applications.
              </p>

              {/* Learn */}
              <div className="mt-10">

                <h3 className="text-2xl font-bold text-gray-900">
                  What you'll learn
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

                  {[
                    'What is React?',
                    'JSX Syntax',
                    'Components and Props',
                    'React vs Other Libraries',
                    'Setting up the Environment',
                  ].map((item, index) => (
                    <div
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
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-6 flex items-center justify-between flex-wrap gap-4">

              <button className="px-6 py-3 rounded-2xl border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition">
                ← Previous Lesson
              </button>

              <span className="text-gray-500 font-medium">
                Lesson 1 of 23
              </span>

              <button className="px-7 py-3 rounded-2xl bg-[#5C45FD] text-white font-semibold shadow-lg shadow-indigo-100 hover:bg-[#4A38E0] transition flex items-center gap-2">

                Next Lesson

                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">

          {/* Progress */}
          <div className="bg-white rounded-[32px] border border-gray-200 p-6 shadow-sm">

            <h3 className="text-2xl font-bold text-gray-900">
              Course Progress
            </h3>

            <div className="flex items-center gap-5 mt-8">

              {/* Circle */}
              <div className="relative w-24 h-24">

                <svg className="w-24 h-24 rotate-[-90deg]">

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

              {/* Info */}
              <div className="flex-1">

                <h4 className="font-bold text-gray-900">
                  15 of 23 lessons completed
                </h4>

                <div className="mt-4 h-2 rounded-full bg-gray-100 overflow-hidden">

                  <div className="w-[65%] h-full bg-[#5C45FD]" />
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

          {/* Course Content */}
          <div className="bg-white rounded-[32px] border border-gray-200 p-6 shadow-sm">

            {/* Tabs */}
            <div className="flex items-center gap-10 border-b border-gray-100 pb-5">

              <button className="text-[#5C45FD] border-b-2 border-[#5C45FD] pb-4 font-semibold">
                Course Content
              </button>

              <button className="text-gray-400 font-semibold">
                Instructor
              </button>
            </div>

            {/* Section */}
            <div className="mt-6 border border-gray-100 rounded-2xl overflow-hidden">

              <div className="flex items-center justify-between px-5 py-4 bg-gray-50">

                <h3 className="font-bold text-gray-900">
                  Section 1: Getting Started
                </h3>

                <span className="font-semibold text-gray-500">
                  5 / 5
                </span>
              </div>

              {/* Lessons */}
              <div className="divide-y divide-gray-100">

                {lessons.map((lesson, index) => (
                  <div
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
                        {index + 1}. {lesson.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">

                      <span className="text-sm text-gray-400">
                        {lesson.time}
                      </span>

                      {lesson.done && (
                        <CheckCircle2
                          size={18}
                          className="text-green-500"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Sections */}
            {[
              'Section 2: Core Concepts',
              'Section 3: State & Events',
              'Section 4: Hooks',
              'Section 5: Routing',
            ].map((section, index) => (
              <div
                key={index}
                className="mt-4 border border-gray-100 rounded-2xl px-5 py-4 flex items-center justify-between"
              >

                <span className="font-semibold text-gray-700">
                  {section}
                </span>

                <ChevronDown
                  size={18}
                  className="text-gray-400"
                />
              </div>
            ))}
          </div>

          {/* Downloads */}
          <div className="bg-white rounded-[32px] border border-gray-200 p-6 shadow-sm">

            <h3 className="text-2xl font-bold text-gray-900">
              Download Resources
            </h3>

            <div className="mt-6 space-y-4">

              {[
                'Course Slides.pdf',
                'Code Examples.zip',
                'Cheat Sheet.pdf',
              ].map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border border-gray-100 rounded-2xl px-5 py-4"
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

                  <button className="text-[#5C45FD] font-semibold hover:underline">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}