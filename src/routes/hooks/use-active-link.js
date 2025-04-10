import { matchPath, useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useActiveLink(path, deep = true) {
  const { pathname } = useLocation();
  // console.log(path)
  // const parsedPath = new URLSearchParams(path).get('search') ? path.split('?')[0] : path;
  const parsedPath = path.split('?')[0];
  const normalActive = parsedPath ? !!matchPath({ path: parsedPath, end: true }, pathname) : false;

  const deepActive = parsedPath ? !!matchPath({ path: parsedPath, end: false }, pathname) : false;

  return deep ? deepActive : normalActive;
}
