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
  <div
    data-aos="fade-up"
    className="min-h-screen overflow-x-hidden flex items-center justify-center p-4 md:p-8"
  >

    {/* CARD */}
    <div
      data-aos="zoom-in"
      className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl md:grid-cols-2"
    >

      {/* LEFT SIDE */}
      <div
        data-aos="fade-right"
        className="relative hidden overflow-hidden bg-gradient-to-br from-[#5C45FD] via-[#4F3EEA] to-[#3727B3] p-10 text-white md:flex md:flex-col"
      >

        {/* LOGO */}
        
             <Link
                         to="/"
                         data-aos="zoom-in"
                         className="mb-10 flex items-center gap-3"
                       >
         <div className="z-10 flex items-center gap-3">
       
                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#5C45FD] shadow-lg">
       
                     R
                   </div>
       
                   <span className="text-xl font-bold tracking-wide">
                     Roadmap AI
                   </span>
                 </div>
                       </Link>

        {/* TEXT */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="z-10 mt-20"
        >

          <h1 className="text-5xl font-bold leading-tight">

            Start Your
            AI Journey 🚀
          </h1>

          <p className="mt-5 max-w-[320px] text-lg leading-8 text-indigo-100">

            Join Roadmap AI
            and build your
            future with smart
            learning paths.
          </p>
        </div>

        {/* FLOATING ICONS */}
        <div className="absolute left-10 top-[48%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xl backdrop-blur-md">

          🤖
        </div>

        <div className="absolute right-10 top-[45%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xl backdrop-blur-md">

          ✨
        </div>

        <div className="absolute bottom-36 left-6 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xl backdrop-blur-md">

          🧠
        </div>

        {/* IMAGE */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className="relative z-10 mt-auto flex flex-1 items-end justify-center pb-5"
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/8637/8637099.png"
            alt="AI Illustration"
            className="w-full max-w-[340px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* BLUR */}
        <div className="absolute -bottom-20 -left-10 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-indigo-300/10 blur-3xl" />
      </div>

      {/* RIGHT SIDE */}
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        className="flex items-center justify-center bg-white p-8 md:p-14"
      >

        <div className="w-full max-w-md">

          {/* TITLE */}
          <div>

            <h2 className="text-4xl font-bold text-[#111827]">

              Create Account
            </h2>

            <p className="mt-3 text-gray-400">

              Create your account
              and continue your
              learning journey.
            </p>
          </div>

          {/* FORM */}
     {/* FORM */}
<form
  data-aos="fade-up"
  data-aos-delay="500"
  className="mt-10 space-y-5"
  onSubmit={handleSignup}
>

  {/* NAME */}
  <div>

    <label className="mb-2 block font-medium text-gray-700">

      Full Name
    </label>

    <input
      type="text"
      value={name}
      onChange={(e) =>
        setName(
          e.target.value
        )
      }
      placeholder="Enter your name"
      className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#5C45FD]"
    />
  </div>

  {/* EMAIL */}
  <div>

    <label className="mb-2 block font-medium text-gray-700">

      Email Address
    </label>

    <input
      type="email"
      value={email}
      onChange={(e) =>
        setEmail(
          e.target.value
        )
      }
      placeholder="Enter your email"
      className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:border-[#5C45FD] ${
        emailError
          ? 'border-red-500'
          : 'border-gray-200'
      }`}
    />

    {emailError && (

      <p className="mt-2 text-sm text-red-500">
        {emailError}
      </p>
    )}
  </div>

  {/* PASSWORD */}
  <div>

    <label className="mb-2 block font-medium text-gray-700">

      Password
    </label>

    <div className="relative">

      <input
        type={
          showPassword
            ? 'text'
            : 'password'
        }
        value={password}
        onChange={(e) => {

          setPassword(
            e.target.value
          );

          if (
            e.target.value.length < 6
          ) {

            setPasswordError(
              'Password must be at least 6 characters'
            );

          } else {

            setPasswordError('');
          }
        }}
        placeholder="Enter password"
        className={`w-full rounded-2xl border px-5 py-4 pr-14 outline-none transition focus:border-[#5C45FD] ${
          passwordError
            ? 'border-red-500'
            : 'border-gray-200'
        }`}
      />

      <button
        type="button"
        onClick={() =>
          setShowPassword(
            !showPassword
          )
        }
        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
      >

        {showPassword ? (
          <EyeOff size={20} />
        ) : (
          <Eye size={20} />
        )}
      </button>
    </div>

    {passwordError && (

      <p className="mt-2 text-sm text-red-500">
        {passwordError}
      </p>
    )}
  </div>

  {/* CONFIRM PASSWORD */}
  <div>

    <label className="mb-2 block font-medium text-gray-700">

      Confirm Password
    </label>

    <div className="relative">

      <input
        type={
          showConfirmPassword
            ? 'text'
            : 'password'
        }
        value={confirmPassword}
        onChange={(e) => {

          setConfirmPassword(
            e.target.value
          );

          if (
            e.target.value !==
            password
          ) {

            setConfirmPasswordError(
              'Passwords do not match'
            );

          } else {

            setConfirmPasswordError(
              ''
            );
          }
        }}
        placeholder="Confirm password"
        className={`w-full rounded-2xl border px-5 py-4 pr-14 outline-none transition focus:border-[#5C45FD] ${
          confirmPasswordError
            ? 'border-red-500'
            : 'border-gray-200'
        }`}
      />

      <button
        type="button"
        onClick={() =>
          setShowConfirmPassword(
            !showConfirmPassword
          )
        }
        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
      >

        {showConfirmPassword ? (
          <EyeOff size={20} />
        ) : (
          <Eye size={20} />
        )}
      </button>
    </div>

    {confirmPasswordError && (

      <p className="mt-2 text-sm text-red-500">
        {confirmPasswordError}
      </p>
    )}
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="w-full rounded-2xl bg-gradient-to-r from-[#5C45FD] to-[#7B61FF] py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
  >

    Create Account
  </button>

  {/* LOGIN LINK */}
  <p className="text-center text-gray-500">

    Already have an account?{' '}

    <Link
      to="/login"
      className="font-semibold text-[#5C45FD] transition hover:underline"
    >

      Login
    </Link>
  </p>
</form>

          {/* SOCIAL */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4"
          >

            <div className="my-8 flex items-center gap-4">

              <div className="h-[1px] flex-1 bg-gray-200" />

              <span className="text-sm text-gray-400">
                OR
              </span>

              <div className="h-[1px] flex-1 bg-gray-200" />
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white py-4 font-semibold text-gray-700 transition hover:bg-gray-50">

              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt=""
                className="h-5 w-5"
              />

              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}