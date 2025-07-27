import { useContext } from "react";
import {Form,redirect} from "react-router-dom";
import { PostListContext } from "../store/post-store";

const CreatePost = () => {
  return (
    <Form method="POST" className='create_post'>
    <div className="mb-3">
      <label htmlFor="UserID" className="form-label">UserID</label>
      <input type="text" name="userId" className="form-control" id="UserID" placeholder='Enter Post UserID' />
    </div>
    <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" name="title" className="form-control" id="Title" placeholder='Enter Post Title' />
    </div>
    <div className="mb-3">
        <label htmlFor="body" className="form-label">Body</label><br />
        <textarea name="body" id="body" cols='100' rows='10'></textarea>
    </div>
    <div className="mb-3">
        <label htmlFor="Reaction" className="form-label">Reaction</label>
        <input type="number" name="reaction" className="form-control" id="Reaction"  />
    </div>
     <div className="mb-3">
        <label htmlFor="tag" className="form-label">Enter Tags</label>
        <input type="text" name="tag" className="form-control" id="tag"  placeholder='Enter tag using space'/>
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
    </Form>
  )
}

export async function onAction(data){
  const formData= await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tag=postData.tag.split(" ");
  console.log(postData);
  fetch('https://dummyjson.com/posts/add',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(postData),
    }).then(res=>res.json())
    .then(data=> {
      addPost(data);
    });
  return redirect("/");
}
export default CreatePost
