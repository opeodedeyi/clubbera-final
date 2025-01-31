import Link from "next/link";
import styles from "./ArticleCard.module.css";

export default function ArticleCard({ title, description, id, subcategory, category }) {
    return (
        <Link href={`/help/${id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className={styles.articleCard}>
                {subcategory && <p className={styles.articleCardSubcategory}>{subcategory} {category ? ` . ${category}` : ''}</p>}
                {title && <h3 className={styles.articleCardTitle}>{title}</h3>}
                {description && <p className={styles.articleCardDescription}>{description}</p>}
            </div>
        </Link>
    );
}
