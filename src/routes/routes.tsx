import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import FallBackUI from "../components/FallBackUI/index.tsx";
import NoMatchRoute from "../pages/NoMatchRoute/index.tsx";
import Layout from "../containers/Layout";
import components from "./Components";

const routes = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<FallBackUI />}>
              <components.QrHome />
            </Suspense>
          ),
        },
        {
          path: "/qr/:companyId/:areaId/:qrId",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<FallBackUI />}>
                  <components.Home />
                </Suspense>
              ),
            },
            {
              path: "food",
              element: (
                <Suspense fallback={<FallBackUI />}>
                  <components.Food />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "*",
          element: <NoMatchRoute />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

export default routes;
