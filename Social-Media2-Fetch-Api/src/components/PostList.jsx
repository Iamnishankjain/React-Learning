import React from 'react'
import ViewPost from './ViewPost'
import { useContext } from 'react'
import { PostListContext } from '../store/post-store'
import NoPostMsg from './NoPostMsg'
const PostList = () => {

  const { postList,addInitialPost } = useContext(PostListContext);

  const handleGetPost = () => {
    fetch('https://dummyjson.com/posts').then((res) => res.json()).then((data)=>addInitialPost(data.posts));
  };

  return (
    <>
    {postList.length === 0 && <NoPostMsg getPost={handleGetPost}/> }
    {postList.map((post)=>(
        <ViewPost key={post.id} post={post} />
    ))}
    </>
  )
}

export default PostList
