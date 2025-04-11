import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import { publicRoutes } from './routes';

// ----------------------------------------------------------------------

function Routes() {
  return useRoutes([
    ...publicRoutes,

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
