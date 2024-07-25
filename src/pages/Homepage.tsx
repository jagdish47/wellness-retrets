import React, { useState } from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import SearchBox from "../components/SearchBox";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

import { yogaData } from "../config/dummyData";
import { Data } from "../Types/types";
import { Option } from "../Types/types";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options: Option[] = [
  { value: "account-settings", label: "Account settings" },
  { value: "support", label: "Support" },
  { value: "license", label: "License" },
  { value: "sign-out", label: "Sign out" },
];

const Homepage = () => {
  const [count, setCount] = useState(1);

  const { data, loading, error } = useFetch<Data[]>(
    `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${count}&limit=6`
  );

  const handlePreviousPage = () => {
    count > 1 ? setCount((prev) => prev - 1) : setCount(count);
  };

  const handleNextPage = () => {
    setCount((prev) => prev + 1);
  };

  if (data?.length === 0) {
    toast.info(
      "Currently, no more data is available. Please click the Previous button. Thank you."
    );
  }

  console.log(data);

  return (
    <div>
      <Header />
      <Banner />

      {/* Filter and Searchbar goes here */}
      <div className="flex justify-between">
        <div className="flex">
          <Dropdown options={options} title={"Filter By Date"} />
          <Dropdown options={options} title={"Filter By Type"} />
        </div>
        <div className="mr-6">
          <SearchBox />
        </div>
      </div>

      {/* For toast message */}

      <ToastContainer />
      {/* showing the card data here */}

      <div className="grid grid-cols-3 mt-5 gap-5 mx-5">
        {data?.map((ele, idx) => (
          <Card ele={ele} idx={idx} />
        ))}
      </div>

      {/* Next and Previouse Button Goes Here */}

      <div className="flex items-center justify-center mt-5">
        <Button title={"Previouse"} onClick={handlePreviousPage} />

        {!(data?.length === 0) && (
          <Button title={"Next"} onClick={handleNextPage} />
        )}
      </div>

      {/* Footer of page */}
      <Footer />
    </div>
  );
};

export default Homepage;
