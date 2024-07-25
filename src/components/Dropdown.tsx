import React from "react";
import CustomDropdown from "../hooks/CustomDropdown";

interface Option {
  value: string;
  label: string;
}

interface CustomOptions {
  options: Option[];
  title: string;
}

const Dropdown: React.FC<CustomOptions> = ({ options, title }) => {
  const handleSelect = (option: Option) => {
    console.log("Selected option:", option);
  };

  return (
    <div className="ml-5">
      <CustomDropdown options={options} onSelect={handleSelect} title={title} />
    </div>
  );
};

export default Dropdown;
