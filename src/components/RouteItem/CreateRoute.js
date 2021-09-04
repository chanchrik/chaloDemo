import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import Modal from "../Modal/Modal";
import routeItemStyles from "./RouteItem.module.css";

const CreateRoute = (props) => {
  const dispatch = useDispatch();
  const stopsList = useSelector((state) => state.route.stopsList);
  const route = useSelector((state) => state.route.route);
  const [routeName, setRouteName] = useState("");
  const [direction, setDirection] = useState("");
  const [stops, setStops] = useState("");

  const closeAddRouteModal = () => {
    !props.isEditRoute && dispatch({ type: "closeCreateRoute" });
    props.isEditRoute && dispatch({ type: "closeEditRoute" });
  };

  const nameHandler = (event) => {
    setRouteName(event.target.value);
  };
  const directionHandler = (event) => {
    setDirection(event);
  };
  const stopsHandler = (event) => {
    setStops(event);
  };

  const addRoute = async (reqBody) => {
    let url = "https://chalodemo-default-rtdb.firebaseio.com/route.json";
    if (props.isEditRoute) {
      url =
        "https://chalodemo-default-rtdb.firebaseio.com/route/" +
        route.guid +
        ".json";
    }
    fetch(url, {
      method: props.isEditRoute ? "PUT" : "POST",
      body: JSON.stringify(reqBody)
    })
      .then((data) => data.json())
      .then((res) => {
        dispatch({ type: "fetchRoutes" });
        closeAddRouteModal();
      });
  };

  const submitRoute = (event) => {
    event.preventDefault();
    const stopList = [];
    stops.forEach((element) => {
      stopList.push(element.value);
    });
    const routeBody = {
      id: props.isEditRoute ? route.id : new Date().getTime(),
      name: routeName,
      direction: direction.value,
      status: "active",
      stopsList: stopList
    };
    addRoute(routeBody);
  };

  const directionOptions = [
    { value: "up", label: "Up" },
    { value: "down", label: "Down" }
  ];

  useEffect(() => {
    if (props.isEditRoute) {
      setRouteName(route.name);
      setDirection(
        directionOptions.filter((item) => item.value === route.direction)[0]
      );
      const stopList = [];
      route.stopsList.forEach((stop) => {
        stopList.push({ label: stop.stopName, value: stop });
      });
      setStops(stopList);
    }
  }, []);

  return (
    <Modal onClose={closeAddRouteModal}>
      <div className={routeItemStyles.headerText}>
        {props.isEditRoute ? "Edit Route" : "Create New Route"}
      </div>
      <form onSubmit={submitRoute}>
        <div className={routeItemStyles.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={nameHandler}
            value={routeName}
          />
        </div>
        <div className={routeItemStyles.control}>
          <label htmlFor="name">Direction</label>
          <Select
            options={directionOptions}
            onChange={directionHandler}
            value={direction}
          ></Select>
        </div>
        <div className={routeItemStyles.control}>
          <label htmlFor="name">Stops</label>
          <Select
            options={stopsList}
            isMulti={true}
            onChange={stopsHandler}
            value={stops}
          ></Select>
        </div>
        <button className={routeItemStyles.saveBtn}>
          {props.isEditRoute ? "Save Route" : "Add Route"}
        </button>
      </form>
    </Modal>
  );
};

export default CreateRoute;
