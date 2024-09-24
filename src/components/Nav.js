import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import schoolIcon from "../img/searc-icon.svg";
import Swal from "sweetalert2";

import {
  MdHome,
  MdArticle,
  MdSettings,
  MdKeyboardArrowRight,
  MdArrowDownward,
  MdKeyboardArrowDown,
} from "react-icons/md";

import useGeneral from "../context/GeneralContext";

function Nav() {
  const {
    navRef,
    handleNavClick,
    search,
    setSearch,
    showNav,
    setShowNav,
    logout,
    setIsAuthenticated,
    resetPostType,
    currentUser,
    resetPassword,
    setMyPostSearch,
  } = useGeneral();
  const [showDesktopSetting, setShowDesktopSetting] = useState(false);
  const [showMobileSetting, setShowMobileSetting] = useState(false);
  const mobileSettingRef = useRef(null);
  const desktopSettingRef = useRef(null);
  const mobileNavRef = useRef(null);
  const hamburgerRef = useRef(null);

  const [activeNav, setActiveNav] = useState(0);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const navOptions = [
    { path: "/", label: "Home", icon: MdHome },
    { path: "/posted", label: "Posted", icon: MdArticle },
  ];

  const handleLogout = async () => {
    const swalResult = await Swal.fire({
      title: "Are you sure you want to logout",
      showDenyButton: true,
      denyButtonText: "No",
      denyButtonColor: "#3f515d",
      confirmButtonText: "Yes",
      confirmButtonColor: "#15F5BA",
      position: "center",
      background: "#0F2634",
      color: "#ffff",
      customClass: {
        container: "custom-swal-container",
        popup: `custom-modal-box swal-custom-padding-deny`,
        title: "custom-swal2-title",
      },
    });

    if (swalResult.isConfirmed) {
      logout();
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("currentUser");
    }
  };

  const handleRestPassword = async () => {
    const userEmail = `${JSON.parse(currentUser).user.email}`;
    const swalResult = await Swal.fire({
      title: "Confirm password reset?",
      input: "text",
      inputPlaceholder: `${userEmail}`,
      inputValue: `${userEmail}`,
      showDenyButton: true,
      denyButtonText: "No",
      denyButtonColor: "#3f515d",
      confirmButtonText: "Yes",
      confirmButtonColor: "#15F5BA",
      position: "center",
      background: "#0F2634",
      color: "#ffff",
      customClass: {
        container: "custom-swal-container",
        popup: `custom-modal-box swal-custom-padding-deny`,
        title: "custom-swal2-title",
      },
    });

    if (swalResult.isConfirmed) {
      resetPassword(userEmail);
      Swal.fire({
        title: "Success",
        text: "Instructions have been sent to your email",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#15F5BA",
        position: "center",
        background: "#0F2634",
        color: "#ffff",
        customClass: {
          container: "custom-swal-container",
          popup: `custom-modal-box swal-custom-padding`,
        },
      });
    }
  };

  // Mobile Setting Outside Click
  useEffect(() => {
    const settingClickOutside = (event) => {
      if (
        mobileSettingRef.current &&
        !mobileSettingRef.current.contains(event.target)
      ) {
        setShowMobileSetting(false);
      }
    };

    document.addEventListener("mousedown", settingClickOutside);
    return () => {
      document.removeEventListener("mousedown", settingClickOutside);
    };
  }, [showMobileSetting]);

  // Desktop Setting Outside Click
  useEffect(() => {
    const settingClickOutside = (event) => {
      if (
        desktopSettingRef.current &&
        !desktopSettingRef.current.contains(event.target)
      ) {
        setShowDesktopSetting(false);
      }
    };

    document.addEventListener("mousedown", settingClickOutside);
    return () => {
      document.removeEventListener("mousedown", settingClickOutside);
    };
  }, [showDesktopSetting]);

  useEffect(() => {
    const mobileNavClickOutside = (event) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        hamburgerRef.current !== event.target &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setShowNav(false);
      }
    };

    document.addEventListener("mousedown", mobileNavClickOutside);
    return () => {
      document.removeEventListener("mousedown", mobileNavClickOutside);
    };
  }, [showNav]);

  return (
    <nav ref={navRef} className="sticky top-0 z-30">
      <div className="relative items-center justify-center gap-x-1 border-b-2 bg-primary  md:flex ">
        <div className="flex gap-x-9 px-4 py-2 md:w-9/12 ">
          <form
            className="flex grow gap-x-1 overflow-hidden rounded-full bg-white p-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="w-full border border-white bg-transparent px-4 font-medium text-black outline-none"
              placeholder="Search Posts"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src={schoolIcon} className="mr-2 w-6" />
          </form>

          {/* Hamburger Menu */}
          <div ref={hamburgerRef}>
            <input
              type="checkbox"
              id="hamburger"
              checked={showNav}
              onChange={handleShowNav}
            />
            <label htmlFor="hamburger" className="toggle md:hidden ">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>

          {/* Larger Screen Nav Option */}
          <div className="relative hidden grow items-center justify-end gap-x-8 text-lg font-semibold md:flex">
            {navOptions.map((navOption, index) => (
              <NavLink
                key={index}
                to={navOption.path}
                onClick={() => {
                  handleNavClick();
                  setShowNav(false);
                  setActiveNav(index);
                  resetPostType();
                  setShowMobileSetting(false);
                  setMyPostSearch("");
                }}
                className={`cursor-pointer ${
                  activeNav === index && !showMobileSetting
                    ? "text-secondary"
                    : "text-white"
                }  hover:cursor-pointer hover:text-secondary hover:opacity-90`}
              >
                <p>{navOption.label}</p>
              </NavLink>
            ))}

            {/* Settings */}
            <div
              className={` relative flex  items-center  hover:cursor-pointer hover:text-secondary ${
                showMobileSetting ? "text-secondary" : "text-white"
              }`}
              onClick={() => {
                setShowDesktopSetting(!showDesktopSetting);
              }}
              ref={desktopSettingRef}
            >
              <div className=" ">
                <p className="">Setting</p>
              </div>

              <div className="px-1">
                {!showDesktopSetting ? (
                  <MdKeyboardArrowRight className="text-2xl" />
                ) : (
                  <MdKeyboardArrowDown className="text-2xl" />
                )}
              </div>

              <div
                className={`absolute left-0 top-full mt-2 w-fit  rounded-md bg-extra pt-2  text-white ${
                  showDesktopSetting ? "" : "hidden"
                }`}
              >
                <p
                  className="whitespace-nowrap px-4 py-3 hover:cursor-pointer hover:text-secondary hover:opacity-75"
                  onClick={handleRestPassword}
                >
                  Reset Password
                </p>
                <p
                  className="px-4 py-3 hover:cursor-pointer hover:text-secondary hover:opacity-75"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav Options */}
        <div className="md:hidden">
          <div
            className={`absolute top-full flex  h-screen w-7/12 flex-col items-center  bg-primary  font-semibold transition-all duration-500 ${
              showNav ? "-left-0" : "-left-full"
            }`}
            ref={mobileNavRef}
          >
            <p className="w-full px-3 py-4 text-left text-sm text-secondary">
              General
            </p>

            <div className="flex  w-full flex-col gap-y-5">
              {navOptions.map((navOption, index) => (
                <NavLink
                  key={index}
                  to={navOption.path}
                  onClick={() => {
                    handleNavClick();
                    setShowNav(false);
                    setActiveNav(index);
                    resetPostType();
                    setMyPostSearch("");
                  }}
                  className={`flex w-full items-center gap-3  px-3 py-2 hover:bg-secondary hover:text-primary  ${
                    activeNav === index && !showMobileSetting
                      ? "bg-secondary text-primary"
                      : "text-white"
                  }`}
                >
                  <navOption.icon className="text-2xl" />
                  <p className="text-lg font-medium">{navOption.label}</p>
                </NavLink>
              ))}
            </div>

            {/* Mobile Settings */}
            <div
              className={`relative mt-5 flex w-full  items-center px-3 py-2 hover:cursor-pointer hover:bg-secondary hover:text-primary ${
                showMobileSetting ? "bg-secondary text-primary" : "text-white"
              }`}
              onClick={() => {
                setShowMobileSetting(!showMobileSetting);
              }}
              ref={mobileSettingRef}
            >
              <div className="flex grow items-center gap-3">
                <MdSettings className="text-2xl" />
                <p className="text-lg font-medium">Setting</p>
              </div>

              {!showMobileSetting ? (
                <MdKeyboardArrowRight className="text-2xl" />
              ) : (
                <MdKeyboardArrowDown className="text-2xl" />
              )}

              <div
                className={`absolute left-0 top-full  w-full bg-extra pt-2  text-white ${
                  showMobileSetting ? "" : "hidden"
                }`}
              >
                <p
                  className="px-12 py-3 hover:cursor-pointer hover:text-secondary"
                  onClick={handleRestPassword}
                >
                  Reset Password
                </p>
                <p
                  className="px-12 py-3  hover:cursor-pointer hover:text-secondary"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
