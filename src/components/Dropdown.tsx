import React from "react";
import CustomDropdown from "../hooks/CustomDropdown";
import { Option } from "../Types/types";

interface DropdownProps {
  options: Option[];
  title: string;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  title,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="ml-5 w-full md:w-auto">
      <CustomDropdown
        options={options}
        title={title}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
};

export default Dropdown;
