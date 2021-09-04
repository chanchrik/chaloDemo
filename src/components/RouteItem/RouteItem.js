import { useDispatch } from "react-redux";

import routeItemStyles from "./RouteItem.module.css";

const RouteItem = (props) => {
  const dispatch = useDispatch();
  const viewCurrentRoute = () => {
    const stopList = [];
    props.route.stopsList.forEach((stop) => {
      stopList.push(stop.location);
    });
    const routeStopsList = [
      {
        id: props.route.id,
        name: props.route.name,
        stopsList: stopList
      }
    ];
    dispatch({
      type: "viewMap",
      payLoad: { route: props.route, routesStopsList: routeStopsList }
    });
  };
  const editCurrentRoute = () => {
    dispatch({ type: "editRoute", payLoad: props.route });
  };
  const deleteCurrentRoute = () => {
    dispatch({ type: "deleteRoute", payLoad: props.route });
  };
  return (
    <div className={routeItemStyles.itemWrapper}>
      <div className={routeItemStyles.nameText}>{props.route.name}</div>
      <div className={routeItemStyles.itemActions}>
        <button className={routeItemStyles.btn} onClick={viewCurrentRoute}>
          <i className="fa fa-binoculars"></i>
        </button>
        <button className={routeItemStyles.btn} onClick={editCurrentRoute}>
          <i className="fa fa-pencil"></i>
        </button>
        <button className={routeItemStyles.btn} onClick={deleteCurrentRoute}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default RouteItem;
