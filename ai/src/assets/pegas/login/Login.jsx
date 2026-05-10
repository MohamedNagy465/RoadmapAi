import React, {
  useState,
} from 'react';

import {
  Mail,
  Lock,
  EyeOff,
  Eye,
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

/* IMAGE */
import loginImage from '../../images/ChatGPT Image 11 مايو 2026، 01_58_20 ص.png';

export default function LoginPage() {

  const navigate =
    useNavigate();

  const [email,
    setEmail] =
    useState('');

  const [password,
    setPassword] =
    useState('');

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [emailError,
    setEmailError] =
    useState('');

  const [
    passwordError,
    setPasswordError,
  ] = useState('');

  const handleLogin = (
    e
  ) => {

    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    /* Empty Fields */
    if (!email) {

      setEmailError(
        'Email is required'
      );

      return;
    }

    if (!password) {

      setPasswordError(
        'Password is required'
      );

      return;
    }

    /* Email Validation */
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(
        email
      )
    ) {

      setEmailError(
        'Please enter a valid email'
      );

      return;
    }

    /* Password Length */
    if (
      password.length < 6
    ) {

      setPasswordError(
        'Password must be at least 6 characters'
      );

      return;
    }

    /* Get User */
    const savedUser =
      JSON.parse(
        localStorage.getItem(
          'user'
        )
      );

    /* Check User */
    if (
      savedUser &&
      savedUser.email ===
        email &&
      savedUser.password ===
        password
    ) {

      localStorage.setItem(
        'isLoggedIn',
        'true'
      );

      toast.success(
        'Login successful!'
      );

      setTimeout(() => {

        navigate(
          '/roadmap'
        );
      }, 1000);

    } else {

      setPasswordError(
        'Invalid email or password'
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden p-4 md:p-8">

      <div
        data-aos="zoom-in"
        className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl md:grid-cols-2"
      >

        {/* LEFT SIDE */}
        <div
          data-aos="fade-right"
          className="relative hidden flex-col overflow-hidden bg-gradient-to-br from-[#5C45FD] via-[#4F3EEA] to-[#3727B3] p-10 text-white md:flex"
        >
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
          {/* LOGO */}
        

          {/* TEXT */}
          <div className="z-10 mt-20">

            <h1 className="text-5xl font-bold leading-tight">
              Welcome Back!
              👋
            </h1>

            <p className="mt-5 max-w-[280px] text-lg leading-8 text-indigo-100">
              Login to continue
              your learning
              journey.
            </p>
          </div>

          {/* FLOATING ICONS */}
          <div className="absolute left-10 top-[45%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xl backdrop-blur-md">

            {'</>'}
          </div>

          <div className="absolute right-10 top-[45%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xl backdrop-blur-md">

            ✨
          </div>

          <div className="absolute bottom-36 left-5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xl backdrop-blur-md">

            📚
          </div>

          {/* IMAGE */}
          <div className="relative z-10 mt-auto flex flex-1 items-end justify-center pb-5">

            <img
              src={loginImage}
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
          className="flex items-center justify-center bg-white p-8 md:p-14"
        >

          <div className="w-full max-w-sm">

            <h2 className="text-4xl font-bold text-gray-900">
              Login
            </h2>

            <p className="mt-2 text-gray-400">
              Glad to see you
              again!
            </p>

            {/* FORM */}
            <form
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-10 space-y-5"
              onSubmit={
                handleLogin
              }
            >

              {/* EMAIL */}
              <div>

                <label className="text-sm font-semibold text-gray-700">
                  Email
                </label>

                <div className="group relative mt-2">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5C45FD]"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(
                      e
                    ) =>
                      setEmail(
                        e.target
                          .value
                      )
                    }
                    className={`w-full rounded-xl border bg-white py-3 pl-12 pr-4 outline-none transition-all focus:border-[#5C45FD] ${
                      emailError
                        ? 'border-red-500'
                        : 'border-gray-200'
                    }`}
                  />
                </div>

                {emailError && (

                  <p className="mt-2 text-sm text-red-500">
                    {
                      emailError
                    }
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div>

                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="group relative mt-2">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5C45FD]"
                  />

                  <input
                    type={
                      showPassword
                        ? 'text'
                        : 'password'
                    }
                    placeholder="Enter your password"
                    value={
                      password
                    }
                    onChange={(
                      e
                    ) =>
                      setPassword(
                        e.target
                          .value
                      )
                    }
                    className={`w-full rounded-xl border bg-white py-3 pl-12 pr-12 outline-none transition-all focus:border-[#5C45FD] ${
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
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#5C45FD]"
                  >

                    {showPassword ? (

                      <EyeOff
                        size={18}
                      />
                    ) : (

                      <Eye
                        size={18}
                      />
                    )}
                  </button>
                </div>

                {passwordError && (

                  <p className="mt-2 text-sm text-red-500">
                    {
                      passwordError
                    }
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button className="w-full rounded-xl bg-[#5C45FD] py-3.5 font-bold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-[#4A38E0] active:scale-95">

                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}