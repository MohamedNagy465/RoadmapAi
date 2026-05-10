import React, {
  useState,
} from 'react';

import {
  Star,
} from 'lucide-react';

export default function ReviewsPage() {

  /* User */
  const user =
    JSON.parse(
      localStorage.getItem(
        'user'
      )
    ) || {};

  /* Reviews State */
  const [reviews,
    setReviews] =
    useState([
      {
        name:
          'Neama Mohamed',

        image:
          'https://i.pravatar.cc/100?img=5',

        review:
          'Great course! Explained everything in detail.',

        rating: 5,

        course:
          'React Developer Course',

        time: '5d',
      },

      {
        name:
          'Ahmed Tarek',

        image:
          'https://i.pravatar.cc/100?img=12',

        review:
          'Very useful for beginners. I learned a lot.',

        rating: 4,

        course:
          'JavaScript Bootcamp',

        time: '1w',
      },

      {
        name:
          'Sara Ali',

        image:
          'https://i.pravatar.cc/100?img=20',

        review:
          'Good content but a bit fast in some parts.',

        rating: 3,

        course:
          'CSS Mastery',

        time: '2w',
      },
    ]);

  /* Add Review States */
  const [reviewText,
    setReviewText] =
    useState('');

  const [rating,
    setRating] =
    useState(5);

  const [courseName,
    setCourseName] =
    useState('');

  /* Add Review */
  const handleAddReview =
    () => {

      if (
        !reviewText.trim() ||
        !courseName.trim()
      )
        return;

      const newReview = {

        name:
          user?.name ||
          'You',

        image:
          user?.profileImage ||
          'https://i.pravatar.cc/100?img=15',

        review:
          reviewText,

        rating,

        course:
          courseName ||
          'Unknown Course',

        time: 'Now',
      };

      setReviews([
        newReview,
        ...reviews,
      ]);

      setReviewText('');
      setRating(5);
      setCourseName('');
    };

  /* Stats */
  const stats = [
    {
      star: 5,
      value: '79%',
    },

    {
      star: 4,
      value: '14%',
    },

    {
      star: 3,
      value: '5%',
    },

    {
      star: 2,
      value: '1%',
    },

    {
      star: 1,
      value: '1%',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F6FA]">

      <div
        data-aos="zoom-in"
        className="min-h-screen overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl"
      >

        {/* Header */}
        <div
          data-aos="fade-down"
          className="border-b border-gray-100 p-6 md:p-8"
        >

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Course */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex items-center gap-5"
            >

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-100 text-3xl text-[#5C45FD] shadow-sm">

                ⚛️
              </div>

              <div>

                <h1 className="text-2xl font-bold text-gray-900">

                  Course Reviews
                </h1>

                <p className="mt-1 text-gray-400">

                  Share your
                  learning
                  experience ⭐
                </p>

                <div className="mt-3 flex items-center gap-3">

                  <div className="flex items-center gap-1 text-yellow-400">

                    <Star
                      size={18}
                      fill="currentColor"
                    />

                    <Star
                      size={18}
                      fill="currentColor"
                    />

                    <Star
                      size={18}
                      fill="currentColor"
                    />

                    <Star
                      size={18}
                      fill="currentColor"
                    />

                    <Star
                      size={18}
                      fill="currentColor"
                    />
                  </div>

                  <span className="font-bold text-orange-500">

                    4.6
                  </span>

                  <span className="text-gray-400">

                    (
                    {
                      reviews.length
                    }{' '}
                    reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Add Review */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="w-full space-y-4 lg:max-w-md"
            >

              {/* Course Name */}
              <input
                type="text"
                placeholder="Course name..."
                value={
                  courseName
                }
                onChange={(e) =>
                  setCourseName(
                    e.target
                      .value
                  )
                }
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5C45FD]"
              />

              {/* Review Input */}
              <textarea
                rows="4"
                placeholder="Write your review..."
                value={
                  reviewText
                }
                onChange={(e) =>
                  setReviewText(
                    e.target
                      .value
                  )
                }
                className="w-full resize-none rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5C45FD]"
              />

              {/* Rating */}
              <div className="flex items-center gap-3">

                <span className="font-semibold text-gray-700">

                  Rating:
                </span>

                <select
                  value={rating}
                  onChange={(e) =>
                    setRating(
                      Number(
                        e.target
                          .value
                      )
                    )
                  }
                  className="rounded-xl border border-gray-200 px-4 py-2 outline-none focus:border-[#5C45FD]"
                >

                  <option value={5}>
                    5 ⭐
                  </option>

                  <option value={4}>
                    4 ⭐
                  </option>

                  <option value={3}>
                    3 ⭐
                  </option>

                  <option value={2}>
                    2 ⭐
                  </option>

                  <option value={1}>
                    1 ⭐
                  </option>
                </select>

                <button
                  onClick={
                    handleAddReview
                  }
                  className="ml-auto rounded-xl bg-[#5C45FD] px-5 py-2 font-semibold text-white transition hover:bg-[#4A38E0]"
                >

                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3">

          {/* Reviews */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="border-r border-gray-100 p-6 md:p-8 xl:col-span-2"
          >

            <h2 className="text-xl font-bold text-gray-900">

              Reviews
            </h2>

            <div className="mt-8 space-y-8">

              {reviews.map(
                (
                  review,
                  index
                ) => (

                  <div
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <img
                      src={
                        review.image
                      }
                      alt={
                        review.name
                      }
                      className="h-14 w-14 rounded-2xl object-cover"
                    />

                    <div className="flex-1">

                      <div className="flex flex-wrap items-center justify-between gap-2">

                        <div>

                          <h3 className="font-bold text-gray-900">

                            {
                              review.name
                            }
                          </h3>

                          <p className="mt-1 text-sm font-medium text-[#5C45FD]">

                            {
                              review.course
                            }
                          </p>

                          <div className="mt-1 flex items-center gap-2">

                            <div className="flex items-center gap-1 text-yellow-400">

                              {[
                                ...Array(
                                  review.rating
                                ),
                              ].map(
                                (
                                  _,
                                  i
                                ) => (

                                  <Star
                                    key={
                                      i
                                    }
                                    size={
                                      15
                                    }
                                    fill="currentColor"
                                  />
                                )
                              )}
                            </div>

                            <span className="text-sm text-gray-400">

                              {
                                review.rating
                              }
                              .0
                            </span>
                          </div>
                        </div>

                        <span className="text-sm text-gray-400">

                          {
                            review.time
                          }
                        </span>
                      </div>

                      <p className="mt-3 leading-7 text-gray-500">

                        {
                          review.review
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Rating Summary */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="p-6 md:p-8"
          >

            <div className="flex flex-col items-center">

              <h2 className="text-6xl font-bold text-gray-900">

                4.6
              </h2>

              <div className="mt-3 flex items-center gap-1 text-yellow-400">

                <Star
                  size={18}
                  fill="currentColor"
                />

                <Star
                  size={18}
                  fill="currentColor"
                />

                <Star
                  size={18}
                  fill="currentColor"
                />

                <Star
                  size={18}
                  fill="currentColor"
                />

                <Star
                  size={18}
                  fill="currentColor"
                />
              </div>

              <p className="mt-3 text-gray-400">

                {
                  reviews.length
                }{' '}
                reviews
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 space-y-5">

              {stats.map(
                (
                  item,
                  index
                ) => (

                  <div
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                    key={index}
                    className="flex items-center gap-3"
                  >

                    <span className="w-5 text-sm font-semibold text-gray-700">

                      {
                        item.star
                      }
                    </span>

                    <Star
                      size={15}
                      fill="currentColor"
                      className="text-yellow-400"
                    />

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">

                      <div
                        className="h-full rounded-full bg-[#5C45FD]"
                        style={{
                          width:
                            item.value,
                        }}
                      />
                    </div>

                    <span className="w-10 text-right text-sm text-gray-500">

                      {
                        item.value
                      }
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}