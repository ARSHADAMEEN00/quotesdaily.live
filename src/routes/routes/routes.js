import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Page500 from "../../pages/static/500";
import Page403 from "../../pages/static/403";
import Page404 from "../../pages/static/404";
import MainLayout from "../../layout/main";
import Home from "src/pages/static/Home";

const publicRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={"loading..."}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "500", element: <Page500 /> },
      { path: "404", element: <Page404 /> },
      { path: "403", element: <Page403 /> },
    ],
  },
];
export { publicRoutes };
