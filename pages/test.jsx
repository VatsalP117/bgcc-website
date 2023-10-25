// TestimonialCard.js
import React from "react";

const TestimonialCard = ({ imageSrc, name, designation, content }) => {
  return (
    <div className="font-poppins bg-[#343434] bg-opacity-[50%] text-white p-4 rounded-lg shadow-lg max-w-md relative m-12">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden h-32 w-32">
        <img
          src="https://i.imgur.com/fvLkE4Q.png"
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center mt-24">
        <h2 className="text-lg font-bold text-color-bgcc-yellow">
          name jskfcjdsbfkjdsbfkjdbfkbdfj
        </h2>
        <p className="text-lg font-bold text-color-bgcc-yellow">designation</p>
        <p className="text-white mt-2">content</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
