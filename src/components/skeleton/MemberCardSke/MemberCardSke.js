import style from './MemberCardSke.module.css';

export default function MemberCardSke() {
    return (
        <div className={style.memberCardSmall}>
            <div className={style.memberCardSmallGen}>
                <div className={`${style.memberCardSmallImg} ${style.skeleton}`}></div>
                <div className={style.memberCardSmallText}>
                    <div className={`${style.memberCardSmallName} ${style.skeleton}`}></div>
                    <div className={`${style.memberCardSmallRole} ${style.skeleton}`}></div>
                </div>
            </div>
        </div>
    );
};
