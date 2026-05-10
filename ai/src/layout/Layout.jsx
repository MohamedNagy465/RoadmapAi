import React from 'react';

import {
  Outlet,
  useLocation,
} from 'react-router-dom';

import Navber from '../assets/components/Navber/Navber';
import Footer from '../assets/components/footer/Footer';
import Sidebar from '../assets/components/sidebar/Sidebar';

export default function Layout() {

  const location =
    useLocation();

  const authPages =
    location.pathname === '/login' ||
    location.pathname === '/signup';

  const dashboardPages = [

    '/dashboard',
    '/roadmap',
    '/chat',
    '/compare',
    '/reviews',
    '/profile',
    '/editProfile',
    '/course-player',
    '/certificates',

  ].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#F5F6FA]">

      {/* Auth Pages */}
      {authPages ? (

        <Outlet />

      ) : dashboardPages ? (

        <div className="flex">

          {/* Sidebar */}
          <Sidebar />

          {/* Content */}
          <main className="ml-[260px] flex-1 p-6">

            <Outlet />

          </main>
        </div>

      ) : (

        <>
          {/* Navbar */}
          <Navber />

          {/* Website */}
          <main className="container mx-auto px-4 pt-24 min-h-[calc(100vh-200px)]">

            <Outlet />

          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}