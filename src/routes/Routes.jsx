import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/Books/Book/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "BookDetails/:id",
        loader: () => fetch('booksData.json'),
        Component: BookDetails
      },
      { path: "*", Component: Error },
    ],
  },
]);

export default router;
