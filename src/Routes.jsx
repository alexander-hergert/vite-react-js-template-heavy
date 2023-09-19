import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/destination",
        element: <DestinationPage />,
        children: [
          {
            path: ":name",
            element: <DestinationInnerPage />,
          },
        ],
      },
      {
        path: "/crew",
        element: <CrewPage />,
        children: [
          {
            path: ":name",
            element: <CrewInnerPage />,
          },
        ],
      },
      {
        path: "/technology",
        element: <TechnologyPage />,
        children: [
          {
            path: ":name",
            element: <TechnologyInnerPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
