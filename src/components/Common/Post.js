import React, { useState } from "react";
import useGeneral from "../../context/GeneralContext";

const Post = ({ posts, enableDelete = false }) => {
  const { deletePost } = useGeneral();

  const [isExpanded, setIsExpanded] = useState(posts.map(() => false));

  const toggleExpand = (index) => {
    const isExpandedCopy = [...isExpanded];
    isExpandedCopy[index] = !isExpandedCopy[index];
    setIsExpanded(isExpandedCopy);
  };
  return (
    <>
      {posts.map((post, index) => (
        <div
          className="mb-4 flex flex-col gap-3 rounded-lg border-2 border-extra bg-primary p-5 text-white"
          key={post.id}
        >
          <div>
            <p className="text-end font-semibold">{post.type.toUpperCase()}</p>
            <h2 className="font-koulen text-3xl tracking-wide">{post.title}</h2>
            <p className="font-semibold">{post.date}</p>
          </div>

          <p className="text-justify font-medium">
            {isExpanded[index]
              ? post.body
              : post.body.length <= 300
                ? post.body
                : `${post.body.slice(0, 300)}...`}

            {post.body.length > 300 && (
              <span
                className="cursor-pointer text-secondary"
                onClick={() => toggleExpand(index)}
              >
                {isExpanded[index] ? " See Less" : " See More"}
              </span>
            )}
          </p>

          {enableDelete && (
            <button
              className="rounded-md bg-secondary p-4 font-semibold text-primary hover:cursor-pointer hover:opacity-75 md:w-1/4"
              onClick={() => deletePost(post.id)}
            >
              Delete Post
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default Post;
