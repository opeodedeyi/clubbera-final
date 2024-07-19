import style from "./HomepageWorks.module.css";

function WorkCard({ title, text, workimage }) {
    return (
        <div className={style.homepageWorkCard}>
            <img className={style.homepageWorkCardImg} src={workimage} alt="" />
            <p className={style.homepageWorkCardTitle}>
            {title.split('&').map((part, index) => (
                <span key={index}>
                {part}
                {index !== title.split('&').length - 1 && (
                    <span className="spicy-normalText">&</span>
                )}
                </span>
            ))}
            </p>
            <div className={style.homepageWorkCardBody}>
                <p className={style.homepageWorkCardTitle}>
                    {title.split('&').map((part, index) => (
                    <span key={index}>
                        {part}
                        {index !== title.split('&').length - 1 && (
                        <span className="spicy-normalText">&</span>
                        )}
                    </span>
                    ))}
                </p>
                <p className={style.homepageWorkCardText}>{text}</p>
            </div>
        </div>
    );
}

const WorksSection = ({ works }) => (
    <div className={style.homepageWorks}>
        <div className={style.homepageWorksContent}>
            <h2 className={style.homepageWorksTitle}>How Clubbera <span className="spicy-text">works</span></h2>
            <p className={style.homepageWorksText}>Form new connections with individuals who have common interests through a wide range of physical events. Joining our platform and creating an account is absolutely free.</p>
        </div>

        <div className={style.homepageWorksCards}>
            {works.map((card, index) => (
                <WorkCard key={index} title={card.title} text={card.subtext} workimage={card.image} />
            ))}
        </div>
    </div>
);

export default WorksSection;