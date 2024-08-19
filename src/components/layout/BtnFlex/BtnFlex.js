import style from './BtnFlex.module.css';

export default function BtnFlex({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};