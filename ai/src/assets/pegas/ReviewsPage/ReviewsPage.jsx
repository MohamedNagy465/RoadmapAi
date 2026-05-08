import React, { useState } from 'react';

import {
  Star,
} from 'lucide-react';

export default function ReviewsPage() {

  /* User */
  const user =
    JSON.parse(localStorage.getItem('user')) ||
    {};

  /* Reviews State */
  const [reviews, setReviews] =
    useState([
      {
        name: 'Neama Mohamed',

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
        name: 'Ahmed Tarek',

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
        name: 'Sara Ali',

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
  const [reviewText, setReviewText] =
    useState('');

  const [rating, setRating] =
    useState(5);

  const [courseName, setCourseName] =
    useState('');

  /* Add Review */
  const handleAddReview = () => {

    if (
      !reviewText.trim() ||
      !courseName.trim()
    )
      return;

    const newReview = {

      name:
        user?.name || 'You',

      image:
        user?.profileImage ||
        'https://i.pravatar.cc/100?img=15',

      review: reviewText,

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
    { star: 5, value: '79%' },
    { star: 4, value: '14%' },
    { star: 3, value: '5%' },
    { star: 2, value: '1%' },
    { star: 1, value: '1%' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA]">

      <div className="min-h-screen bg-white rounded-[32px] border border-gray-200 shadow-xl overflow-hidden">

        {/* Header */}
        <div className="p-6 md:p-8 border-b border-gray-100">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* Course */}
            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-3xl bg-indigo-100 flex items-center justify-center text-[#5C45FD] text-3xl shadow-sm">
                ⚛️
              </div>

              <div>

                <h1 className="text-2xl font-bold text-gray-900">
                  Course Reviews
                </h1>

                <p className="mt-1 text-gray-400">
                  Share your learning experience ⭐
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
                    ({reviews.length} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Add Review */}
            <div className="w-full lg:max-w-md space-y-4">

              {/* Course Name */}
              <input
                type="text"
                placeholder="Course name..."
                value={courseName}
                onChange={(e) =>
                  setCourseName(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5C45FD]"
              />

              {/* Review Input */}
              <textarea
                rows="4"
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) =>
                  setReviewText(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none resize-none focus:border-[#5C45FD]"
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
                        e.target.value
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
                  className="ml-auto px-5 py-2 rounded-xl bg-[#5C45FD] text-white font-semibold hover:bg-[#4A38E0] transition"
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
          <div className="xl:col-span-2 p-6 md:p-8 border-r border-gray-100">

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
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <img
                      src={review.image}
                      alt={
                        review.name
                      }
                      className="w-14 h-14 rounded-2xl object-cover"
                    />

                    <div className="flex-1">

                      <div className="flex items-center justify-between flex-wrap gap-2">

                        <div>

                          <h3 className="font-bold text-gray-900">
                            {
                              review.name
                            }
                          </h3>

                          <p className="text-sm text-[#5C45FD] font-medium mt-1">
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

                      <p className="mt-3 text-gray-500 leading-7">
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
          <div className="p-6 md:p-8">

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
                {reviews.length}{' '}
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

                    <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">

                      <div
                        className="h-full bg-[#5C45FD] rounded-full"
                        style={{
                          width:
                            item.value,
                        }}
                      />
                    </div>

                    <span className="text-sm text-gray-500 w-10 text-right">
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