import React from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alice Johnson",
    rating: 5,
    comment: "Lulu did an amazing bridal makeup! Loved every detail.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    rating: 4,
    comment: "Great service and very professional. Highly recommend!",
  },
  {
    id: 3,
    name: "Emily Brown",
    rating: 5,
    comment: "Fashion shoot makeup was perfect. She’s talented!",
  },
];

const Review: React.FC = () => {
  return (
    // Add padding-top to offset the sticky navbar (usually 4rem = 16*4 px)
    <div className="min-h-screen bg-pink-100 flex flex-col items-center py-24 px-4">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Client Reviews</h1>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
            <p className="text-yellow-500 mb-2">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
