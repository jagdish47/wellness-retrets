import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import SearchBox from "../components/SearchBox";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";
import Shimmer from "../components/Shimmer";

import { dates, location, yogaData } from "../config/dummyData";
import { Data, Option } from "../Types/types";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = () => {
  const [count, setCount] = useState(1);
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const { data, loading, error } = useFetch<Data[]>(
    `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${count}&limit=6&search=${debouncedQuery}`
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const handlePreviousPage = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (data && data.length === 0) {
      toast.info(
        "Currently, no more data is available. Please click the Previous button. Thank you."
      );
    }
  }, [data]);

  console.log("Selected Date :: ", selectedDate);
  console.log("Selected Location :: ", selectedLocation);

  return (
    <div>
      <Header />
      <Banner />

      {/* Filter and Searchbar goes here */}
      <div className="flex justify-between">
        <div className="flex">
          <Dropdown
            options={dates}
            title={"Filter By Date"}
            selectedOption={selectedDate}
            setSelectedOption={setSelectedDate}
          />

          <Dropdown
            options={location}
            title={"Filter By Location"}
            selectedOption={selectedLocation}
            setSelectedOption={setSelectedLocation}
          />
        </div>
        <div className="mr-6">
          <SearchBox query={query} setQuery={setQuery} />
        </div>
      </div>

      {/* For toast message */}
      <ToastContainer />

      {/* handling loading state */}
      <div className="flex flex-wrap mx-3">
        {loading && [...Array(6)].map((_, index) => <Shimmer key={index} />)}
      </div>

      <div className="grid grid-cols-3 mt-5 gap-5 mx-5">
        {data?.map((ele, idx) => (
          <Card ele={ele} idx={idx} key={idx} />
        ))}
      </div>

      {/* Next and Previous Button Goes Here */}
      <div className="flex items-center justify-center mt-5">
        <Button title={"Previous"} onClick={handlePreviousPage} />
        {data && data.length > 0 && (
          <Button title={"Next"} onClick={handleNextPage} />
        )}
      </div>

      {/* Footer of page */}
      <Footer />
    </div>
  );
};

export default Homepage;
