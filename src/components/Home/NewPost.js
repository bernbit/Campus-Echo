import { React, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const NewPost = ({
  category,
  setCategory,
  title,
  setTitle,
  body,
  setBody,
  handleSubmit,
  drop,
  setDrop,
  text,
  setText,
}) => {
  const selectDrop = (type) => {
    setDrop(!drop);
    setText(type);
    setCategory(type);
  };

  return (
    <div className="flex h-full w-full justify-center">
      <main className="font-meduim flex  w-full flex-col  gap-y-2 rounded-md p-5 text-white">
        <div className="text-center">
          <h2 className="  font-koulen text-3xl tracking-wide">Create Post</h2>
          <p className="italic">
            Speak your mind on Campus Echo! Share rants, thoughts, and
            complaints—your voice matters!
          </p>
        </div>

        <form className="mt-8 flex flex-col gap-y-2" onSubmit={handleSubmit}>
          <div className="relative w-full rounded-md bg-white ">
            <div
              className="mr-2 flex items-center justify-between font-semibold "
              onClick={() => selectDrop("Post Type")}
              aria-invalid
            >
              <button
                className="p-3 text-left"
                style={{ color: text === "Post Type" ? "#9CA3AF" : "black" }}
              >
                {text}
              </button>
              {drop === true ? (
                <FaChevronUp className="text-secondary" />
              ) : (
                <FaChevronDown className="text-secondary" />
              )}
            </div>
            {/* Dropdown Option */}
            <div
              className={`absolute mt-1 ${
                drop === true ? "flex" : "hidden"
              } mt-2 w-full flex-col gap-y-1 divide-y divide-gray-500 rounded-md border border-gray-500 bg-primary  font-semibold text-white`}
            >
              <button
                className="w-full  p-3 text-left  hover:bg-secondary hover:text-primary"
                onClick={() => selectDrop("Thought")}
              >
                Thought
              </button>
              <button
                className="w-full   p-3 text-left  hover:bg-secondary hover:text-primary"
                onClick={() => selectDrop("Rant")}
              >
                Rant
              </button>
              <button
                className="w-full  p-3 text-left  hover:bg-secondary hover:text-primary"
                onClick={() => selectDrop("Complaint")}
              >
                Complaint
              </button>
            </div>
          </div>

          <input
            className="rounded-md p-3 font-semibold text-black outline-none   focus:border-2 focus:border-secondary"
            type="text"
            placeholder=" Post Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="rounded-md p-4 font-semibold text-black outline-none focus:border-2 focus:border-secondary"
            name=""
            id=""
            cols="30"
            rows="6"
            required
            placeholder="Post Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button className="rounded-md bg-secondary p-4 text-center font-semibold text-primary ">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default NewPost;
