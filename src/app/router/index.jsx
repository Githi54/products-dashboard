import { createBrowserRouter } from "react-router-dom";
import {
  Page404,
  ComparePage,
  ProductsInfoPage,
  AnalyticsPage,
  HomePage,
} from "@components/pages";
import { Routes } from "@shared/constants";

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
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
    path: Routes.COMPARE,
    element: <ComparePage />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
