import { React, useState } from "react";
import useGeneral from "../../context/GeneralContext";

function Options({ post }) {
  const { handlePostType, postType } = useGeneral();
  const categories = ["all", "thought", "rant", "complaint"];

  return (
    <div className=" mb-3 flex w-full  justify-start gap-x-4 font-medium text-white">
      {categories.map((category, index) => (
        <button
          className={`rounded-lg p-2.5 font-semibold shadow-sm outline-none hover:cursor-pointer hover:opacity-80 ${
            postType === category
              ? "bg-extra opacity-90"
              : "bg-primary text-white "
          }`}
          onClick={() => handlePostType(category, post)}
          key={index}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Options;
