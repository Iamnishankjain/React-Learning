import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import CreatePost,{ onAction } from "./components/CreatePost.jsx";
import PostList, { PostLoader } from "./components/PostList.jsx";

const router=createBrowserRouter([
  {
    path: "/",element: <App />,
    children: [
    {path: "/",element: <PostList />,loader: PostLoader},
    {path: "create-post",element: <CreatePost/>, action: onAction},
  ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
