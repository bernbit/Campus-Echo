import React from "react";
import { useParams, Link } from "react-router-dom";
import Missing from "../components/Missing";

import backIcon from "../img/backB.svg";
import quoteIcon from "../img/quote.svg";
import useGeneral from "../context/GeneralContext";

const PostPage = () => {
  const { posts, deletePost } = useGeneral();

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div className="my-10 grow flex-col items-center  justify-start px-4 py-2 md:flex">
      {post && (
        <main className="bg-glass flex grow flex-col justify-center gap-y-6  rounded-md px-6  py-10 text-primary md:w-9/12">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex w-fit gap-x-3 hover:cursor-pointer hover:opacity-75"
            >
              <img src={backIcon} className="w-5" />
              <p className="font-medium">Return</p>
            </Link>

            <p className="text-end font-medium ">{post.type.toUpperCase()}</p>
          </div>

          <div>
            <img
              src={quoteIcon}
              alt="Quote Icon"
              className="h-[70px] w-[70px]"
            />
            <h2 className="mt-1 font-koulen text-3xl tracking-wide">
              {post.title}
            </h2>
            <p className="font-semibold">{post.date}</p>
            <p className="font-semibold"></p>
            <p className="mt-4 text-justify font-medium">{post.body}</p>
          </div>
          <button
            className="rounded-md bg-primary p-4 font-semibold text-white hover:cursor-pointer hover:opacity-75 md:w-1/4"
            onClick={() => deletePost(post.id)}
          >
            Delete Post
          </button>
        </main>
      )}
      {!post && <Missing />}
    </div>
  );
};

export default PostPage;
