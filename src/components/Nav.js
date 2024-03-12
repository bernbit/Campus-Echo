import schoolIcon from "../img/searc-icon.svg";
import openIcon from "../img/open.svg";
import closeIcon from "../img/close.svg";
import { React, useState } from "react";
import { Link } from "react-router-dom";

function Nav({ search, setSearch, resetFocus }) {
  const [icon, setIcon] = useState(openIcon);
  const [show, setShow] = useState("hidden");

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
  return (
    <nav className="sticky top-0 z-30">
      <div className="relative items-center justify-center  gap-x-1 border-b-2 bg-primary text-white md:flex ">
        <div className="flex  gap-x-9 px-4 py-2 md:w-9/12 ">
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
          <div className="hidden grow items-center justify-end gap-x-8  text-lg font-semibold md:flex">
            <Link
              to="/"
              onClick={() => {
                toggleIcon();
              }}
            >
              <p className="cursor-pointer  hover:rounded-md  hover:opacity-90">
                Home
              </p>
            </Link>
            <Link to="/post">
              <p className="cursor-pointer  hover:rounded-md  hover:opacity-90">
                Post
              </p>
            </Link>
            <Link to="/about">
              <p className="cursor-pointer  hover:rounded-md  hover:opacity-90">
                About
              </p>
            </Link>
          </div>
        </div>

        {/* Nav Options */}
        <div className={`${show} md:hidden`}>
          <div className="absolute top-full flex w-full flex-col items-center justify-center gap-y-6 bg-secondary p-32 text-center text-xl font-semibold">
            <Link
              to="/"
              onClick={toggleIcon}
              className="w-full  rounded-md bg-primary p-2"
            >
              <p>Home</p>
            </Link>
            <Link
              to="/post"
              onClick={toggleIcon}
              className="w-full  rounded-md bg-primary p-2"
            >
              <p>Post</p>
            </Link>
            <Link
              to="/about"
              onClick={toggleIcon}
              className="w-full  rounded-md bg-primary p-2"
            >
              <p>About</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
