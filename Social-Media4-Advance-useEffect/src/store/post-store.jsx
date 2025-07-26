import { useReducer, createContext } from "react";

export const PostListContext = createContext({
  postList: [],
  addInitialPost: ()=> {},
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === "ADD_ITEM"){
        newPostList = [
            action.payload,...currPostList];
    }else if(action.type === "DELETE_ITEM"){
        newPostList=currPostList.filter((item) => item.id != action.payload.postId);
    }else if(action.type === "ADD_INITIAL_ITEM"){
      newPostList=action.payload.posts;
    }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addInitialPost = (posts) => {
    dispatchPostList({
        type: "ADD_INITIAL_ITEM",
        payload: {
            posts,
        },
    })
  };

  const addPost = (userId,title,body,reaction,tag) => {
    dispatchPostList({
        type: "ADD_ITEM",
        payload: {
            id: Date.now(),
            userId:userId,
            title: title,
            body: body,
            reaction:reaction,
            tags:tag,
        },
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({
        type: "DELETE_ITEM",
        payload: {
            postId,
        },
    })
  };

  return (
    <PostListContext.Provider value={{ postList,addInitialPost, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};



export default PostListProvider;
