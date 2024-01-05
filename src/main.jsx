import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";
import ErrorPage from "../ErrorPage.jsx";
// import Home from "./components/Home.jsx";

const About = lazy(() =>
  wait(2000).then(() => import("./components/About.jsx")),
);
const Contact = lazy(() =>
  wait(2000).then(() => import("./components/Contact.jsx")),
);
const Home = lazy(() => wait(2000).then(() => import("./components/Home.jsx")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
