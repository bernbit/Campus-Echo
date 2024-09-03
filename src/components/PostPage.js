import React from "react";
import { useParams, Link } from "react-router-dom";
import LostPage from "./LostPage";

import backIcon from "../img/backB.svg";
import useGeneral from "../context/GeneralContext";

const PostPage = () => {
  const { posts, deletePost } = useGeneral();

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  //Split Date and Time
  const dateSplit = post ? post.date.split(" - ") : "";
  const finalDate = dateSplit[0];
  const finalTime = dateSplit[1];

  return (
    <div className="h-screen grow flex-col items-center  justify-start px-4 py-2 md:flex">
      {post && (
        <main className=" flex grow flex-col justify-center gap-y-6 rounded-md  bg-primary px-6  py-10 text-white md:w-9/12">
          <Link to="/">
            <button className="flex w-fit gap-x-3">
              <img src={backIcon} className="w-5" />
              <p className="">Return</p>
            </button>
          </Link>
          <div>
            <p className="font-medium italic">{post.type.toUpperCase()}</p>
            <h2 className="mt-1 font-koulen text-3xl tracking-wide">
              {post.title}
            </h2>
            <p className="font-semibold">{finalDate}</p>
            <p className="font-semibold">{finalTime}</p>
            <p className="mt-4">{post.body}</p>
          </div>
          <button
            className="rounded-md bg-secondary p-4 font-semibold md:w-1/4"
            onClick={() => deletePost(post.id)}
          >
            Delete Post
          </button>
        </main>
      )}
      {!post && <LostPage />}
    </div>
  );
};

export default PostPage;
