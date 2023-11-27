import React from "react";

const StarRating = ({ rating }) => {
  // Assuming rating is a number from 0 to 5
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <span key={index} className="text-yellow-500 ">
      &#9733;
    </span>
  ));

  if (halfStar) {
    stars.push(
      <span key="half" className="text-yellow-500 ">
        &#9734;
      </span>
    );
  }

  const emptyStars = Array.from(
    { length: 5 - (fullStars + (halfStar ? 1 : 0)) },
    (_, index) => (
      <span key={index} className="text-gray-300 ">
        &#9734;
      </span>
    )
  );

  return (
    <div className="flex items-center ">
      {stars}
      {emptyStars}
    </div>
  );
};

export default StarRating;
