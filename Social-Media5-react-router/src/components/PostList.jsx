import React from "react";
import ViewPost from "./ViewPost";
import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-store";
import NoPostMsg from "./NoPostMsg";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, loading } = useContext(PostListContext);
  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && postList.length === 0 && <NoPostMsg />}
      {!loading &&
        postList.map((post) => <ViewPost key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
