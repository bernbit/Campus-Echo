import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../img/pageNotFound.svg";

const Missing = () => {
  return (
    <main className="bg-pattern fixed inset-0 z-30  flex h-screen grow flex-col items-center justify-center px-5 text-white md:flex-col md:px-16">
      <div className="flex  flex-col items-center justify-center gap-3 rounded-md bg-primary p-10 md:flex-row">
        <div className=" flex basis-6/12 items-center justify-center text-center">
          <img src={pageNotFound} className="" />
        </div>

        <div className=" flex  basis-6/12 flex-col items-center gap-y-2">
          <h2 className=" whitespace-nowrap font-koulen text-4xl tracking-wide lg:text-7xl">
            Page Not Found
          </h2>
          <p className=" break-words text-center">
            Oops! The page you're looking for seems to have gone on a vacation.
            Please check the URL or head back to the homepage.
          </p>
          <Link
            to="/"
            className=" w-full rounded-md bg-secondary p-4 text-center font-semibold text-primary"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Missing;
