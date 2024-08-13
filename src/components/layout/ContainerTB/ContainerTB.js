import style from './ContainerTB.module.css';

export default function ContainerTB({children}) {
    return (
        <div className={style.containerTB} >
            {children}
        </div>
    )
}