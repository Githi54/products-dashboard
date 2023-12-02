import { createBrowserRouter } from "react-router-dom" 
import { Layout } from "@components/templates/layout" 

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout><h2>Hello</h2></Layout>
    )
  },
  {
    path: '/about',
    element: (
      <h1
        className="
            text-amber-600 text-3xl font-medium 
            underline cursor-pointer
        "
      >
        about
      </h1>
    ),
  }
]) 
