import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "@pages/Home";
import AboutUs from "@pages/AboutUs";
import Products from "@pages/Products";
import Categories from "@pages/Categories";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "aboutUs",
          element: <AboutUs />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "products/:prefix",
          element: <Products />,
          loader: ({ params }) => {
            if (typeof params.prefix !== "string" || 
            !/^[a-z]+$/i.test(params.prefix)) {
              throw new Response("Bad Request", {
                statusText: "Category not found",
                status: 400,
              });
            }

            return true;
          },
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "Register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
