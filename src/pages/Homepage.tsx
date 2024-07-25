import Header from "../components/Header";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

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
      <div className="flex">
        <Dropdown options={options} title={"Filter By Date"} />
        <Dropdown options={options} title={"Filter By Type"} />
      </div>
    </div>
  );
};

export default Homepage;
