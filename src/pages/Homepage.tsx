import Header from "../components/Header";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import SearchBox from "../components/SearchBox";

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
        <div className="mr-5">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
