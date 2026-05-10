import React, {
  useState,
} from 'react';

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

  const user =
    JSON.parse(
      localStorage.getItem(
        'user'
      )
    ) || {};

  const [message,
    setMessage] =
    useState('');

  const [loading,
    setLoading] =
    useState(false);

  const [messages,
    setMessages] =
    useState([
      {
        type: 'ai',
        text:
          'Hi 👋 I’m your AI assistant. Ask me anything about programming, roadmaps or careers.',
      },
    ]);

  /* SEND MESSAGE */
  const handleSend =
    async () => {

      if (
        !message.trim()
      )
        return;

      const userMessage = {
        type: 'user',
        text: message,
      };

      setMessages((prev) => [
        ...prev,
        userMessage,
      ]);

      const currentMessage =
        message;

      setMessage('');

      setLoading(true);

      try {

        const response =
          await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
              model:
                'openai/gpt-3.5-turbo',

              messages: [
                {
                  role: 'system',
                  content:
                    'You are a helpful AI assistant for programming and career guidance.',
                },

                {
                  role: 'user',
                  content:
                    currentMessage,
                },
              ],
            },
            {
              headers: {
                Authorization:
                  'Bearer YOUR_API_KEY',

                'Content-Type':
                  'application/json',
              },
            }
          );

        const aiReply =
          response.data
            .choices[0]
            .message.content;

        setMessages((prev) => [
          ...prev,
          {
            type: 'ai',
            text: aiReply,
          },
        ]);

      } catch (error) {

        setMessages((prev) => [
          ...prev,
          {
            type: 'ai',
            text:
              'Something went wrong. Please try again.',
          },
        ]);
      }

      setLoading(false);
    };

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex">

      {/* MAIN */}
      <main
        data-aos="fade-up"
        className="flex flex-1 gap-6 p-6"
      >

        {/* CHAT */}
        <div
          data-aos="fade-right"
          className="flex-1"
        >

          {/* HEADER */}
          <div className="flex items-start justify-between">

            <div>

              <h1 className="text-5xl font-bold text-[#111827]">
                Chat with AI
              </h1>

              <p className="mt-3 text-lg text-gray-400">
                Your personal AI assistant for learning and career guidance.
              </p>
            </div>

            <img
              src={
                user?.profileImage ||
                'https://i.pravatar.cc/100'
              }
              alt="profile"
              className="h-14 w-14 rounded-full border-4 border-white object-cover shadow"
            />
          </div>

          {/* CHAT BOX */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-8 overflow-hidden rounded-[35px] border border-gray-200 bg-white shadow-sm"
          >

            {/* TOP */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

              <button className="flex items-center gap-3 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700">

                <Sparkles
                  size={17}
                  className="text-[#5C45FD]"
                />

                AI Model:
                Roadmap AI Assistant
              </button>

              <button
                onClick={() =>
                  setMessages([])
                }
                className="flex items-center gap-2 font-semibold text-[#5C45FD]"
              >

                <Trash2 size={16} />

                Clear Chat
              </button>
            </div>

            {/* MESSAGES */}
            <div className="max-h-[900px] space-y-8 overflow-y-auto p-6">

              {messages.map(
                (
                  msg,
                  index
                ) => (

                  msg.type ===
                  'ai' ? (

                    <MessageAI
                      key={
                        index
                      }
                    >

                      <p className="leading-8 text-gray-700">
                        {
                          msg.text
                        }
                      </p>

                    </MessageAI>

                  ) : (

                    <MessageUser
                      key={
                        index
                      }
                      user={user}
                      text={
                        msg.text
                      }
                      time="Now"
                    />
                  )
                )
              )}

              {/* LOADING */}
              {loading && (

                <MessageAI>

                  <p className="animate-pulse text-gray-500">
                    AI is
                    typing...
                  </p>

                </MessageAI>
              )}
            </div>

            {/* SUGGESTED */}
            <div className="flex flex-wrap gap-3 px-6">

              {[
                'Best projects to build as a beginner',
                'How to improve problem solving?',
                'System Design basics',
              ].map(
                (
                  item,
                  index
                ) => (
                  <button
                    key={index}
                    onClick={() =>
                      setMessage(
                        item
                      )
                    }
                    className="rounded-full bg-[#F5F3FF] px-5 py-3 text-sm font-medium text-[#5C45FD]"
                  >

                    {item}
                  </button>
                )
              )}

              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F3FF] text-[#5C45FD]">

                <RotateCw
                  size={18}
                />
              </button>
            </div>

            {/* INPUT */}
            <div className="p-6">

              <div className="relative">

                <input
                  type="text"
                  value={message}
                  onChange={(
                    e
                  ) =>
                    setMessage(
                      e.target
                        .value
                    )
                  }
                  onKeyDown={(
                    e
                  ) => {

                    if (
                      e.key ===
                      'Enter'
                    ) {

                      handleSend();
                    }
                  }}
                  placeholder="Ask anything about programming..."
                  className="w-full rounded-[26px] border border-gray-200 bg-white py-5 pl-6 pr-20 outline-none focus:border-[#5C45FD]"
                />

                <button
                  onClick={
                    handleSend
                  }
                  className="absolute right-3 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#5C45FD] text-white shadow-lg transition hover:bg-[#4A38E0]"
                >

                  <SendHorizonal
                    size={20}
                  />
                </button>
              </div>

              <p className="mt-4 text-center text-sm text-gray-400">

                Roadmap AI can
                make mistakes.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div
          data-aos="fade-in"
          data-aos-delay="300"
          className="w-[340px] space-y-6"
        >

          {/* CAPABILITIES */}
          <Card title="AI Capabilities">

            <RightItem
              title="Roadmap Guidance"
              desc="Get personalized roadmaps."
            />

            <RightItem
              title="Concept Explanations"
              desc="Understand any topic."
            />

            <RightItem
              title="Resource Recommendations"
              desc="Find learning materials."
            />

            <RightItem
              title="Career Advice"
              desc="Interview & career tips."
            />
          </Card>

          {/* PROMPTS */}
          <Card title="Suggested Prompts">

            {[
              'Explain React hooks',
              'Best backend technologies?',
              'Roadmap for DevOps',
            ].map(
              (
                item,
                index
              ) => (
                <button
                  key={index}
                  onClick={() =>
                    setMessage(
                      item
                    )
                  }
                  className="flex w-full items-center justify-between rounded-2xl border border-gray-100 px-4 py-4 transition hover:bg-gray-50"
                >

                  <span className="text-sm font-medium text-gray-700">

                    {item}
                  </span>

                  <ChevronRight
                    size={16}
                    className="text-gray-400"
                  />
                </button>
              )
            )}
          </Card>
        </div>
      </main>
    </div>
  );
}

/* AI MESSAGE */
function MessageAI({
  children,
}) {

  return (
    <div
      data-aos="fade-up"
      className="flex items-start gap-4"
    >

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F3FF] text-[#5C45FD]">

        <Bot size={28} />
      </div>

      <div className="max-w-[620px] rounded-[30px] border border-[#ECE8FF] bg-[#F8F7FF] p-6">

        {children}
      </div>
    </div>
  );
}

/* USER MESSAGE */
function MessageUser({
  user,
  text,
  time,
}) {

  return (
    <div
      data-aos="fade-in"
      className="flex justify-end"
    >

      <div className="flex items-end gap-3">

        <div className="max-w-[420px] rounded-[28px] rounded-br-md bg-[#EFEAFF] px-6 py-5">

          <p className="font-medium leading-7 text-[#5C45FD]">

            {text}
          </p>

          <span className="mt-3 block text-right text-xs text-gray-400">

            {time}
          </span>
        </div>

        <img
          src={
            user?.profileImage ||
            'https://i.pravatar.cc/100'
          }
          alt="user"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

/* CARD */
function Card({
  title,
  children,
}) {

  return (
    <div
      data-aos="fade-up"
      className="rounded-[30px] border border-gray-200 bg-white p-6"
    >

      <h2 className="text-xl font-bold text-gray-900">

        {title}
      </h2>

      <div className="mt-6 space-y-4">

        {children}
      </div>
    </div>
  );
}

/* RIGHT ITEM */
function RightItem({
  title,
  desc,
}) {

  return (
    <div className="flex gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5F3FF] text-[#5C45FD]">

        <Target size={18} />
      </div>

      <div>

        <h3 className="font-semibold text-gray-900">

          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-400">

          {desc}
        </p>
      </div>
    </div>
  );
}