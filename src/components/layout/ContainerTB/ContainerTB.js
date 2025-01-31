import style from './ContainerTB.module.css';

export default function ContainerTB({children, gap='24px', justifyContent='center', alignItems='center'}) {
    return (
        <div className={style.containerTB} style={{gap, justifyContent, alignItems}}>
            {children}
        </div>
    )
}