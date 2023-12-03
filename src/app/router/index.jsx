import { createBrowserRouter } from "react-router-dom";
import { Page404, ProductsInfoPage } from "@components/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProductsInfoPage />
    ),
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
