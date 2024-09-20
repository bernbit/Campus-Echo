import React, { useState, useRef, useEffect } from "react";
import {
  MdPerson as UserIcon,
  MdManageAccounts as AdminIcon,
  MdGroup as DefaultIcon,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

function Dropdown() {
  const isUserTypeFilled = true;
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select User Type");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const resetSelectedOption = () => {
    setSelectedOption("Select User Type");
    setShowOptions(false);
  };

  return (
    <div ref={dropdownRef} className="z-30">
      {/* Menu Header */}
      <div
        className={`  relative flex min-w-80 items-center gap-3 rounded-md border  p-3 ${showOptions ? "border-primary" : "border-accentRGBA"}`}
        onClick={handleShowOptions}
      >
        {selectedOption === "Admin" ? (
          <AdminIcon className="text-2xl text-primary" />
        ) : selectedOption === "User" ? (
          <UserIcon className="text-2xl text-primary" />
        ) : (
          <DefaultIcon className="text-2xl text-primary " />
        )}
        <div
          className={`grow bg-transparent ${isUserTypeFilled ? "text-accent" : "text-gray-400"}`}
        >
          {selectedOption}
        </div>
        {showOptions ? (
          <MdKeyboardArrowUp className="smoother btn-hover text-2xl text-accent" />
        ) : (
          <MdKeyboardArrowDown className="smoother btn-hover text-2xl text-accent" />
        )}
      </div>

      {/* Menu Options */}
      <div
        className={`smoother absolute mt-2 border border-accentRGBA  ${showOptions ? "flex" : "hidden"}  flex-col gap-y-1 overflow-hidden  rounded-md  bg-extra py-2  hover:cursor-pointer`}
      >
        <p
          className="border-b border-accentRGBA px-3 py-2 text-xs hover:opacity-70"
          onClick={resetSelectedOption}
        >
          User Type
        </p>
        <div
          className={`smoother flex min-w-80 items-center gap-3 p-3 text-accent hover:bg-secondary ${selectedOption == "Admin" ? "bg-secondary" : "bg-transparent"} hover:cursor-pointer`}
          onClick={() => handleOptionSelect("Admin")}
        >
          <AdminIcon className="text-2xl text-primary" />
          <p className="grow bg-transparent">Admin</p>
        </div>

        <div
          className={`smoother flex min-w-80 items-center gap-3 p-3 text-accent hover:bg-secondary ${selectedOption == "User" ? "bg-secondary" : "bg-transparent"}`}
          onClick={() => handleOptionSelect("User")}
        >
          <UserIcon className="text-2xl text-primary" />
          <p className="grow bg-transparent">User</p>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
