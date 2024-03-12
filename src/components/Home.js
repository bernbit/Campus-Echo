import React from "react";
import { Link } from "react-router-dom";
import writeIcon from "../img/write.svg";

import Options from "./Options";
import Feed from "./Feed";
function Home({ posts, selectType, handleFocus, focus }) {
  return (
    <div className="flex-col  items-center justify-center md:flex">
      <main className=" mt-10 px-4 py-2 md:w-9/12 ">
        <Link to="/post">
          <div className="mb-5 flex items-center justify-between rounded-md border-2 border-accent bg-white p-4 shadow-md hover:opacity-80 md:px-5">
            <p className="font-medium text-slate-700"> Write a post</p>
            <img src={writeIcon} className=" w-5" />
          </div>
        </Link>
        <Options
          posts={posts}
          selectType={selectType}
          handleFocus={handleFocus}
          focus={focus}
        />

        {posts.length ? (
          <Feed posts={posts} />
        ) : (
          <div className=" mb-4 rounded-lg border-2 border-secondary bg-primary p-5 text-white">
            <p className="font-semibold"> No Post Available</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
