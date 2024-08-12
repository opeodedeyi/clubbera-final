import style from './HomeHeroSke.module.css';

export default function HomeHeroSke() {
    return (
        <div className={style.homepageHero}>
            <div className={style.homepageHeroCont}>
                <div className={`${style.homepageHeroHype} ${style.skeleton}`}></div>
                <div className={`${style.homepageHeroTagline} ${style.skeleton}`}></div>
                <div className={`${style.homepageHeroSubtag} ${style.skeleton}`}></div>
                <div className={style.homepageHeroButtons}>
                    <div className={`${style.button} ${style.skeleton}`}></div>
                    <div className={`${style.button} ${style.skeleton}`}></div>
                </div>
            </div>
            <div className={`${style.homepageHeroImage} ${style.heroPosFive} ${style.skeleton}`}></div>
            <div className={`${style.homepageHeroImage} ${style.heroPosSeven} ${style.skeleton}`}></div>
        </div>
    );
};