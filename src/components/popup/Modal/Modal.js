import ModalBack from "./comp/ModalBack/ModalBack";
import style from "./Modal.module.css";

const Modal = ({ isHidden=false, isOpen, onClose, displayType, children, maxWidth="500px", hasBack }) => {
    if (isHidden) return null;

    return (
        <>
            { isOpen ? <div className={style.overlay}></div> : null }

            <div className={`${style.modal} ${style[displayType]} ${isOpen ? style.modalOpen : ''}`} style={{ maxWidth }}>
                { hasBack ? 
                    <ModalBack onClose={onClose} /> : 
                    null
                }
                
                {children}
            </div>
        </>
    );
};

export default Modal;
