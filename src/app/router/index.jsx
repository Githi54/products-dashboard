import { createBrowserRouter } from "react-router-dom" 
import { Layout } from "@components/templates/layout" 
import { Page404 } from "@components/pages"
import { ProductInfoTable } from "@components/organisms"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ProductInfoTable />
      </Layout>
    )
  },
  {
    path: '*',
    element: (
      <Page404 />
    ),
  }
]) 
