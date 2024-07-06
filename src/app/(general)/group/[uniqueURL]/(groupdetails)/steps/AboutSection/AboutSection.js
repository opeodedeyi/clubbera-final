import style from './AboutSection.module.css';


const AboutSection = ({ group }) => {
    return (
        <div className={style.groupOther}>
            <div className={style.groupAboutDescription}>
                <h5 className={style.groupAboutTitle}>Group description</h5>
                <p className={style.groupAboutContent}>{group.description}</p>
            </div>
            <div className={style.groupHostInfo}>
                <div className={style.groupHostInfoContainer}>
                    <h5 className={style.groupAboutTitle}>HOST INFORMATION</h5>
                    <div className={style.HostInfoItem}>
                        <div className={style.HostInfoItemImg}>
                            <img src={group.hostAvatar || "/profile.png"} alt="host-photo"/>
                        </div>
                        <div className={style.HostInfoItemText}>
                            <p className={style.HostInfoItemTitle}>Full name</p>
                            <p className={style.HostInfoItemContent}>{group.hostName || "loading name"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;