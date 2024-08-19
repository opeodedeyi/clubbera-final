import style from './MobileOverlay.module.css';

export default function MobileOverlay ({ isOpen, closeNav }) {
    if (!isOpen) return null;

    return (
        <div
            className={style.mobileOverlay}
            onClick={closeNav} />
    )
}