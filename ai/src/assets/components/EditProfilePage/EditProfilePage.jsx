import React, { useState } from 'react';

import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import { IoLocationSharp } from 'react-icons/io5';

import toast from 'react-hot-toast';

export default function EditProfilePage() {

  /* Get User */
  const user =
    JSON.parse(localStorage.getItem('user')) ||
    {};

  /* States */
  const [fullName, setFullName] =
    useState(user?.name || '');

  const [headline, setHeadline] =
    useState(
      user?.headline ||
        'Aspiring Full Stack Developer'
    );

  const [location, setLocation] =
    useState(
      user?.location || 'Cairo, Egypt'
    );

  const [github, setGithub] =
    useState(user?.github || '');

  const [linkedin, setLinkedin] =
    useState(user?.linkedin || '');

  const [bio, setBio] = useState(
    user?.bio ||
      'Passionate about learning programming and building modern web applications.'
  );

  const [profileImage, setProfileImage] =
    useState(
      user?.profileImage ||
        'https://i.pravatar.cc/150?img=5'
    );

  /* Save */
  const handleSave = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,

      name: fullName,
      headline,
      location,
      github,
      linkedin,
      bio,
      profileImage,
    };

    /* Save Updated User */
    localStorage.setItem(
      'user',
      JSON.stringify(updatedUser)
    );

    toast.success(
      'Profile updated successfully!'
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA]">

      <div className="bg-white rounded-[32px] border border-gray-200 shadow-xl overflow-hidden">

        {/* Header */}
        <div className="h-52 bg-gradient-to-r from-[#B6A8FF] to-[#8E7BFF]" />

        {/* Content */}
        <div className="px-6 md:px-10 pb-10">

          {/* Avatar */}
      {/* Avatar */}
<div className="flex justify-center -mt-20">

  <div className="relative">

    <img
      src={profileImage}
      alt="profile"
      className="w-40 h-40 rounded-full border-[8px] border-white object-cover shadow-lg"
    />

    {/* Upload Image */}
    <label className="absolute bottom-2 right-2 bg-[#5C45FD] text-white w-12 h-12 rounded-full cursor-pointer shadow-lg hover:bg-[#4A38E0] transition flex items-center justify-center text-xl">

      📷

      <input
        type="file"
        accept="image/*"
        className="hidden"

        onChange={(e) => {

          const file = e.target.files[0];

          if (file) {

            const reader =
              new FileReader();

            reader.onloadend = () => {

              setProfileImage(
                reader.result
              );
            };

            reader.readAsDataURL(file);
          }
        }}
      />
    </label>
  </div>
</div>

          {/* Title */}
          <div className="text-center mt-5">

            <h1 className="text-4xl font-bold text-gray-900">
              Edit Profile
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              Update your personal information
            </p>
          </div>

          {/* Form */}
          <form
            className="space-y-8 mt-10"
            onSubmit={handleSave}
          >

            {/* Full Name */}
            <div>

              <label className="text-lg font-semibold text-gray-800">
                Full Name
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) =>
                  setFullName(
                    e.target.value
                  )
                }
                className="mt-3 w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5C45FD]"
              />
            </div>

            {/* Headline */}
            <div>

              <label className="text-lg font-semibold text-gray-800">
                Headline
              </label>

              <input
                type="text"
                value={headline}
                onChange={(e) =>
                  setHeadline(
                    e.target.value
                  )
                }
                className="mt-3 w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5C45FD]"
              />
            </div>

            {/* Location */}
            <div>

              <label className="text-lg font-semibold text-gray-800">
                Location
              </label>

              <div className="relative mt-3">

                <IoLocationSharp
                  size={22}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={location}
                  onChange={(e) =>
                    setLocation(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-gray-200 pl-14 pr-5 py-4 outline-none focus:border-[#5C45FD]"
                />
              </div>
            </div>

            {/* Github */}
            <div>

              <label className="text-lg font-semibold text-gray-800">
                GitHub
              </label>

              <div className="relative mt-3">

                <FaGithub
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={github}
                  onChange={(e) =>
                    setGithub(
                      e.target.value
                    )
                  }
                  placeholder="GitHub Username"
                  className="w-full rounded-2xl border border-gray-200 pl-14 pr-5 py-4 outline-none focus:border-[#5C45FD]"
                />
              </div>
            </div>

            {/* Linkedin */}
            <div>

              <label className="text-lg font-semibold text-gray-800">
                LinkedIn
              </label>

              <div className="relative mt-3">

                <FaLinkedin
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) =>
                    setLinkedin(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-gray-200 pl-14 pr-5 py-4 outline-none focus:border-[#5C45FD]"
                />
              </div>
            </div>

            {/* Bio */}
            <div>

              <label className="text-lg font-semibold text-gray-800">
                Bio
              </label>

              <textarea
                rows="6"
                value={bio}
                onChange={(e) =>
                  setBio(e.target.value)
                }
                className="mt-3 w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none resize-none focus:border-[#5C45FD]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#5C45FD] py-4 text-lg font-bold text-white shadow-lg shadow-indigo-100 transition hover:bg-[#4A38E0]"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}