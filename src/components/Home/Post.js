import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  //Split Date and Time
  const dateSplit = post.date.split(" - ");
  const finalDate = dateSplit[0];
  const finalTime = dateSplit[1];

  return (
    <div className="bg-glass mb-4 rounded-lg border-2 border-secondary p-5 text-primary">
      <p className="text-end font-semibold">{post.type.toUpperCase()}</p>
      <h2 className="font-koulen text-3xl tracking-wide">{post.title}</h2>
      <p className="font-semibold">
        {finalDate} - {finalTime}
      </p>

      <p className="mt-3 font-medium">
        {post.body.length <= 150
          ? post.body
          : `${post.body.slice(0, 150)}.....`}
      </p>

      <Link to={`/post/${post.id}`}>
        <button className="mt-5 rounded-lg bg-primary p-2.5 font-bold text-white hover:opacity-80">
          Continue Reading
        </button>
      </Link>
    </div>
  );
};

export default Post;
