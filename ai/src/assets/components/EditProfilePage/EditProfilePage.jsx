import React, {
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';

import {
  Save,
  X,
} from 'lucide-react';

import toast from 'react-hot-toast';

export default function EditProfilePage() {

  const navigate =
    useNavigate();

  /* USER */
  const user =
    JSON.parse(
      localStorage.getItem('user')
    ) || {};

  /* STATES */
  const [fullName, setFullName] =
    useState(
      user?.name || ''
    );

  const [headline, setHeadline] =
    useState(
      user?.headline ||
        'Aspiring Full Stack Developer'
    );

  const [location, setLocation] =
    useState(
      user?.location ||
        'Cairo, Egypt'
    );

  const [email, setEmail] =
    useState(
      user?.email || ''
    );

  const [phone, setPhone] =
    useState(
      user?.phone || ''
    );

  const [website, setWebsite] =
    useState(
      user?.website || ''
    );

  const [github, setGithub] =
    useState(
      user?.github || ''
    );

  const [linkedin, setLinkedin] =
    useState(
      user?.linkedin || ''
    );

  const [bio, setBio] =
    useState(
      user?.bio ||
        'Passionate about learning programming.'
    );

  const [profileImage, setProfileImage] =
    useState(
      user?.profileImage ||
        'https://i.pravatar.cc/300'
    );

  /* SKILLS */
  const [skills, setSkills] =
    useState(
      user?.skills || [
        {
          name: 'HTML',
          color: 'text-orange-500',
        },

        {
          name: 'CSS',
          color: 'text-blue-500',
        },

        {
          name: 'JavaScript',
          color: 'text-yellow-400',
        },

        {
          name: 'React',
          color: 'text-cyan-400',
        },

        {
          name: 'Node.js',
          color: 'text-green-500',
        },

        {
          name: 'Express',
          color: 'text-gray-700',
        },

        {
          name: 'Tailwind',
          color: 'text-sky-400',
        },

        {
          name: 'MongoDB',
          color: 'text-green-600',
        },

        {
          name: 'TypeScript',
          color: 'text-blue-500',
        },

        {
          name: 'Next.js',
          color: 'text-black',
        },
      ]
    );

  /* NEW SKILL */
  const [newSkill, setNewSkill] =
    useState('');

  /* ADD SKILL */
  const handleAddSkill = () => {

    if (!newSkill.trim()) return;

    const skillObject = {
      name: newSkill,
      color: 'text-[#5C45FD]',
    };

    setSkills([
      ...skills,
      skillObject,
    ]);

    setNewSkill('');
  };

  /* REMOVE */
  const handleRemoveSkill = (
    name
  ) => {

    const filteredSkills =
      skills.filter(
        (skill) =>
          skill.name !== name
      );

    setSkills(filteredSkills);
  };

  /* SAVE */
  const handleSave = () => {

    /* CLEAN */
    const cleanedSkills =
      skills.map(
        (skill) => ({
          name: skill.name,
          color: skill.color,
        })
      );

    const updatedUser = {
      ...user,

      name: fullName,
      headline,
      location,
      email,
      phone,
      website,
      github,
      linkedin,
      bio,
      profileImage,

      skills: cleanedSkills,
    };

    /* SAVE */
    localStorage.setItem(
      'user',
      JSON.stringify(updatedUser)
    );

    toast.success(
      'Profile Updated 🚀'
    );

    navigate('/profile');
  };

  /* ICONS */
  const defaultIcons = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript:
      <SiJavascript />,
    React: <FaReact />,
    'Node.js':
      <FaNodeJs />,
    GitHub: <FaGithub />,
    Tailwind:
      <SiTailwindcss />,
    Express:
      <SiExpress />,
    MongoDB:
      <SiMongodb />,
    TypeScript:
      <SiTypescript />,
    'Next.js':
      <SiNextdotjs />,
  };

return (
  <div
    data-aos="fade-up"
    className="min-h-screen overflow-x-hidden bg-[#F5F6FA] p-5 md:p-8"
  >

    {/* HEADER */}
    <div
      data-aos="fade-down"
      className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
    >

      <div>

        <h1 className="text-4xl font-bold text-[#111827]">
          Edit Profile
        </h1>

        <p className="mt-2 text-lg text-gray-400">
          Manage your profile information.
        </p>
      </div>

      {/* ACTIONS */}
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="flex gap-4"
      >

        <button
          onClick={() =>
            navigate('/profile')
          }
          className="rounded-2xl border border-gray-200 bg-white px-6 py-4 font-semibold text-gray-700 shadow-sm"
        >

          Cancel
        </button>

        <button
          onClick={handleSave}
          className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#5C45FD] to-[#7B61FF] px-7 py-4 font-semibold text-white shadow-lg"
        >

          <Save size={18} />

          Save Changes
        </button>
      </div>
    </div>

    {/* GRID */}
    <div
      data-aos="fade-in"
      data-aos-delay="300"
      className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3"
    >

      {/* LEFT */}
      <div className="space-y-6">

        {/* IMAGE */}
        <div
          data-aos="zoom-in"
          className="rounded-[35px] border border-[#ECECEC] bg-white p-8 shadow-sm"
        >

          <h2 className="text-2xl font-bold text-[#111827]">
            Profile Picture
          </h2>

          <div className="mt-8 flex justify-center">

            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="relative"
            >

              <img
                src={profileImage}
                alt="profile"
                className="h-44 w-44 rounded-full border-4 border-white object-cover shadow-xl"
              />

              <label className="absolute bottom-2 right-2 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#5C45FD] text-white shadow-lg">

                ✏️

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"

                  onChange={(e) => {

                    const file =
                      e.target.files[0];

                    if (file) {

                      const reader =
                        new FileReader();

                      reader.onloadend =
                        () => {

                          setProfileImage(
                            reader.result
                          );
                        };

                      reader.readAsDataURL(
                        file
                      );
                    }
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="rounded-[35px] border border-[#ECECEC] bg-white p-8 shadow-sm"
        >

          <h2 className="text-2xl font-bold text-[#111827]">
            About Me
          </h2>

          <textarea
            rows="8"
            value={bio}
            onChange={(e) =>
              setBio(
                e.target.value
              )
            }
            className="mt-6 w-full resize-none rounded-3xl border border-gray-200 px-5 py-5 outline-none focus:border-[#5C45FD]"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="space-y-6 xl:col-span-2">

        {/* BASIC INFO */}
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="rounded-[35px] border border-[#ECECEC] bg-white p-8 shadow-sm"
        >

          <h2 className="text-2xl font-bold text-[#111827]">
            Basic Information
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

            <InputField
              label="Full Name"
              value={fullName}
              onChange={setFullName}
            />

            <InputField
              label="Headline"
              value={headline}
              onChange={setHeadline}
            />

            <InputField
              label="Location"
              value={location}
              onChange={setLocation}
            />

            <InputField
              label="Website"
              value={website}
              onChange={setWebsite}
            />

            <InputField
              label="Email"
              value={email}
              onChange={setEmail}
            />

            <InputField
              label="Phone"
              value={phone}
              onChange={setPhone}
            />
          </div>
        </div>

        {/* SKILLS */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="700"
          className="rounded-[35px] border border-[#ECECEC] bg-white p-8 shadow-sm"
        >

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <h2 className="text-2xl font-bold text-[#111827]">
              Skills
            </h2>

            {/* ADD */}
            <div className="flex gap-3">

              <input
                type="text"
                value={newSkill}
                onChange={(e) =>
                  setNewSkill(
                    e.target.value
                  )
                }
                placeholder="Add skill..."
                className="rounded-2xl border border-gray-200 px-5 py-3 outline-none focus:border-[#5C45FD]"
              />

              <button
                onClick={handleAddSkill}
                className="rounded-2xl bg-[#5C45FD] px-6 py-3 font-semibold text-white"
              >

                Add
              </button>
            </div>
          </div>

          {/* GRID */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

            {skills.map(
              (
                skill,
                index
              ) => (

                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-[#FAFAFF] px-5 py-4"
                >

                  <div className="flex min-w-0 items-center gap-4">

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm ${skill.color}`}
                    >

                      {
                        defaultIcons[
                          skill.name
                        ] || '🚀'
                      }
                    </div>

                    <span className="truncate font-semibold text-gray-700">

                      {skill.name}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      handleRemoveSkill(
                        skill.name
                      )
                    }
                    className="text-gray-400 transition hover:text-red-500"
                  >

                    <X size={18} />
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* SOCIAL */}
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className="rounded-[35px] border border-[#ECECEC] bg-white p-8 shadow-sm"
        >

          <h2 className="text-2xl font-bold text-[#111827]">
            Social Links
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

            <InputField
              label="GitHub"
              value={github}
              onChange={setGithub}
            />

            <InputField
              label="LinkedIn"
              value={linkedin}
              onChange={setLinkedin}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

/* INPUT */
function InputField({
  label,
  value,
  onChange,
}) {

  return (
    <div>

      <label className="mb-3 block font-semibold text-gray-700">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#5C45FD]"
      />
    </div>
  );
} 