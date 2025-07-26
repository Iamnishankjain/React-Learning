import { useReducer, createContext } from "react";

export const PostListContext = createContext({
  postList: [],
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
    }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

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
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: "Going to America",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sunt dolores pariatur tenetur, impedit vero quam! Soluta amet voluptatum facere.",
        reaction: "2",
        userId: "user-9",
        tags: ["Vacation","Mumbai","Enjoying"],
    },
    {
        id: '2',
        title: "Going to Delhi",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sunt dolores pariatur tenetur, impedit vero quam! Soluta amet voluptatum facere.",
        reaction: "13",
        userId: "user-12",
        tags: ["Summer","Delhi","Enjoying"],
    }
];

export default PostListProvider;
