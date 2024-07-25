import React, { useState, ChangeEvent } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState<string>("");

  console.log("Query :: ", query);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className=" w-80">
      <input
        type="text"
        placeholder="Search retreats by title"
        value={query}
        onChange={handleInputChange}
        className="max-w-md w-full px-4 text-white py-1 rounded-md font-roboto bg-[#1B3252] border-gray-300 focus:outline-none "
      />
    </div>
  );
};

export default SearchBox;
