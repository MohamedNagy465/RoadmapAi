import React from 'react';
import {
  Home,
  MessageCircle,
  Map,
  LayoutDashboard,
  GitCompare,
  Star,
  User,
  Settings,
  LogOut,
} from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

function SidebarItem({ icon, text, to }) {

  const location = useLocation();

  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
        active
          ? 'bg-[#5C45FD] text-white shadow-lg'
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
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[260px] bg-gradient-to-b from-[#081028] to-[#0B1440] text-white flex-col p-5">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#5C45FD] font-bold text-xl">
          R
        </div>

        <span className="font-bold text-lg">
          Roadmap AI
        </span>
      </Link>

      {/* Menu */}
      <div className="space-y-2">

       
<SidebarItem
          icon={<LayoutDashboard size={18} />}
          text="Dashboard"
          to="/dashboard"
        />
        <SidebarItem
          icon={<MessageCircle size={18} />}
          text="Chat with AI"
          to="/chat"
        />

        <SidebarItem
          icon={<Map size={18} />}
          text="Roadmaps"
          to="/roadmap"
        />

        

        <SidebarItem
          icon={<GitCompare size={18} />}
          text="Compare Tracks"
          to="/compare"
        />
        <SidebarItem
          icon={<GitCompare size={18} />}
          text="Course Player"
          to="/course-player"
        />

        <SidebarItem
          icon={<Star size={18} />}
          text="Reviews"
          to="/reviews"
        />

        <SidebarItem
          icon={<User size={18} />}
          text="Profile"
          to="/profile"
        />

        <SidebarItem
          icon={<Settings size={18} />}
          text="Settings"
          to="/settings"
        />
      </div>

      {/* Logout */}
      <div className="mt-auto">

        <SidebarItem
          icon={<LogOut size={18} />}
          text="Logout"
          to="/login"
        />

      </div>
    </aside>
  );
}