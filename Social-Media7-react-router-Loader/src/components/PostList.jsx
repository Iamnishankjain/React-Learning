import React from "react";
import ViewPost from "./ViewPost";
import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-store";
import {useLoaderData} from "react-router-dom";
import NoPostMsg from "./NoPostMsg";
const PostList = () => {
  const postList = useLoaderData();


  return (
    <>
      {postList.length === 0 && <NoPostMsg />}
      {postList.map((post) => <ViewPost key={post.id} post={post} />)}
    </>
  );
};

export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data.posts;
      });
}
export default PostList;
