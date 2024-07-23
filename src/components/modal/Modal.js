import style from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children, width }) => {
  if (!isOpen) return null;

  return (
    <div className={style.overlay}>
      <div className={style.modal} style={{ maxWidth: width }}>
        <button className={style.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
