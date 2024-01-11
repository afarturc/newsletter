import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewSpecialtiesPage from "./pages/NewSpecialtiesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/specialities",
      element: <NewSpecialtiesPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
