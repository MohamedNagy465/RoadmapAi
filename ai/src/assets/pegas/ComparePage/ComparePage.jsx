import React from 'react';

export default function ComparePage() {

  const tracks = [
    {
      title: 'Web Development',
      color: 'bg-[#5C45FD]',
      light: 'bg-indigo-50',
      duration: '6 Months',
      difficulty: 'Medium',
      jobs: 'High',
      salary: '$70,000',
      skills: 'HTML, CSS, JS, React',
      bestFor: 'Creative & Logic Thinkers',
    },

    {
      title: 'Data Science',
      color: 'bg-[#22C55E]',
      light: 'bg-green-50',
      duration: '8 Months',
      difficulty: 'Hard',
      jobs: 'High',
      salary: '$85,000',
      skills: 'Python, SQL, ML',
      bestFor: 'Data & Analytics Enthusiasts',
    },

    {
      title: 'Artificial Intelligence',
      color: 'bg-[#F59E0B]',
      light: 'bg-orange-50',
      duration: '10 Months',
      difficulty: 'Hard',
      jobs: 'Very High',
      salary: '$95,000',
      skills: 'Python, ML, DL',
      bestFor: 'AI & Technology Enthusiasts',
    },
  ];

  const labels = [
    'Duration',
    'Difficulty',
    'Job Opportunities',
    'Average Salary',
    'Required Skills',
    'Best For',
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA]">

      <div className="min-h-screen bg-white rounded-[32px] border border-gray-200 shadow-xl p-6 md:p-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Compare Tracks
          </h1>

          <p className="mt-2 text-gray-400">
            Choose the best path for your career goals.
          </p>
        </div>

        {/* Table */}
        <div className="mt-10 overflow-x-auto">

          <div className="min-w-[950px] border border-gray-200 rounded-[28px] overflow-hidden">

            {/* Head */}
            <div className="grid grid-cols-4">

              <div className="bg-white border-b border-r border-gray-200 p-5" />

              {tracks.map((track, index) => (
                <div
                  key={index}
                  className={`${track.light} border-b border-gray-200 p-5 text-center`}
                >
                  <h3 className="font-bold text-gray-900">
                    {track.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Rows */}
            {labels.map((label, index) => (
              <div
                key={index}
                className="grid grid-cols-4"
              >

                {/* Label */}
                <div className="border-r border-b border-gray-200 p-5 font-semibold text-gray-700 bg-gray-50">
                  {label}
                </div>

                {/* Web */}
                <div className="border-b border-r border-gray-200 p-5 text-center text-gray-600">
                  {
                    [
                      tracks[0].duration,
                      tracks[0].difficulty,
                      tracks[0].jobs,
                      tracks[0].salary,
                      tracks[0].skills,
                      tracks[0].bestFor,
                    ][index]
                  }
                </div>

                {/* Data */}
                <div className="border-b border-r border-gray-200 p-5 text-center text-gray-600">
                  {
                    [
                      tracks[1].duration,
                      tracks[1].difficulty,
                      tracks[1].jobs,
                      tracks[1].salary,
                      tracks[1].skills,
                      tracks[1].bestFor,
                    ][index]
                  }
                </div>

                {/* AI */}
                <div className="border-b border-gray-200 p-5 text-center text-gray-600">
                  {
                    [
                      tracks[2].duration,
                      tracks[2].difficulty,
                      tracks[2].jobs,
                      tracks[2].salary,
                      tracks[2].skills,
                      tracks[2].bestFor,
                    ][index]
                  }
                </div>

              </div>
            ))}

            {/* Buttons */}
            <div className="grid grid-cols-4">

              <div className="border-r border-gray-200 p-5 bg-white" />

              {tracks.map((track, index) => (
                <div
                  key={index}
                  className="p-5 flex justify-center border-r last:border-r-0 border-gray-200"
                >
                  <button
                    className={`${track.color} text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition hover:opacity-90`}
                  >
                    View Roadmap
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