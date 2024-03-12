import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../img/pageNotFound.svg";

const Missing = () => {
  return (
    <div className="grow flex-col items-center justify-start  px-4 py-2 md:flex">
      <main className=" flex grow flex-col justify-center gap-y-6 rounded-md  bg-primary px-6  py-6 text-white md:w-9/12 md:py-4">
        <div className="text-center md:px-20">
          <img src={pageNotFound} className=" m-auto max-w-xs " />
          <h2 className="font-koulen text-4xl tracking-wide">Page Not Found</h2>
          <p className="mt-2 break-words ">
            Oops! The page you're looking for seems to have gone on a vacation.
            Please check the URL or head back to the homepage.
          </p>
        </div>
        <Link to="/" className="md:px-20">
          <div className="m-auto w-full rounded-md bg-secondary p-4 text-center font-semibold ">
            Go Back Home
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Missing;
