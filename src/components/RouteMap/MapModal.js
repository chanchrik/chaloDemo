import { useDispatch, useSelector } from "react-redux";

import RouteMap from "../RouteMap/RouteMap";
import mapStyles from "./RouteMap.module.css";

const MapModal = () => {
  const routeStopsList = useSelector(
    (state) => state.mapSelection.routesStopsList
  );
  const dispatch = useDispatch();
  const closeCurrentRoute = () => {
    dispatch({ type: "closeMap", payLoad: false });
  };
  return (
    <div className={mapStyles.mapModalWrapper}>
      <div className={mapStyles.mapModalBody}>
        <button className={mapStyles.mapCloseBtn} onClick={closeCurrentRoute}>
          <i className="fa fa-close" />
        </button>
        <div className={mapStyles.mapWrapper}>
          <RouteMap routeList={routeStopsList}></RouteMap>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
