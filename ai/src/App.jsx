import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,

      children: [

        /* Public Pages */
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: 'login',
          element: <LoginPage />,
        },

        {
          path: 'signup',
          element: <Signup />,
        },

        /* Protected Pages */
        {
          path: 'roadmap',
          element: (
            <ProtectedRoute>
              <RoadmapPage />
            </ProtectedRoute>
          ),
        },

        {
          path: 'chat',
          element: (
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          ),
        },

        {
          path: 'dashboard',
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
        },

        {
          path: 'compare',
          element: (
            <ProtectedRoute>
              <ComparePage />
            </ProtectedRoute>
          ),
        },

        {
          path: 'reviews',
          element: (
            <ProtectedRoute>
              <ReviewsPage />
            </ProtectedRoute>
          ),
        },

        {
          path: 'profile',
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },

        {
          path: 'editProfile',
          element: (
            <ProtectedRoute>
              <EditProfilePage />
            </ProtectedRoute>
          ),
        },
     {
            path: 'course-player',

            element: (
              <ProtectedRoute>
                <CoursePlayerPage />
              </ProtectedRoute>
            ),
          },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;