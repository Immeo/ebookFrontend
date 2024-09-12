import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import BookList from "./pages/BookList/BookList";
import BooksByGenre from "./pages/Genre/BooksByGenre/BooksByGenre";
import GenreList from "./pages/Genre/GenreList";
import Layout from "./pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/books",
        element: <BookList />,
      },
      {
        path: "/genres",
        element: <GenreList />,
      },
      {
        path: "/genres/:slug",
        element: <BooksByGenre />,
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
