// src/Card.tsx

import React from "react";

interface Data {
  title: string;
  description: string;
  date: number; // Unix timestamp
  location: string;
  price: number;
  type: string;
  condition: string;
  image: string;
  tag: string[];
  duration: number;
  id: string;
}

interface CardProps {
  idx: number;
  ele: Data;
}

const Card: React.FC<CardProps> = ({ ele, idx }) => {
  return (
    <div key={idx} className="bg-[#E0D9CF] p-5 rounded-md flex flex-col">
      <div>
        <img
          src={ele.image}
          alt={ele.title || "Yoga Image"}
          className="w-[70%] h-56 object-cover rounded-md"
        />
      </div>
      <h1 className="font-roboto text-xl font-[500] my-2">{ele.title}</h1>
      <p className="font text-sm ">{ele.description}</p>
      <p className="font text-sm ">
        Date: {new Date(ele.date * 1000).toLocaleDateString()}
      </p>
      <p className="font text-sm ">Location: {ele.location}</p>
      <p className="font text-sm ">Price: ${ele.price}</p>
      {/* Render other properties from ele as needed */}
    </div>
  );
};

export default Card;
