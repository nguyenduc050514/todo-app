import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@assets/reset.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "@pages/register/index.jsx";
import Books from "@pages/books.jsx";
import Error from "@pages/error.jsx";
import TodoApp from "@components/todoApp/index.jsx";
import Users from "@pages/users/users.jsx";
const router = createBrowserRouter([
   {
      element: <App />,
      children: [
         {
            path: "/",
            element: <TodoApp />,
         },
         {
            path: "/users",
            element: <Users />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/books",
            element: <Books />,
         },
      ],
   },

   {
      path: "*",
      element: <Error />,
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
   </StrictMode>
);
