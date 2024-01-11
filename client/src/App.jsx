import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewSpecialtiesPage from "./pages/NewSpecialtiesPage";
import FeedbackPage from "./pages/FeedbackPage";

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
    {
      path: "/feedback",
      element: <FeedbackPage />,
    },
  ]);

  return (
    <main className="main-wrapper">
      <RouterProvider router={router} />
    </main>
  )
}

export default App
