import { useEffect,useReducer, createContext,useState } from "react";

export const PostListContext = createContext({
  postList: [],
  loading: false,
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
  const [loading, setLoading] = useState(false);
  
  const addInitialPost = (posts) => {
    dispatchPostList({
        type: "ADD_INITIAL_ITEM",
        payload: {
            posts,
        },
    })
  };

  const addPost = (post) => {
    dispatchPostList({
        type: "ADD_ITEM",
        payload: post,
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


  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", signal)
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider value={{ postList,loading, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};



export default PostListProvider;
