import Image from "next/image";
import styles from "./GuideCard.module.css";

export default function GuideCard({ title, content, image, icon }) {
  return (
    <div className={styles.guideCard}>
      {image && (
        <Image src={image} alt={title} className={styles.guideCardImage} />
      )}
      <div className={styles.guideCardBody}>
        <div className={styles.guideCardTitleContainer}>
          {title && <h3 className={styles.guideCardTitle}>{title}</h3>}
          {icon && <div className={styles.guideCardIcon}>{icon}</div>}
        </div>
        {content && <p className={styles.guideCardContent}>{content}</p>}
      </div>
    </div>
  );
}
