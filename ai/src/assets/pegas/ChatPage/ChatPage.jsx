import React, { useState } from 'react';

import {
  Bot,
  SendHorizonal,
} from 'lucide-react';

export default function ChatPage() {

  /* States */
  const [message, setMessage] =
    useState('');

  const [messages, setMessages] =
    useState([
      {
        type: 'ai',
        text: 'Hello 👋 Ask me about any programming track or technology.',
      },
    ]);

  /* Send Message */
  const handleSend = () => {

    if (!message.trim()) return;

    /* User Message */
    const userMessage = {
      type: 'user',
      text: message,
    };

    /* AI Reply */
    let aiReply =
      'I can help you choose a programming track 🚀';

    const lowerMessage =
      message.toLowerCase();

    if (
      lowerMessage.includes('web')
    ) {
      aiReply =
        'Web Development is a great choice! Start with HTML, CSS, JavaScript then React.';
    }

    else if (
      lowerMessage.includes('ai')
    ) {
      aiReply =
        'AI Engineering requires Python, Machine Learning, and Deep Learning.';
    }

    else if (
      lowerMessage.includes('mobile')
    ) {
      aiReply =
        'Mobile Development is amazing! You can learn Flutter or React Native.';
    }

    else if (
      lowerMessage.includes('cyber')
    ) {
      aiReply =
        'Cyber Security needs Networking, Linux, and Ethical Hacking skills.';
    }

    else if (
      lowerMessage.includes('data')
    ) {
      aiReply =
        'Data Science requires Python, SQL, Statistics, and Machine Learning.';
    }

    const aiMessage = {
      type: 'ai',
      text: aiReply,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      aiMessage,
    ]);

    setMessage('');
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA]">

      <div className="min-h-screen bg-white rounded-[32px] border border-gray-200 shadow-xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="border-b border-gray-100 px-6 md:px-10 py-6">

          <h1 className="text-3xl font-bold text-gray-900">
            Chat with AI
          </h1>

          <p className="mt-2 text-gray-400">
            Ask me about any career or technology and I’ll help you get started!
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8 space-y-8 bg-[#FCFCFD]">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={
                msg.type === 'user'
                  ? 'flex justify-end'
                  : 'flex items-start gap-4'
              }
            >

              {/* AI Icon */}
              {msg.type === 'ai' && (
                <div className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center text-[#5C45FD] shadow-sm shrink-0">

                  <Bot size={22} />
                </div>
              )}

              {/* Message */}
              <div
                className={
                  msg.type === 'user'
                    ? 'max-w-[430px] rounded-3xl rounded-br-md bg-[#5C45FD] px-6 py-4 text-white shadow-lg'
                    : 'max-w-[540px] rounded-3xl rounded-tl-md border border-gray-100 bg-white px-6 py-5 shadow-sm'
                }
              >

                <p className="text-sm leading-7">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 bg-white p-5 md:p-6">

          <div className="relative">

            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }

              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}

              className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFB] py-4 pl-5 pr-16 outline-none transition focus:border-[#5C45FD] focus:bg-white"
            />

            <button
              onClick={handleSend}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-[#5C45FD] flex items-center justify-center text-white shadow-lg hover:bg-[#4A38E0] transition active:scale-95"
            >

              <SendHorizonal size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}