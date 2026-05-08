import React, { useState } from 'react';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from 'lucide-react';

import {
  Link,
  useNavigate,
} from 'react-router-dom';

import {
  FaGoogle,
  FaGithub,
} from 'react-icons/fa6';

import toast from 'react-hot-toast';

export default function SignupPage() {

  const navigate = useNavigate();

  /* Inputs */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');

  /* Show Password */
  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  /* Errors */
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] =
    useState('');

  const [passwordError, setPasswordError] =
    useState('');

  const [
    confirmPasswordError,
    setConfirmPasswordError,
  ] = useState('');

  /* Submit */
  const handleSignup = (e) => {
    e.preventDefault();

    if (
      nameError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      toast.error(
        'Please fix the errors first'
      );
      return;
    }

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      toast.error(
        'Please fill all fields'
      );
      return;
    }

    /* Existing User */
    const existingUser = JSON.parse(
      localStorage.getItem('user')
    );

    if (
      existingUser &&
      existingUser.email === email
    ) {
      setEmailError(
        'Email already exists'
      );
      return;
    }

    /* Save User */
    localStorage.setItem(
      'user',
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    toast.success(
      'Account created successfully!'
    );

    setTimeout(() => {
      navigate('/login');
    }, 1000);
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
              Start Your Journey Today! 🚀
            </h1>

            <p className="mt-5 text-lg text-indigo-100 max-w-[300px] leading-8">
              Create an account and unlock
              personalized learning roadmaps.
            </p>
          </div>

          {/* Image */}
          <div className="relative mt-auto flex justify-center z-10">

            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
              alt="Robot"
              className="w-full max-w-[300px] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 md:p-14 bg-white">

          <div className="w-full max-w-sm">

            <h2 className="text-4xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="mt-2 text-gray-400">
              Let’s get you started!
            </p>

            {/* Form */}
            <form
              className="mt-10 space-y-5"
              onSubmit={handleSignup}
            >

              {/* Full Name */}
              <div>

                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="relative mt-2">

                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => {

                      const value =
                        e.target.value;

                      setName(value);

                      if (!value) {
                        setNameError(
                          'Full name is required'
                        );
                      }

                      else if (
                        value.length < 3
                      ) {
                        setNameError(
                          'Name must be at least 3 characters'
                        );
                      }

                      else {
                        setNameError('');
                      }
                    }}
                    className={`w-full rounded-xl border bg-white py-3 pl-12 pr-4 outline-none transition-all focus:border-[#5C45FD] ${
                      nameError
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                  />
                </div>

                {nameError && (
                  <p className="mt-2 text-sm text-red-500">
                    {nameError}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>

                <label className="text-sm font-semibold text-gray-700">
                  Email
                </label>

                <div className="relative mt-2">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {

                      const value =
                        e.target.value;

                      setEmail(value);

                      const emailRegex =
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                      if (!value) {
                        setEmailError(
                          'Email is required'
                        );
                      }

                      else if (
                        !emailRegex.test(
                          value
                        )
                      ) {
                        setEmailError(
                          'Please enter a valid email'
                        );
                      }

                      else {
                        setEmailError('');
                      }
                    }}
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

                <div className="relative mt-2">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={
                      showPassword
                        ? 'text'
                        : 'password'
                    }
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => {

                      const value =
                        e.target.value;

                      setPassword(value);

                      const passwordRegex =
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;

                      if (!value) {
                        setPasswordError(
                          'Password is required'
                        );
                      }

                      else if (
                        value.length < 6
                      ) {
                        setPasswordError(
                          'Password must be at least 6 characters'
                        );
                      }

                      else if (
                        !passwordRegex.test(
                          value
                        )
                      ) {
                        setPasswordError(
                          'Must contain uppercase, lowercase and number'
                        );
                      }

                      else {
                        setPasswordError('');
                      }
                    }}
                    className={`w-full rounded-xl border bg-white py-3 pl-12 pr-12 outline-none transition-all focus:border-[#5C45FD] ${
                      passwordError
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                  />

                  {showPassword ? (
                    <Eye
                      size={18}
                      onClick={() =>
                        setShowPassword(
                          false
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-[#5C45FD]"
                    />
                  ) : (
                    <EyeOff
                      size={18}
                      onClick={() =>
                        setShowPassword(
                          true
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-[#5C45FD]"
                    />
                  )}
                </div>

                {passwordError && (
                  <p className="mt-2 text-sm text-red-500">
                    {passwordError}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>

                <label className="text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>

                <div className="relative mt-2">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={
                      showConfirmPassword
                        ? 'text'
                        : 'password'
                    }
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => {

                      const value =
                        e.target.value;

                      setConfirmPassword(
                        value
                      );

                      if (!value) {
                        setConfirmPasswordError(
                          'Please confirm your password'
                        );
                      }

                      else if (
                        value !==
                        password
                      ) {
                        setConfirmPasswordError(
                          'Passwords do not match'
                        );
                      }

                      else {
                        setConfirmPasswordError(
                          ''
                        );
                      }
                    }}
                    className={`w-full rounded-xl border bg-white py-3 pl-12 pr-12 outline-none transition-all focus:border-[#5C45FD] ${
                      confirmPasswordError
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                  />

                  {showConfirmPassword ? (
                    <Eye
                      size={18}
                      onClick={() =>
                        setShowConfirmPassword(
                          false
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-[#5C45FD]"
                    />
                  ) : (
                    <EyeOff
                      size={18}
                      onClick={() =>
                        setShowConfirmPassword(
                          true
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-[#5C45FD]"
                    />
                  )}
                </div>

                {confirmPasswordError && (
                  <p className="mt-2 text-sm text-red-500">
                    {
                      confirmPasswordError
                    }
                  </p>
                )}
              </div>

              {/* Button */}
              <button className="w-full rounded-xl bg-[#5C45FD] py-3.5 font-bold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-[#4A38E0] active:scale-95">
                Sign Up
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

            {/* Social */}
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

            {/* Login */}
            <p className="mt-10 text-center text-sm text-gray-500">

              Already have an account?

              <Link
                to="/login"
                className="ml-2 font-bold text-[#5C45FD] hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}