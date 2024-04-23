import { useLocation, matchRoutes, Location } from "react-router-dom";

export const useCurrentPath = (path: string): boolean => {
    const location: Location = useLocation();
    const routes = matchRoutes([{ path }], location);
    if (routes && routes[0]?.route?.path === path) {
      return true;
    }
  
    return false;
};