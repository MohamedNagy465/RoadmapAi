import React, { useState } from 'react';

import {
  Check,
  Share2,
  Search,
} from 'lucide-react';

export default function RoadmapPage() {

  /* Search */
  const [search, setSearch] =
    useState('frontend');

  /* Roadmaps */
  const roadmaps = {

    frontend: {
      title:
        'Frontend Developer Roadmap',

      desc:
        'Step-by-step guide to become a professional Frontend Developer',

      beginner: [
        {
          title: '1. HTML Basics',
          desc: 'Learn the structure of web pages.',
          resources: '3 Resources',
        },

        {
          title: '2. CSS Fundamentals',
          desc: 'Style your websites beautifully.',
          resources: '4 Resources',
        },

        {
          title: '3. Git & GitHub',
          desc: 'Version control and collaboration.',
          resources: '2 Resources',
        },
      ],

      intermediate: [
        {
          title: '4. JavaScript Basics',
          desc: 'Learn JavaScript fundamentals.',
          resources: '4 Resources',
        },

        {
          title: '5. DOM Manipulation',
          desc: 'Interact with web pages.',
          resources: '3 Resources',
        },

        {
          title: '6. Responsive Design',
          desc: 'Make websites work on all devices.',
          resources: '3 Resources',
        },
      ],

      advanced: [
        {
          title: '7. React Basics',
          desc: 'Build user interfaces with React.',
          resources: '4 Resources',
        },

        {
          title: '8. State Management',
          desc: 'Manage state in React apps.',
          resources: '3 Resources',
        },

        {
          title: '9. Projects',
          desc: 'Build real-world projects.',
          resources: '5 Resources',
        },
      ],
    },

    backend: {
      title:
        'Backend Developer Roadmap',

      desc:
        'Learn server-side development and databases.',

      beginner: [
        {
          title: '1. Programming Basics',
          desc: 'Learn JavaScript or Python.',
          resources: '3 Resources',
        },

        {
          title: '2. Node.js Basics',
          desc: 'Understand backend fundamentals.',
          resources: '4 Resources',
        },

        {
          title: '3. REST APIs',
          desc: 'Build APIs for applications.',
          resources: '3 Resources',
        },
      ],

      intermediate: [
        {
          title: '4. Databases',
          desc: 'Learn MongoDB & SQL.',
          resources: '5 Resources',
        },

        {
          title: '5. Authentication',
          desc: 'JWT & user security.',
          resources: '3 Resources',
        },

        {
          title: '6. Express.js',
          desc: 'Create scalable servers.',
          resources: '4 Resources',
        },
      ],

      advanced: [
        {
          title: '7. Deployment',
          desc: 'Deploy backend apps.',
          resources: '2 Resources',
        },

        {
          title: '8. Microservices',
          desc: 'Build scalable systems.',
          resources: '4 Resources',
        },

        {
          title: '9. System Design',
          desc: 'Advanced backend architecture.',
          resources: '5 Resources',
        },
      ],
    },

    ai: {
      title:
        'AI Engineer Roadmap',

      desc:
        'Become an Artificial Intelligence Engineer.',

      beginner: [
        {
          title: '1. Python Basics',
          desc: 'Learn Python programming.',
          resources: '4 Resources',
        },

        {
          title: '2. Math for AI',
          desc: 'Linear Algebra & Statistics.',
          resources: '5 Resources',
        },

        {
          title: '3. Data Analysis',
          desc: 'Work with datasets.',
          resources: '3 Resources',
        },
      ],

      intermediate: [
        {
          title: '4. Machine Learning',
          desc: 'Learn ML algorithms.',
          resources: '6 Resources',
        },

        {
          title: '5. Deep Learning',
          desc: 'Neural networks basics.',
          resources: '5 Resources',
        },

        {
          title: '6. TensorFlow & PyTorch',
          desc: 'AI frameworks.',
          resources: '4 Resources',
        },
      ],

      advanced: [
        {
          title: '7. NLP',
          desc: 'Natural Language Processing.',
          resources: '4 Resources',
        },

        {
          title: '8. Computer Vision',
          desc: 'Image processing.',
          resources: '4 Resources',
        },

        {
          title: '9. AI Projects',
          desc: 'Build real AI applications.',
          resources: '6 Resources',
        },
      ],
    },

    cybersecurity: {
      title:
        'Cyber Security Roadmap',

      desc:
        'Learn ethical hacking and cyber security.',

      beginner: [
        {
          title: '1. Networking Basics',
          desc: 'Understand computer networks.',
          resources: '4 Resources',
        },

        {
          title: '2. Linux Basics',
          desc: 'Learn Linux commands.',
          resources: '3 Resources',
        },

        {
          title: '3. Security Fundamentals',
          desc: 'Basic cyber security concepts.',
          resources: '4 Resources',
        },
      ],

      intermediate: [
        {
          title: '4. Ethical Hacking',
          desc: 'Penetration testing basics.',
          resources: '5 Resources',
        },

        {
          title: '5. Wireshark',
          desc: 'Analyze network traffic.',
          resources: '3 Resources',
        },

        {
          title: '6. Web Security',
          desc: 'Protect web applications.',
          resources: '4 Resources',
        },
      ],

      advanced: [
        {
          title: '7. Malware Analysis',
          desc: 'Understand malicious software.',
          resources: '5 Resources',
        },

        {
          title: '8. Digital Forensics',
          desc: 'Investigate cyber attacks.',
          resources: '4 Resources',
        },

        {
          title: '9. Security Projects',
          desc: 'Real-world security labs.',
          resources: '6 Resources',
        },
      ],
    },

    mobile: {
      title: 'Mobile Developer Roadmap',

      desc:
        'Learn Android, iOS, Flutter and React Native.',

      beginner: [
        {
          title: '1. Programming Basics',
          desc: 'Learn Dart or JavaScript.',
          resources: '3 Resources',
        },

        {
          title: '2. Flutter Basics',
          desc: 'Build cross-platform apps.',
          resources: '4 Resources',
        },

        {
          title: '3. UI Design',
          desc: 'Design mobile interfaces.',
          resources: '3 Resources',
        },
      ],

      intermediate: [
        {
          title: '4. State Management',
          desc: 'Manage app state.',
          resources: '4 Resources',
        },

        {
          title: '5. APIs & Firebase',
          desc: 'Connect apps to backend.',
          resources: '5 Resources',
        },

        {
          title: '6. Navigation',
          desc: 'Build app navigation.',
          resources: '3 Resources',
        },
      ],

      advanced: [
        {
          title: '7. Clean Architecture',
          desc: 'Structure scalable apps.',
          resources: '4 Resources',
        },

        {
          title: '8. Publish Apps',
          desc: 'Deploy apps to stores.',
          resources: '2 Resources',
        },

        {
          title: '9. Real Projects',
          desc: 'Build production apps.',
          resources: '6 Resources',
        },
      ],
    },

    datascience: {
      title: 'Data Science Roadmap',

      desc:
        'Learn data analysis, statistics and machine learning.',

      beginner: [
        {
          title: '1. Python Basics',
          desc: 'Learn Python programming.',
          resources: '4 Resources',
        },

        {
          title: '2. Statistics',
          desc: 'Understand probability & statistics.',
          resources: '5 Resources',
        },

        {
          title: '3. Pandas & NumPy',
          desc: 'Analyze datasets.',
          resources: '4 Resources',
        },
      ],

      intermediate: [
        {
          title: '4. Data Visualization',
          desc: 'Visualize data with charts.',
          resources: '3 Resources',
        },

        {
          title: '5. SQL',
          desc: 'Work with databases.',
          resources: '4 Resources',
        },

        {
          title: '6. Machine Learning',
          desc: 'Learn ML algorithms.',
          resources: '6 Resources',
        },
      ],

      advanced: [
        {
          title: '7. Deep Learning',
          desc: 'Neural networks & AI.',
          resources: '5 Resources',
        },

        {
          title: '8. Big Data',
          desc: 'Handle huge datasets.',
          resources: '4 Resources',
        },

        {
          title: '9. Data Projects',
          desc: 'Build real-world projects.',
          resources: '6 Resources',
        },
      ],
    },

    devops: {
      title: 'DevOps Engineer Roadmap',

      desc:
        'Learn CI/CD, Docker, Kubernetes and cloud systems.',

      beginner: [
        {
          title: '1. Linux Basics',
          desc: 'Learn Linux commands.',
          resources: '3 Resources',
        },

        {
          title: '2. Networking',
          desc: 'Understand servers & networks.',
          resources: '4 Resources',
        },

        {
          title: '3. Git & GitHub',
          desc: 'Version control basics.',
          resources: '2 Resources',
        },
      ],

      intermediate: [
        {
          title: '4. Docker',
          desc: 'Containerize applications.',
          resources: '5 Resources',
        },

        {
          title: '5. CI/CD',
          desc: 'Automate deployment.',
          resources: '4 Resources',
        },

        {
          title: '6. Cloud Basics',
          desc: 'AWS & Azure fundamentals.',
          resources: '5 Resources',
        },
      ],

      advanced: [
        {
          title: '7. Kubernetes',
          desc: 'Orchestrate containers.',
          resources: '6 Resources',
        },

        {
          title: '8. Monitoring',
          desc: 'Monitor systems.',
          resources: '4 Resources',
        },

        {
          title: '9. Infrastructure as Code',
          desc: 'Automate infrastructure.',
          resources: '5 Resources',
        },
      ],
    },
  };

  /* Current Track */
  const currentRoadmap =
    roadmaps[
      search.toLowerCase()
    ] || roadmaps.frontend;

  return (
    <div className="min-h-screen">

      <div className="bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-xl">

        {/* Main */}
        <main className="flex-1 p-6 md:p-10">

          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-4">

            <div>

              <h1 className="text-3xl font-bold text-gray-900">
                {currentRoadmap.title}
              </h1>

              <p className="mt-2 text-gray-400">
                {currentRoadmap.desc}
              </p>
            </div>

            <button className="flex items-center gap-2 border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:border-gray-300 transition">

              <Share2 size={16} />

              Share
            </button>
          </div>

          {/* Search */}
          <div className="mt-8 relative">

            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search any specialization... (frontend, backend, ai, cybersecurity, mobile, datascience, devops)"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-[#5C45FD]"
            />
          </div>

          {/* Beginner */}
          <RoadmapSection
            title="Beginner"
            color="green"
            items={
              currentRoadmap.beginner
            }
          />

          {/* Intermediate */}
          <RoadmapSection
            title="Intermediate"
            color="blue"
            items={
              currentRoadmap.intermediate
            }
          />

          {/* Advanced */}
          <RoadmapSection
            title="Advanced"
            color="purple"
            items={
              currentRoadmap.advanced
            }
          />

        </main>
      </div>
    </div>
  );
}

/* Section */
function RoadmapSection({
  title,
  color,
  items,
}) {

  const styles = {
    green: {
      dot: 'bg-green-500',
      badge:
        'bg-green-100 text-green-700',
      border:
        'border-green-200',
    },

    blue: {
      dot: 'bg-blue-500',
      badge:
        'bg-blue-100 text-blue-700',
      border:
        'border-blue-200',
    },

    purple: {
      dot: 'bg-purple-500',
      badge:
        'bg-purple-100 text-purple-700',
      border:
        'border-purple-200',
    },
  };

  return (
    <div className="mt-10">

      {/* Title */}
      <div className="flex items-center gap-3 mb-5">

        <div
          className={`w-4 h-4 rounded-full border-4 ${styles[color].border}`}
        />

        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${styles[color].badge}`}
        >
          {title}
        </span>
      </div>

      {/* Cards */}
      <div className="space-y-4 pl-2 border-l-2 border-gray-100 ml-[7px]">

        {items.map(
          (item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm"
            >

              {/* Dot */}
              <div
                className={`absolute -left-[11px] top-8 w-5 h-5 rounded-full ${styles[color].dot} border-4 border-white`}
              />

              {/* Info */}
              <div>

                <h3 className="font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {item.desc}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-5">

                <span className="text-sm text-gray-400 whitespace-nowrap">
                  {item.resources}
                </span>

                <button className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition">

                  <Check size={16} />
                </button>
              </div>

            </div>
          )
        )}
      </div>
    </div>
  );
}