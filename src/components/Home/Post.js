import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="mb-4 rounded-lg border-2 border-secondary bg-primary p-5 text-white">
      <p className="text-end font-semibold">{post.type.toUpperCase()}</p>
      <h2 className="font-koulen text-3xl tracking-wide">{post.title}</h2>
      <p className="font-semibold">{post.date}</p>

      <p className="mt-3 font-medium">
        {post.body.length <= 150
          ? post.body
          : `${post.body.slice(0, 150)}.....`}
      </p>

      <Link to={`${post.id}`}>
        <button className="mt-5 rounded-lg bg-secondary p-2.5 font-bold text-primary hover:opacity-80">
          Continue Reading
        </button>
      </Link>
    </div>
  );
};

export default Post;
