import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./HomepageHero.module.css";


export default function HeroSection() {
    return (
        <div className={style.homepageHero}>
            <div className={style.homepageHeroCont}>
                <p className={style.homepageHeroHype}>Your number one community 🥇</p>
                <h1 className={style.homepageHeroTagline}>
                    Discover, Connect <br className="desk" />
                    and Thrive <span className="spicy-text">with</span>{" "}
                    <br className="desk" />
                    <span className="colored-text">Clubbera</span>
                </h1>
                <p className={style.homepageHeroSubtag}>
                    We connect individuals with local comunities and clubs
                </p>
                <div className={`${style.flexC} ${style.homepageHeroButtons}`}>
                    <CustomButton link destination="/creategroup" size="normalSize">
                        Create group
                    </CustomButton>
                    <CustomButton
                        link
                        destination="/signup"
                        size="normalSize"
                        coloring="inverseColoring">
                        Join Clubbera
                    </CustomButton>
                </div>
            </div>

            {/* Hero section glow design */}
            <div className={`${style.homepageHeroGlow} ${style.heroPosOne}`}></div>
            <div className={`${style.homepageHeroGlow} ${style.heroPosTwo}`}></div>
            <div
                className={`${style.homepageHeroGlow} ${style.heroPosThree}`}>
            </div>

            {/* Hero section images */}
            <div
                className={`${style.homepageHeroImage} ${style.heroPosFour}`}>
            </div>
            <div
                className={`${style.homepageHeroImage} ${style.heroPosFive}`}>
            </div>
            <div className={`${style.homepageHeroImage} ${style.heroPosSix}`}></div>
            <div
                className={`${style.homepageHeroImage} ${style.heroPosSeven}`}>
            </div>
        </div>
    );
};
