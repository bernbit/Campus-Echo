import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import schoolIcon from "../img/searc-icon.svg";
import openIcon from "../img/open.svg";
import closeIcon from "../img/close.svg";

function Nav({ search, setSearch, resetFocus }) {
  const [icon, setIcon] = useState(openIcon);
  const [show, setShow] = useState("hidden");
  const navRef = useRef(null);

  const toggleIcon = () => {
    if (icon === openIcon) {
      setIcon(closeIcon);
      setShow("");
    } else {
      setIcon(openIcon);
      setShow("hidden");
    }
    resetFocus();
  };

  const handleLinkClick = () => {
    toggleIcon();
    if (navRef.current) {
      navRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navOptions = [
    { path: "/", label: "Home" },
    { path: "/news", label: "News" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav ref={navRef} className="sticky top-0 z-30">
      <div className="relative items-center justify-center gap-x-1 border-b-2 bg-primary  md:flex ">
        <div className="flex gap-x-9 px-4 py-2 md:w-9/12 ">
          <form
            className="flex grow gap-x-1 bg-white p-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="w-full border border-white bg-transparent font-medium text-black outline-none"
              placeholder="Search Posts"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src={schoolIcon} className="mr-2 w-6" />
          </form>

          {/* Nav Button */}
          <button className="md:hidden">
            <img src={icon} onClick={toggleIcon} className="w-5" />
          </button>

          {/* Larger Screen Nav Option */}
          <div className="hidden grow items-center justify-end gap-x-8 text-lg font-semibold md:flex">
            {navOptions.map((navOption, index) => (
              <NavLink
                key={index}
                to={navOption.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-secondary" : "text-white"
                  } cursor-pointer hover:rounded-md hover:text-secondary hover:opacity-90`
                }
              >
                <p>{navOption.label}</p>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Nav Options */}
        <div className={`${show} md:hidden`}>
          <div className="absolute top-full flex h-screen w-full flex-col items-center justify-center gap-y-6 bg-primary p-32 text-center text-xl font-semibold ">
            {navOptions.map((navOption, index) => (
              <NavLink
                key={index}
                to={navOption.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-white" : "text-primary"
                  } w-full rounded-md bg-secondary p-2`
                }
              >
                <p>{navOption.label}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
