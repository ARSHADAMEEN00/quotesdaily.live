import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Page500 from "../../pages/static/500";
import Page403 from "../../pages/static/403";
import Page404 from "../../pages/static/404";

const publicRoutes = [
  {
    element: (
      <Suspense fallback={"loading..."}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { path: "500", element: <Page500 /> },
      { path: "404", element: <Page404 /> },
      { path: "403", element: <Page403 /> },
    ],
  },
];
export { publicRoutes };
