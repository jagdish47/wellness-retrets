import React from "react";

const Banner = () => {
  return (
    <div className="p-5 hidden sm:block">
      <div className="p-5 bg-[#E0D9CF] rounded-md">
        <div className="relative overflow-hidden h-80 w-full">
          <img
            src="/assets/images/wellness-yoga-banner.jpg"
            alt="Yoga Image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-5 mb-1">
            Discover Your Inner Peace
          </h2>
          <p className="text-sm">
            Join us in a series of wellness retreats designed to help you find
            tranquility and rejuvenation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
