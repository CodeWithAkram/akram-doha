import React from "react";
import ShowPost from "./ShowPost";
import Stories from "./Stories";

const Posts = () => {
  return (
    <>
      <div className="posts">
        <Stories />

        <ShowPost />
      </div>
    </>
  );
};

export default Posts;
