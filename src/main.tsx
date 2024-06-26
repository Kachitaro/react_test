import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NewPage, Chessboard, Register } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => import("./App.tsx"),
  },
  {
    path: "contacts",
    element: <NewPage />,
  },
  {
    path: "game",
    element: <Chessboard />,
  },
  {
    path: "form",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
