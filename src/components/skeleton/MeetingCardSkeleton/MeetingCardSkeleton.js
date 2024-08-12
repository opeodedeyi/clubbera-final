import style from './MeetingCardSkeleton.module.css';


export default function MeetingCardSkeleton({ type = "grid" }) {
    return (
        <div className={type === "grid" ? style.gridMeetingCard : style.flexMeetingCard}>
            <div className={`${style.cardImage} ${style.skeleton}`}></div>
            <div className={style.cardContent}>
                <div className={style.cardContentBasic}>
                    <div className={`${style.cardDate} ${style.skeleton}`}></div>
                    <div className={style.cardContentText}>
                        <div className={`${style.cardTitle} ${style.skeleton}`}></div>
                        <div className={`${style.cardLocation} ${style.skeleton}`}></div>
                    </div>
                </div>
                <div className={`${style.cardDescription} ${style.skeleton}`}></div>
                <div className={style.cardFooterMembers}>
                    <div className={style.avatarWrapperMain}>
                        <div className={`${style.avatarWrapper} ${style.skeleton}`}></div>
                        <div className={`${style.avatarWrapper} ${style.skeleton}`}></div>
                    </div>
                    <div className={`${style.memberCount} ${style.skeleton}`}></div>
                </div>
            </div>
        </div>
    );
};
