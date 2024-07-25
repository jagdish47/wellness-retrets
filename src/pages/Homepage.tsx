import Header from "../components/Header";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import SearchBox from "../components/SearchBox";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Button from "../components/Button";

import { yogaData } from "../config/dummyData";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "account-settings", label: "Account settings" },
  { value: "support", label: "Support" },
  { value: "license", label: "License" },
  { value: "sign-out", label: "Sign out" },
];

const Homepage = () => {
  const { data, loading, error } = useFetch(
    "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats"
  );

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

      {/* showing the card data here */}

      <div className="grid grid-cols-3 mt-5 gap-5 mx-5">
        {yogaData.map((ele, idx) => (
          <Card ele={ele} idx={idx} />
        ))}
      </div>

      {/* Next and Previouse Button Goes Here */}

      {/* Footer of page */}
      <Footer />
    </div>
  );
};

export default Homepage;
