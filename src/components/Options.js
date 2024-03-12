import { React, useState } from "react";

function Options({ handleFocus, focus }) {
  return (
    <div className=" mb-3 flex w-full  justify-between font-medium text-white md:justify-start md:gap-x-4">
      <button
        className={`rounded-lg ${
          focus === "all" ? "bg-accent" : "bg-primary"
        }  p-2.5  shadow-sm outline-none hover:cursor-pointer hover:opacity-80`}
        onClick={() => handleFocus("all")}
      >
        All
      </button>
      <button
        className={`rounded-lg ${
          focus === "thought" ? "bg-accent" : "bg-primary"
        }  p-2.5  shadow-sm outline-none hover:cursor-pointer hover:opacity-80`}
        onClick={() => handleFocus("thought")}
      >
        Thoughts
      </button>
      <button
        className={`rounded-lg ${
          focus === "rant" ? "bg-accent" : "bg-primary"
        }  p-2.5  shadow-sm outline-none hover:cursor-pointer hover:opacity-80`}
        onClick={() => handleFocus("rant")}
      >
        Rants
      </button>
      <button
        className={`rounded-lg ${
          focus === "complaint" ? "bg-accent" : "bg-primary"
        }  p-2.5  shadow-sm outline-none hover:cursor-pointer hover:opacity-80`}
        onClick={() => handleFocus("complaint")}
      >
        Complaints
      </button>
    </div>
  );
}

export default Options;
