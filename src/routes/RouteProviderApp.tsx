import App from "@/pages/App";
import { Detail } from "@/pages/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:launch",
    element: <Detail />,
  },
]);

export const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};
