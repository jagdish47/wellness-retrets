import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  title: string;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  title,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative ">
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between w-48 bg-[#1B3252] rounded-md py-1 px-3 cursor-pointer"
      >
        <h2 className="text-[#FFFFFF] font-roboto mr-2 ">{title}</h2>
        {isOpen ? (
          <IoIosArrowUp color="#FFFFFF" />
        ) : (
          <IoIosArrowDown color="#FFFFFF" />
        )}
      </div>

      {isOpen && (
        <div className="absolute w-48 mt-2 bg-[#1B3252] border border-gray-400 rounded-md">
          {options.map((option, idx) => (
            <div key={idx} className="bg-[#1B3252]">
              <h1
                onClick={() => handleOptionClick(option)}
                className="p-1 pl-2 text-[#FFFFFF] text-sm font-mono cursor-pointer border-b hover:bg-[#37619c]"
              >
                {option.label}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
