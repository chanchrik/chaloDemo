import { useSelector, useDispatch } from "react-redux";

import styles from "./LeftNav.module.css";

const LeftNav = (props) => {
  const activeNav = useSelector((state) => state.navSelection.navItem);
  const dispatch = useDispatch();

  const navClickHandler = (event) => {
    dispatch({ type: "updateNav", payLoad: event.target.innerHTML });
  };
  return (
    <div className={styles.navmenuwrapper}>
      <div
        className={`${activeNav === "Routes" && styles.active}`}
        onClick={navClickHandler}
      >
        Routes
      </div>
      <div
        className={`${activeNav === "Stops" && styles.active}`}
        onClick={navClickHandler}
      >
        Stops
      </div>
    </div>
  );
};

export default LeftNav;
