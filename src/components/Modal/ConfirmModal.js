import { useDispatch, useSelector } from "react-redux";

import Modal from "./Modal";
import modalStyles from "./Modal.module.css";

const ConfirmModal = (props) => {
  const dispatch = useDispatch();
  const route = useSelector((state) => state.route.route);
  const closeDeleteRouteModal = () => {
    dispatch({ type: "closeDeleteRoute" });
  };
  const confirmButtonClicked = () => {
    const url =
      "https://chalodemo-default-rtdb.firebaseio.com/route/" +
      route.guid +
      ".json";
    fetch(url, {
      method: "DELETE"
    })
      .then((data) => data.json())
      .then((res) => {
        dispatch({ type: "fetchRoutes" });
        closeDeleteRouteModal();
      });
  };
  return (
    <Modal onClose={closeDeleteRouteModal}>
      <div className={modalStyles.confirmBody}>
        <p className={modalStyles.warningText}>
          Procced to Delete {route.name}
        </p>
        <p className={modalStyles.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          className={modalStyles.confirmBtn}
          onClick={confirmButtonClicked}
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
