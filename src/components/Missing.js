import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../img/pageNotFound.svg";

const Missing = () => {
  return (
    <main className="bg-pattern flex h-screen grow flex-col items-center justify-center text-white md:flex-col">
      <div className="flex flex-col items-center justify-center gap-3 rounded-md bg-primary p-10">
        <div className="border-test flex items-center justify-center text-center">
          <img src={pageNotFound} className="w-[90%]" />
        </div>

        <div className="border-test flex  flex-col items-center gap-y-2 px-20">
          <h2 className="border-test font-koulen text-4xl tracking-wide">
            Page Not Found
          </h2>
          <p className="border-test break-words">
            Oops! The page you're looking for seems to have gone on a vacation.
            Please check the URL or head back to the homepage.
          </p>
          <Link
            to="/"
            className="border-test w-full rounded-md bg-secondary p-4 text-center font-semibold"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Missing;
