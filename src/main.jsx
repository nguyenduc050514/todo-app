import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/reset.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Users from "./pages/users/index.jsx";
import Register from "./pages/register/index.jsx";
import Books from "./pages/books.jsx";
import Error from "./pages/error.jsx";
import TodoApp from "./components/todoApp";
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
