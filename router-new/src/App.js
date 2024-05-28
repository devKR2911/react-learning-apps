import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import User, { loader as userLoader } from "./pages/User";
import UserDetails, { loader as userDetailsLoader } from "./pages/UserDetails";
import AppLayout from "./pages/AppLayout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
        loader: userLoader,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
        loader: userDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}>App</RouterProvider>;
}

export default App;
