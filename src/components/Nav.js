import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import schoolIcon from "../img/searc-icon.svg";
import { MdHome, MdInfo, MdNewspaper } from "react-icons/md";

import useGeneral from "../context/GeneralContext";

function Nav() {
  const {
    navRef,
    handleNavClick,
    search,
    setSearch,
    resetFocus,
    showNav,
    setShowNav,
  } = useGeneral();

  const [activeNav, setActiveNav] = useState(0);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const navOptions = [
    { path: "/", label: "Home", icon: MdHome },
    { path: "/news", label: "News", icon: MdNewspaper },
    { path: "/about", label: "About", icon: MdInfo },
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

          {/* Hamburger Menu */}
          {/* <input
            type="checkbox"
            id="hamburger"
            checked={showNav}
            onChange={handleShowNav}
          />
          <label for="hamburger" className="toggle md:hidden ">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label> */}

          {/* Larger Screen Nav Option */}
          {/* <div className="hidden grow items-center justify-end gap-x-8 text-lg font-semibold md:flex">
            {navOptions.map((navOption, index) => (
              <NavLink
                key={index}
                to={navOption.path}
                onClick={() => {
                  handleNavClick();
                  setShowNav(false);
                  setActiveNav(index);
                  resetFocus();
                }}
                className={`cursor-pointer ${
                  activeNav === index ? "text-white" : "text-secondary"
                } hover:rounded-md hover:text-white hover:opacity-90`}
              >
                <p>{navOption.label}</p>
              </NavLink>
            ))}
          </div> */}
        </div>

        {/* Mobile Nav Options */}
        {/* <div className="md:hidden">
          <div
            className={`absolute  top-full flex  h-screen w-7/12 flex-col items-center  bg-primary  pt-10  font-semibold transition-all duration-500 ${
              showNav ? "-left-0" : "-left-full"
            }`}
          >
            <p className="w-full px-3 py-4 text-left text-sm text-secondary">
              General
            </p>
            <div className="flex w-full grow flex-col gap-y-5">
              {navOptions.map((navOption, index) => (
                <NavLink
                  key={index}
                  to={navOption.path}
                  onClick={() => {
                    handleNavClick();
                    setShowNav(false);
                    setActiveNav(index);
                    resetFocus();
                  }}
                  className={`flex w-full items-center  gap-3 px-3 py-2   text-white hover:bg-secondary  ${
                    activeNav === index ? "bg-secondary" : ""
                  }`}
                >
                  <navOption.icon className="text-2xl" />
                  <p className="text-lg font-medium">{navOption.label}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Nav;
