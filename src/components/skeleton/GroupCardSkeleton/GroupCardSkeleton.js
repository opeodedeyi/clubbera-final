import style from './GroupCardSkeleton.module.css';

export default function GroupCardSkeleton({ type }) {
    return (
        <div className={`${style.skeletonCard} ${type === "grid" ? style.gridGroupCard : style.flexGroupCard}`}>
            <div className={style.cardContent}>
                <div className={style.cardContentBasic}>
                    <div className={`${style.skeleton} ${style.cardDate}`}></div>

                    <div className={style.cardContentText}>
                        <div className={`${style.skeleton} ${style.cardTitle}`}></div>
                        <div className={`${style.skeleton} ${style.cardLocation}`}></div>
                    </div>
                </div>

                <div className={`${style.skeleton} ${style.cardDescription}`}></div>
            </div>

            <div className={style.cardFooter}>
                <div className={`${style.skeleton} ${style.groupTag}`}></div>

                <div className={style.cardFooterMembers}>
                    <div className={style.avatarWrapperMain}>
                        <div className={`${style.skeleton} ${style.avatarWrapper}`}></div>
                        <div className={`${style.skeleton} ${style.avatarWrapper}`}></div>
                    </div>
                    <div className={`${style.skeleton} ${style.memberCount}`}></div>
                </div>
            </div>
        </div>
    )
}