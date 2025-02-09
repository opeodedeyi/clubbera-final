import style from './ContainerInfo.module.css';
import Link from 'next/link'

export default function ContainerInfo({ title, description, link, button, padding="0 var(--container-padding)", gap="24px", fontSize="var(--title-font-home)", color="var(--color-text-secondary)" }) {
    return (
        <div className={style.containerWrapper} style={{ padding, gap }}>
            <div className={style.containerText}>
                { title && <h4 className={style.containerTitle} style={{ fontSize, color }}>{title}</h4> }
                { description && <p className={style.containerDescription}>{description}</p> }
            </div>

            {button && (
                <Link className={style.containerButton} href={link}>
                    {button}
                </Link>
            )}
        </div>
    );
};