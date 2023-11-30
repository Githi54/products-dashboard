import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <h1
        className="
            text-amber-600 text-3xl font-medium 
            underline cursor-pointer
        "
      >
        Start work
      </h1>
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
]);
