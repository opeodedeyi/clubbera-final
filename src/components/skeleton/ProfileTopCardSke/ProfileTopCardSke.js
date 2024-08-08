import style from "./ProfileTopCardSke.module.css";

export default function ProfileTopCardSke () {
    return (
        <div className={`${style.profileHero} ${style.skeletonCard}`}>
            <div className={style.profileHeroCont}>
                <div className={`${style.profileHeroName} ${style.skeleton}`}></div>
                <div className={`${style.profileHeroSpeech} ${style.skeleton}`}></div>
            </div>
        </div>
    )
}