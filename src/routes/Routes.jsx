import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/Books/Book/BookDetails/BookDetails";
import ReadWishList from "../pages/ReadWishList/ReadWishList";
import PageToRead from "../pages/PageToRead/PageToRead";

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
        loader: () => fetch('/booksData.json'),
        Component: BookDetails
      },
      {
        path: "listed-Books",
        loader: () => fetch('/booksData.json'),
        Component:ReadWishList
      },
      {
        path:"pages-to-read",
        loader: () => fetch('/booksData.json'),
        Component:PageToRead
      },
      { path: "*", Component: Error },
    ],
  },
]);

export default router;
