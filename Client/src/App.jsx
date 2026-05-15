import HomePage from "./pages/homepage/HomePage";
import { Layout } from "./pages/Layout/Layout";
import ListPage from "./pages/listpage/ListPage";
import SinglePage from "./pages/singlepage/SinglePage";
import LoginPage from "./pages/loginpage/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/loginpage",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
