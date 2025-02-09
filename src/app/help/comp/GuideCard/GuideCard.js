import Image from "next/image";
import Link from "next/link";
import styles from "./GuideCard.module.css";


export default function GuideCard({ id, title, description, image, icon, width = "100%"}) {
    return (
        <Link href={`/help/${id}`} style={{ textDecoration: 'none' }}>
            <div className={styles.guideCard} style={{ width }}>
                {image && (
                    <div className={styles.guideCardImage}>
                        <Image src={image} alt={title} />
                    </div>
                )}

                <div className={styles.guideCardBody}>
                    <div className={styles.guideCardTitleContainer}>
                        {title && <h3 className={styles.guideCardTitle}>{title}</h3>}
                        {icon && <div className={styles.guideCardIcon}>{icon}</div>}
                    </div>
                    
                    {description && <p className={styles.guideCardContent}>{description}</p>}
                </div>
            </div>
        </Link>
    );
}
