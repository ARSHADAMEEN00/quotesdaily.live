import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import { publicRoutes } from './routes';
import Home from '../../pages/static/Home';

// ----------------------------------------------------------------------

function Routes() {
  return useRoutes([
    ...publicRoutes,
    {
      path: '/',
      element: <Home />,
    },
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
