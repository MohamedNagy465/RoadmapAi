import React from 'react';

import {
  MessageCircle,
  Map,
  LayoutDashboard,
  GitCompare,
  Star,
  User,
  LogOut,
  Award,
  PlaySquare,
} from 'lucide-react';

import {
  Link,
  useLocation,
} from 'react-router-dom';

function SidebarItem({
  icon,
  text,
  to,
}) {

  const location =
    useLocation();

  const active =
    location.pathname === to;

  return (
    <Link
      to={to}
      className={`group relative flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
        active
          ? 'bg-[#5C45FD] text-white shadow-lg shadow-[#5C45FD]/30'
          : 'text-gray-300 hover:bg-white/5 hover:text-white'
      }`}
    >

      {icon}

      {text}
    </Link>
  );
}

export default function Sidebar() {

  return (
    <aside
      data-aos="fade-right"
      className="fixed left-0 top-0 hidden h-screen w-[270px] flex-col overflow-hidden bg-gradient-to-b from-[#081028] to-[#0B1440] p-5 text-white md:flex"
    >

      {/* LOGO */}
      <Link
        to="/"
        data-aos="zoom-in"
        className="mb-10 flex items-center gap-3"
      >

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-bold text-[#5C45FD] shadow-lg">

          R
        </div>

        <span className="text-2xl font-extrabold tracking-wide">
          Roadmap AI
        </span>
      </Link>

      {/* MENU */}
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="flex-1 space-y-2"
      >

        <SidebarItem
          icon={
            <LayoutDashboard
              size={18}
            />
          }
          text="Dashboard"
          to="/dashboard"
        />

        <SidebarItem
          icon={
            <MessageCircle
              size={18}
            />
          }
          text="Chat with AI"
          to="/chat"
        />

        <SidebarItem
          icon={
            <Map
              size={18}
            />
          }
          text="Roadmaps"
          to="/roadmap"
        />

        <SidebarItem
          icon={
            <GitCompare
              size={18}
            />
          }
          text="Compare Tracks"
          to="/compare"
        />

        <SidebarItem
          icon={
            <PlaySquare
              size={18}
            />
          }
          text="Course Player"
          to="/course-player"
        />

        <SidebarItem
          icon={
            <Award
              size={18}
            />
          }
          text="Certificates"
          to="/certificates"
        />

        <SidebarItem
          icon={
            <Star
              size={18}
            />
          }
          text="Reviews"
          to="/reviews"
        />

        <SidebarItem
          icon={
            <User
              size={18}
            />
          }
          text="Profile"
          to="/profile"
        />
      </div>

      {/* LOGOUT */}
      <div
        data-aos="fade-up"
        className="pt-6"
      >

        <SidebarItem
          icon={
            <LogOut
              size={18}
            />
          }
          text="Logout"
          to="/login"
        />
      </div>
    </aside>
  );
}