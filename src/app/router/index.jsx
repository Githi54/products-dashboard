import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@components/templates";
import { Page404, ProductsInfoPage, AnalyticsPage } from "@components/pages";
import { Routes } from "@shared/constants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>Hi</Layout>,
  },
  {
    path: Routes.PRODUCTS_INFO,
    element: <ProductsInfoPage />,
  },
  {
    path: Routes.ANALYTICS,
    element: <AnalyticsPage />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
