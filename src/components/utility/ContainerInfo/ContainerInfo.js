import style from './ContainerInfo.module.css';
import Link from 'next/link'

export default function ContainerInfo({ title, description, link, button }) {
    return (
        <div className={style.containerWrapper}>
            <div className={style.containerText}>
                <h4 className={style.containerTitle}>{title}</h4>
                <p className={style.containerDescription}>{description}</p>
            </div>

            {button && (
                <Link className={style.containerButton} href={link}>
                    {button}
                </Link>
            )}
        </div>
    );
};