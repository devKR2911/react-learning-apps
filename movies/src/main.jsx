import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./components/ErrorPage";
import Movies from "./routes/Movies";
import Login from "./routes/Login";
import MovieDetails, { loader as detailsLoader } from "./routes/MovieDetails";
import store from "./app/store";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "/:id",
        loader: detailsLoader,
        element: <MovieDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
