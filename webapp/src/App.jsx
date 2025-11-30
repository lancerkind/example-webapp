import "./App.css";
import SriLankaTourism from "./SriLankaTourism";
import TourPackages from "./TourPackages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SriLankaTourism />,
  },
  {
    path: "/tours",
    element: <TourPackages />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
