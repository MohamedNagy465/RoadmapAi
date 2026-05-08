export default function RoadmapAILandingPage() {
  const tracks = [
    {
      title: 'Web Development',
      description: 'Learn to build websites and web applications from scratch.',
      duration: '6 Months',
      level: 'Beginner Friendly',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Data Science',
      description: 'Master data analysis, visualization and machine learning.',
      duration: '8 Months',
      level: 'Intermediate',
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Explore AI, machine learning and deep learning.',
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
      desc: 'Ask AI anything and get the best learning track for your goals.',
    },
    {
      icon: '🗂️',
      title: 'Structured Roadmaps',
      desc: 'Step-by-step roadmaps designed by experts and AI.',
    },
    {
      icon: '📈',
      title: 'Track Progress',
      desc: 'Track your learning progress and stay motivated.',
    },
  ];

  return (
    <div className="min-h-screen  font-sans">
      <div className="mx-auto max-w-7xl overflow-hidden">

        <section className="grid grid-cols-1 items-center gap-12 px-6 pt[-50px] pb-14 md:grid-cols-2 md:px-10 lg:px-14">
          <div>
            <h2 className="max-w-lg text-5xl font-extrabold leading-tight text-gray-900">
              Build Your <br /> Learning Path <br /> with AI
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-gray-500">
              Get personalized roadmaps, recommended resources and track your progress step-by-step.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:scale-105">
                Start Now
              </button>

              <button className="rounded-xl border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600">
                Explore Tracks
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-100 via-violet-100 to-transparent blur-3xl" />

            <div className="relative flex h-[420px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-[40px] bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8">
              <div className="absolute right-6 top-6 h-5 w-5 rounded-full bg-indigo-500 shadow-lg shadow-indigo-300" />
              <div className="absolute bottom-10 left-8 h-4 w-4 rounded-full bg-violet-400 shadow-lg shadow-violet-300" />

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

                <circle cx="130" cy="255" r="14" fill="#5B4DFF" />
                <circle cx="260" cy="175" r="14" fill="#5B4DFF" />
                <circle cx="395" cy="95" r="14" fill="#5B4DFF" />

                <defs>
                  <linearGradient id="paint0_linear" x1="60" y1="320" x2="460" y2="90" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-[32px] bg-white shadow-2xl">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 text-5xl text-white shadow-xl">
                  🤖
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 px-6 pb-8 md:grid-cols-3 md:px-10 lg:px-14">
          {features.map((feature) => (
            <div
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

        <section className="px-6 pb-14 pt-6 md:px-10 lg:px-14">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-3xl font-bold text-gray-900">Popular Tracks</h3>

            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tracks.map((track) => (
              <div
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
      </div>
    </div>
  );
}
