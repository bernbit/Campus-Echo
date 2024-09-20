import React, { useEffect, useState } from "react";
import useGeneral from "../context/GeneralContext";
import Post from "../components/Common/Post";
import Options from "../components/Common/Options";
import searchIcon from "../img/searc-icon.svg";
import { MdArticle } from "react-icons/md";

function Posted() {
  const { myPostSearchResult, myPostSearch, setMyPostSearch, myPosts } =
    useGeneral();

  return (
    <div className="min-h-screen grow  flex-col items-center md:flex">
      <main className="mt-10 px-4 py-2 md:w-9/12">
        <div className="mb-5 flex flex-col justify-center gap-5 rounded-md bg-primary px-5 py-5 text-colorText">
          <div className="flex items-center gap-2">
            <MdArticle className="text-2xl" />

            <div className="flex w-full">
              <p className="grow text-lg font-semibold">My Post</p>
              <p className="font-meduim grow  text-right text-lg ">
                Total Post-{" "}
                {myPosts.length > 10
                  ? `${myPosts.length}`
                  : `0${myPosts.length}`}
              </p>
            </div>
          </div>

          <form
            className="flex grow gap-x-1 overflow-hidden rounded-md bg-white p-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="w-full border border-white bg-transparent px-4 font-medium text-black outline-none"
              placeholder="Search into Your Posts"
              value={myPostSearch}
              onChange={(e) => setMyPostSearch(e.target.value)}
            />
            <img src={searchIcon} className="mr-2 w-6" />
          </form>
        </div>

        <Options post={"mypost"} />

        {myPostSearchResult.length ? (
          <Post posts={myPostSearchResult} enableDelete={true} />
        ) : (
          <div className="mb-4 rounded-lg border-2 border-secondary bg-primary p-5 text-white">
            <p className="font-semibold"> No Post Available</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Posted;
