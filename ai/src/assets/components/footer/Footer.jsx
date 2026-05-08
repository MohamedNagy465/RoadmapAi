import React from 'react';
import { Link } from 'react-router-dom';
// استخدام Fa6 لضمان الحصول على أحدث وأدق الشعارات
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaGithub, 
  FaYoutube 
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* القسم العلوي: توزيع الأعمدة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* العمود 1: الهوية والوصف */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#5C45FD] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-indigo-100">
                R
              </div>
              <span className="text-gray-900 font-bold text-xl tracking-tight">Roadmap AI</span>
            </div>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-8 max-w-[260px]">
              Your AI-powered learning companion to help you discover the best roadmaps, resources, and courses to achieve your goals.
            </p>
            
            {/* أيقونات التواصل الاجتماعي باستخدام React Icons */}
            <div className="flex gap-3">
              {[FaTwitter, FaLinkedinIn, FaGithub, FaYoutube].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-100 text-gray-400 hover:bg-[#5C45FD] hover:text-white transition-all shadow-sm">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* الأعمدة الوسطى: الروابط */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-gray-900 font-bold mb-6 text-[15px]">Product</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-medium">
                {['Roadmaps', 'All Tracks', 'Compare Tracks', 'Courses', 'Reviews', 'AI Chatbot'].map(item => (
                  <li key={item}><a href="#" className="hover:text-[#5C45FD] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-gray-900 font-bold mb-6 text-[15px]">Resources</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-medium">
                {['Blog', 'Guides', 'Tutorials', 'Career Advice', 'Help Center', 'Community'].map(item => (
                  <li key={item}><a href="#" className="hover:text-[#5C45FD] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="hidden md:block">
              <h4 className="text-gray-900 font-bold mb-6 text-[15px]">Company</h4>
              <ul className="space-y-4 text-[14px] text-gray-500 font-medium">
                {['About Us', 'How It Works', 'Our Mission', 'Contact Us', 'Careers'].map(item => (
                  <li key={item}><a href="#" className="hover:text-[#5C45FD] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* العمود 5: الاشتراك */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-900 font-bold mb-6 text-[15px]">Stay in the loop</h4>
            <p className="text-gray-500 text-[14px] mb-6 leading-relaxed">
              Subscribe to our newsletter and get the latest updates, guides and tips straight to your inbox.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-5 pr-28 text-sm outline-none focus:bg-white focus:border-[#5C45FD] focus:ring-4 focus:ring-[#5C45FD]/5 transition-all placeholder:text-gray-400"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#5C45FD] hover:bg-[#4A38E0] text-white px-5 rounded-xl text-[13px] font-bold shadow-md shadow-indigo-100 transition-all active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* القسم السفلي: الحقوق والروابط القانونية */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[13px] font-medium">
            © 2025 <span className="text-[#5C45FD] font-semibold">Roadmap AI</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 md:gap-6 text-gray-500 font-medium">
            <a href="#" className="text-[13px] hover:text-[#5C45FD] transition-colors">Privacy Policy</a>
            <span className="w-[1px] h-3 bg-gray-200 hidden md:block"></span>
            <a href="#" className="text-[13px] hover:text-[#5C45FD] transition-colors">Terms of Service</a>
            <span className="w-[1px] h-3 bg-gray-200 hidden md:block"></span>
            <a href="#" className="text-[13px] hover:text-[#5C45FD] transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}