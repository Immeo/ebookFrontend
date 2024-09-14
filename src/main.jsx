import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthorsList from "./components/Authors/AuthorsList";
import BookDetalis from "./components/Books/BookDetais/BookDetalis";
import BookList from "./components/Books/BookList";
import BooksByAuthor from "./components/Books/BooksByAuthor/BooksByAuthor";
import BooksByGenre from "./components/Books/BooksByGenre/BooksByGenre";
import BooksPublishers from "./components/Books/BooksPublishers/BooksPublishers";
import GenreList from "./components/Genre/GenreList";
import PublishersList from "./components/Publishers/PublishersList";
import "./index.css";
import Layout from "./pages/Layout/Layout";

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
