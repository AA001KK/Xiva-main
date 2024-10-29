// src/StarFilter.js
import Star from "/src/assets/hotels/star.svg";
import StarRegular from "/src/assets/about/star-regular.png";

import React, { useState } from "react";

const StarFilter = ({ handleStars, defaultStar }) => {
  const [selectedStars, setSelectedStars] = useState(defaultStar || 0);

  const handleClick = (value) => {
    setSelectedStars(value);
    handleStars("stars", value);
  };

  return (
    <div className="flex space-x-1 cursor-pointer">
      {[1, 2, 3, 4, 5].map((value) => (
        <img
          key={value}
          className={`text-xl  transition-colors fa-regular fa-star  duration-300   text-yellow `}
          src={`${value <= selectedStars ? Star : StarRegular}`}
          onClick={() => handleClick(value)}
        />
      ))}
    </div>
  );
};

export default StarFilter;
