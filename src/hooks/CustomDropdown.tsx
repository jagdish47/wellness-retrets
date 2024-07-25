import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
  title: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  onSelect,
  title,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
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
    <div>
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between w-40 bg-[#1B3252] rounded-md py-1 px-3 cursor-pointer "
      >
        <h2 className="text-[#FFFFFF] font-roboto mr-2">{title}</h2>
        {isOpen ? (
          <IoIosArrowUp color="#FFFFFF" />
        ) : (
          <IoIosArrowDown color="#FFFFFF" />
        )}
      </div>

      {isOpen && (
        <div className="w-40">
          {options.map((option, idx) => (
            <div key={idx} className="bg-[#1B3252]">
              <h1 className="p-1 pl-2 border border-gray-400 text-[#FFFFFF] text-sm font-mono cursor-pointer bg-[#1B3252]">
                {option.value}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
