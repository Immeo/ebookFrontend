import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthorsList from "./pages/Authors/AuthorsList";
import BookDetalis from "./pages/Books/BookDetais/BookDetalis";
import BookList from "./pages/Books/BookList";
import BooksByAuthor from "./pages/Books/BooksByAuthor/BooksByAuthor";
import BooksByGenre from "./pages/Books/BooksByGenre/BooksByGenre";
import BooksPublishers from "./pages/Books/BooksPublishers/BooksPublishers";
import GenreList from "./pages/Genre/GenreList";
import Layout from "./pages/Layout/Layout";
import PublishersList from "./pages/Publishers/PublishersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/authors",
        element: <AuthorsList />,
      },
      {
        path: "/genres",
        element: <GenreList />,
      },
      {
        path: "/publishers",
        element: <PublishersList />,
      },
      {
        path: "/books",
        element: <BookList />,
      },
      {
        path: "/book/:slug",
        element: <BookDetalis />,
      },
      {
        path: "/authors/:slug",
        element: <BooksByAuthor />,
      },
      {
        path: "/genres/:slug",
        element: <BooksByGenre />,
      },
      {
        path: "/publishers/:slug",
        element: <BooksPublishers />,
      },
      {
        path: "/favorites",
        element: <h1>Favorites</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
