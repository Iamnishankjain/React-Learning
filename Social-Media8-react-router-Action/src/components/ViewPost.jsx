import React from 'react'
import { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { PostListContext } from '../store/post-store';

const ViewPost = ({post}) => {

  const {deletePost} =  useContext(PostListContext);
  return (
    <div className="card post-card" style={{minwidth: "30rem"}}>
        <div className="card-body">
            <h5 className="card-title">{post.title}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
                    <MdDelete />
                </span>
            </h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map((tag)=>(
                <span className="badge text-bg-primary tag-hashtag" key={tag}>{tag}</span>
            ))}
            <div className="alert alert-success post-reaction" role="alert">
                Reaction ---- {post.reaction} !
            </div>
        </div>
    </div>
  )
}

export default ViewPost
