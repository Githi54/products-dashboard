import { createBrowserRouter } from "react-router-dom" 
import { Layout } from "@components/templates/layout" 
import { Page404 } from "@components/pages/404"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout><h2>Hello</h2></Layout>
    )
  },
  {
    path: '*',
    element: (
      <Page404 />
    ),
  }
]) 
