import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthorsList from "./pages/Authors/AuthorsList";
import BooksByAuthor from "./pages/Authors/BooksByAuthor/BooksByAuthor";
import BookList from "./pages/Books/BookList";
import BooksByGenre from "./pages/Books/BooksByGenre/BooksByGenre";
import GenreList from "./pages/Genre/GenreList";
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
        path: "/books",
        element: <BookList />,
      },
      {
        path: "/genres/:slug",
        element: <BooksByGenre />,
      },
      {
        path: "/authors/:slug",
        element: <BooksByAuthor />,
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
