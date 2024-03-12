import React from "react";
import { Link } from "react-router-dom";
import postNotFound from "../img/postNotFound.svg";

const LostPage = () => {
  return (
    <main className=" flex grow flex-col justify-center gap-y-6 rounded-md  bg-primary px-6  py-6 text-white md:w-9/12 md:py-4">
      <div className="text-center md:px-20">
        <img src={postNotFound} className=" m-auto max-w-xs " />
        <h2 className="font-koulen text-4xl tracking-wide">Post Not Found</h2>
        <p className="mt-2 break-words ">
          Oops! This post seems to have vanished into the digital abyss. Please
          check the link or explore other captivating content. Happy browsing!
        </p>
      </div>
      <Link to="/" className="md:px-20">
        <div className="m-auto w-full rounded-md bg-secondary p-4 text-center font-semibold ">
          Go Back Home
        </div>
      </Link>
    </main>
  );
};

export default LostPage;
