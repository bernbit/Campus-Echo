import { React, useState } from "react";

function Options({ handleFocus, focus }) {
  const categories = ["all", "thought", "rant", "complaint"];

  return (
    <div className=" mb-3 flex w-full  justify-start gap-x-4 font-medium text-white">
      {categories.map((category, index) => (
        <button
          className={`rounded-lg p-2.5 font-semibold shadow-sm outline-none hover:cursor-pointer hover:opacity-80 ${
            focus === category ? "bg-primary" : "bg-glass text-primary"
          }`}
          onClick={() => handleFocus(category)}
          key={index}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Options;
