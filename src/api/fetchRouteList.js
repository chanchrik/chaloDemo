import { useCallback } from "react";

const fetchRoutesList = useCallback(async () => {
  try {
    const response = await fetch(
      "https://chalodemo-default-rtdb.firebaseio.com/route.json"
    );
    const data = await response.json();
    const routesList = [];
    Object.entries(data).forEach((route) => {
      routesList.push({ ...route[1], guid: route[0] });
    });
    dispatch({ type: "setRoutes", payLoad: routesList });
  } catch (e) {
    console.log(e);
  }
}, []);

export default fetchRoutesList;
