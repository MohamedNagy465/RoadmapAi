import React, { useState } from 'react';
import { Mail, Lock, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa6';

import toast from 'react-hot-toast';

export default function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    /* Empty Fields */
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    /* Email Validation */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    /* Password Length */
    if (password.length < 6) {
      setPasswordError(
        'Password must be at least 6 characters'
      );
      return;
    }

    /* Get User */
    const savedUser = JSON.parse(
      localStorage.getItem('user')
    );

    /* Check User */
    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {

      localStorage.setItem('isLoggedIn', 'true');

      toast.success('Login successful!');

      setTimeout(() => {
        navigate('/roadmap');
      }, 1000);

    } else {

      setPasswordError(
        'Invalid email or password'
      );

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">

      <div className="w-full max-w-5xl bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-xl grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex relative overflow-hidden bg-gradient-to-br from-[#5C45FD] via-[#4F3EEA] to-[#3727B3] p-10 text-white flex-col">

          {/* Logo */}
          <div className="flex items-center gap-3 z-10">

            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#5C45FD] font-bold text-xl shadow-lg">
              R
            </div>

            <span className="text-xl font-bold tracking-wide">
              Roadmap AI
            </span>
          </div>

          {/* Text */}
          <div className="mt-20 z-10">

            <h1 className="text-5xl font-bold leading-tight">
              Welcome Back! 👋
            </h1>

            <p className="mt-5 text-lg text-indigo-100 max-w-[280px] leading-8">
              Login to continue your learning journey.
            </p>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-[38%] left-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-xl">
            {"</>"}
          </div>

          <div className="absolute top-[45%] right-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-xl">
            ✨
          </div>

          <div className="absolute bottom-36 left-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-xl">
            📚
          </div>

          {/* Illustration */}
          <div className="relative mt-auto flex justify-center z-10">

            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/female-character-working-on-laptop-illustration-download-in-svg-png-gif-file-formats--person-work-freelancer-employee-office-pack-business-illustrations-4547285.png"
              alt="Illustration"
              className="w-full max-w-[320px] drop-shadow-2xl"
            />
          </div>

          {/* Blur Shapes */}
          <div className="absolute -bottom-20 -left-10 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -top-20 -right-20 w-[250px] h-[250px] bg-indigo-300/10 rounded-full blur-3xl" />
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 md:p-14 bg-white">

          <div className="w-full max-w-sm">

            <h2 className="text-4xl font-bold text-gray-900">
              Login
            </h2>

            <p className="mt-2 text-gray-400">
              Glad to see you again!
            </p>

            {/* Form */}
            <form
              className="mt-10 space-y-5"
              onSubmit={handleLogin}
            >

              {/* Email */}
              <div>

                <label className="text-sm font-semibold text-gray-700">
                  Email
                </label>

                <div className="relative mt-2 group">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5C45FD]"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-xl border bg-white py-3 pl-12 pr-4 outline-none transition-all focus:border-[#5C45FD] ${
                      emailError
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                  />
                </div>

                {emailError && (
                  <p className="mt-2 text-sm text-red-500">
                    {emailError}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>

                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="relative mt-2 group">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5C45FD]"
                  />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full rounded-xl border bg-white py-3 pl-12 pr-12 outline-none transition-all focus:border-[#5C45FD] ${
                      passwordError
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                  />

                  <EyeOff
                    size={18}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                  />
                </div>

                {passwordError && (
                  <p className="mt-2 text-sm text-red-500">
                    {passwordError}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-[#5C45FD]"
                  />

                  <span className="text-xs text-gray-500">
                    Remember me
                  </span>
                </label>

                <button
                  type="button"
                  className="text-xs font-semibold text-[#5C45FD]"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button className="w-full rounded-xl bg-[#5C45FD] py-3.5 font-bold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-[#4A38E0] active:scale-95">
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">

              <div className="h-[1px] flex-1 bg-gray-100"></div>

              <span className="px-4 text-[10px] font-bold text-gray-400">
                — OR —
              </span>

              <div className="h-[1px] flex-1 bg-gray-100"></div>
            </div>

            {/* Social Buttons */}
            <div className="space-y-4">

              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 font-medium text-gray-700 transition hover:border-gray-300">
                <FaGoogle className="text-lg" />
                Continue with Google
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 font-medium text-gray-700 transition hover:border-gray-300">
                <FaGithub className="text-lg" />
                Continue with GitHub
              </button>
            </div>

            {/* Register */}
            <p className="mt-10 text-center text-sm text-gray-500">

              Don’t have an account?

              <Link
                to="/signup"
                className="ml-2 font-bold text-[#5C45FD] hover:underline"
              >
                Register
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}