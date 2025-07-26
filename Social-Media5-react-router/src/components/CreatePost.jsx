import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import { PostListContext } from '../store/post-store';

const CreatePost = ({setSelectTab}) => {

  const {addPost} = useContext(PostListContext);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();
  

  const onhandleSumbit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const title=titleElement.current.value;
    const body=bodyElement.current.value;
    const reaction=reactionElement.current.value;
    const tag=tagElement.current.value.split(" ");
    userIdElement.current.value=titleElement.current.value=bodyElement.current.value=reactionElement.current.value=tagElement.current.value="";

    fetch('https://dummyjson.com/posts/add',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          userId:userId,
          title: title,
          body: body,
          reaction:reaction,
          tags:tag,
      })
    }).then(res=>res.json())
    .then(data=> addPost(data));

    setSelectTab("Home");
  }

  return (
    <form className='create_post' onSubmit={onhandleSumbit}>
    <div className="mb-3">
      <label htmlFor="UserID" className="form-label">UserID</label>
      <input type="text" ref={userIdElement} className="form-control" id="UserID" placeholder='Enter Post UserID' />
    </div>
    <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" ref={titleElement} className="form-control" id="Title" placeholder='Enter Post Title' />
    </div>
    <div className="mb-3">
        <label htmlFor="body" className="form-label">Body</label><br />
        <textarea ref={bodyElement} name="body" id="body" cols='100' rows='10'></textarea>
    </div>
    <div className="mb-3">
        <label htmlFor="Reaction" className="form-label">Reaction</label>
        <input type="number" ref={reactionElement} className="form-control" id="Reaction"  />
    </div>
     <div className="mb-3">
        <label htmlFor="tag" className="form-label">Enter Tags</label>
        <input type="text" ref={tagElement} className="form-control" id="tag"  placeholder='Enter tag using space'/>
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}

export default CreatePost
