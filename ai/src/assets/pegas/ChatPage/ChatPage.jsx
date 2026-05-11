import React, { useState } from 'react';
import axios from 'axios';
import {
  Bot,
  SendHorizonal,
  Sparkles,
  Trash2,
  ChevronRight,
  Target,
  RotateCw,
} from 'lucide-react';

export default function ChatPage() {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      text: 'Hi 👋 I’m your AI assistant. Ask me anything about programming, roadmaps or careers.',
    },
  ]);

  // دالة إرسال الرسالة المعدلة للعمل أونلاين
  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = {
      type: 'user',
      text: message,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    const currentMessage = message;
    setMessage('');
    setLoading(true);

    try {
      // بناء سجل المحادثة للـ AI
      const history = updatedMessages
        .filter((m) => m.type === 'user' || m.type === 'ai')
        .map((m) => ({
          role: m.type === 'ai' ? 'assistant' : 'user',
          content: m.text,
        }));

      // نستخدم رابط نسبي '/api/chat' ليعمل تلقائياً مع Vercel
      const response = await axios.post('/api/chat', { 
        messages: history 
      });

      const aiReply = response.data.reply;

      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          text: aiReply,
        },
      ]);
    } catch (error) {
      console.error("Connection Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          text: error?.response?.data?.error || 'Something went wrong. Please check your connection.',
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex">
      <main data-aos="fade-up" className="flex flex-1 gap-6 p-6">
        {/* CHAT SECTION */}
        <div data-aos="fade-right" className="flex-1">
          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-5xl font-bold text-[#111827]">Chat with AI</h1>
              <p className="mt-3 text-lg text-gray-400">
                Your personal AI assistant for learning and career guidance.
              </p>
            </div>
            <img
              src={user?.profileImage || 'https://i.pravatar.cc/100'}
              alt="profile"
              className="h-14 w-14 rounded-full border-4 border-white object-cover shadow"
            />
          </div>

          {/* CHAT BOX */}
          <div data-aos="zoom-in" data-aos-delay="200" className="mt-8 overflow-hidden rounded-[35px] border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <button className="flex items-center gap-3 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700">
                <Sparkles size={17} className="text-[#5C45FD]" />
                AI Model: Roadmap AI Assistant
              </button>
              <button onClick={() => setMessages([])} className="flex items-center gap-2 font-semibold text-[#5C45FD]">
                <Trash2 size={16} /> Clear Chat
              </button>
            </div>

            {/* MESSAGES AREA */}
            <div className="max-h-[600px] min-h-[400px] space-y-8 overflow-y-auto p-6">
              {messages.map((msg, index) => (
                msg.type === 'ai' ? (
                  <MessageAI key={index}>
                    <p className="leading-8 text-gray-700">{msg.text}</p>
                  </MessageAI>
                ) : (
                  <MessageUser key={index} user={user} text={msg.text} time="Now" />
                )
              ))}
              {loading && (
                <MessageAI>
                  <p className="animate-pulse text-gray-500">AI is thinking...</p>
                </MessageAI>
              )}
            </div>

            {/* INPUT AREA */}
            <div className="p-6 border-t border-gray-50">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything about programming..."
                  className="w-full rounded-[26px] border border-gray-200 bg-white py-5 pl-6 pr-20 outline-none focus:border-[#5C45FD]"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-3 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#5C45FD] text-white shadow-lg transition hover:bg-[#4A38E0]"
                >
                  <SendHorizonal size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div data-aos="fade-in" data-aos-delay="300" className="w-[340px] space-y-6">
          <Card title="AI Capabilities">
            <RightItem title="Roadmap Guidance" desc="Get personalized roadmaps." />
            <RightItem title="Concept Explanations" desc="Understand any topic." />
            <RightItem title="Career Advice" desc="Interview & career tips." />
          </Card>
        </div>
      </main>
    </div>
  );
}

/* COMPONENTS */
function MessageAI({ children }) {
  return (
    <div data-aos="fade-up" className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F3FF] text-[#5C45FD] shrink-0">
        <Bot size={24} />
      </div>
      <div className="max-w-[80%] rounded-[30px] border border-[#ECE8FF] bg-[#F8F7FF] p-5">
        {children}
      </div>
    </div>
  );
}

function MessageUser({ user, text, time }) {
  return (
    <div data-aos="fade-in" className="flex justify-end">
      <div className="flex items-end gap-3">
        <div className="max-w-[420px] rounded-[28px] rounded-br-md bg-[#EFEAFF] px-6 py-4">
          <p className="font-medium text-[#5C45FD]">{text}</p>
          <span className="mt-2 block text-right text-[10px] text-gray-400">{time}</span>
        </div>
        <img
          src={user?.profileImage || 'https://i.pravatar.cc/100'}
          alt="user"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function RightItem({ title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F3FF] text-[#5C45FD] shrink-0">
        <Target size={18} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
  );
}