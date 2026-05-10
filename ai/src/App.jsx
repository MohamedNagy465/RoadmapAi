import React, {
  useEffect,
} from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './layout/Layout';

import HomePage from './assets/pegas/home/HomePage';
import LoginPage from './assets/pegas/login/Login';
import Signup from './assets/pegas/singup/Singup';

import DashboardPage from './assets/pegas/DashboardPage/DashboardPage';
import RoadmapPage from './assets/pegas/RoadmapPage/RoadmapPage';
import ChatPage from './assets/pegas/ChatPage/ChatPage';
import ComparePage from './assets/pegas/ComparePage/ComparePage';
import ReviewsPage from './assets/pegas/ReviewsPage/ReviewsPage';
import ProfilePage from './assets/pegas/ProfilePage/ProfilePage';

import EditProfilePage from './assets/components/EditProfilePage/EditProfilePage';

import ProtectedRoute from './assets/components/ProtectedRoute';

import CoursePlayerPage from './assets/pegas/CoursePlayerPage/CoursePlayerPage';

import CertificatePage from './assets/pegas/CertificatePage/CertificatePage';

function App() {

  useEffect(() => {

    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });

  }, []);

  const router =
    createBrowserRouter([
      {
        path: '/',
        element: <Layout />,

        children: [

          /* HOME */
          {
            index: true,
            element:
              <HomePage />,
          },

          /* AUTH */
          {
            path: 'login',
            element:
              <LoginPage />,
          },

          {
            path: 'signup',
            element:
              <Signup />,
          },

          /* DASHBOARD */
          {
            path:
              'dashboard',

            element: (
              <ProtectedRoute>

                <DashboardPage />

              </ProtectedRoute>
            ),
          },

          /* ROADMAP */
          {
            path:
              'roadmap',

            element: (
              <ProtectedRoute>

                <RoadmapPage />

              </ProtectedRoute>
            ),
          },

          /* CHAT */
          {
            path: 'chat',

            element: (
              <ProtectedRoute>

                <ChatPage />

              </ProtectedRoute>
            ),
          },

          /* COMPARE */
          {
            path:
              'compare',

            element: (
              <ProtectedRoute>

                <ComparePage />

              </ProtectedRoute>
            ),
          },

          /* REVIEWS */
          {
            path:
              'reviews',

            element: (
              <ProtectedRoute>

                <ReviewsPage />

              </ProtectedRoute>
            ),
          },

          /* PROFILE */
          {
            path:
              'profile',

            element: (
              <ProtectedRoute>

                <ProfilePage />

              </ProtectedRoute>
            ),
          },

          /* EDIT PROFILE */
          {
            path:
              'editProfile',

            element: (
              <ProtectedRoute>

                <EditProfilePage />

              </ProtectedRoute>
            ),
          },

          /* COURSE PLAYER */
          {
            path:
              'course-player',

            element: (
              <ProtectedRoute>

                <CoursePlayerPage />

              </ProtectedRoute>
            ),
          },

          /* CERTIFICATES */
          {
            path:
              'certificates',

            element: (
              <ProtectedRoute>

                <CertificatePage />

              </ProtectedRoute>
            ),
          },
        ],
      },
    ]);

  return (
    <RouterProvider
      router={router}
    />
  );
}

export default App;