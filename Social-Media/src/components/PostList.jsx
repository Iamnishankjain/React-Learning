import React from 'react'
import ViewPost from './ViewPost'
import { useContext } from 'react'
import { PostListContext } from '../store/post-store'
const PostList = () => {
    const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.map((post)=>(
        <ViewPost key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostList
