import Link from 'next/link';
import style from './CustomTitle.module.css';

export default function CustomTitle({ children, linkText="View all", link }) {
    return (
        <div className={style.customTitle}>
            <p className={style.customTitleText}>{children}</p>

            {
                link && 
                    <Link
                        href={link}
                        className={style.customLink}>
                        {linkText}
                    </Link>
            }
        </div>
    );
};