import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Posts, { postsLoader } from "../pages/Posts";
import PostDetail, { postDetailLoader } from "../pages/PostDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "posts",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "posts/:postId",
        element: <PostDetail />,
        loader: postDetailLoader,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;