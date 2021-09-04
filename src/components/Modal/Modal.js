import modalStyles from "./Modal.module.css";
const Modal = (props) => {
  const closeButtonClicked = () => {
    props.onClose();
  };
  return (
    <div className={modalStyles.modalWrapper}>
      <div className={modalStyles.modalBody}>
        <button className={modalStyles.closeBtn} onClick={closeButtonClicked}>
          <i className="fa fa-close" />
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
