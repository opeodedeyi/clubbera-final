import Image from 'next/image';
import style from "./HomepageWorks.module.css";

function WorkCard({ title, text, workimage }) {
    return (
        <div className={style.homepageWorkCard}>
            <Image
            className={style.homepageWorkCardImg}
            src={workimage}
            alt={`photo of ${title}`}
            width={400}
            height={400}/>
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
            <p className={style.homepageWorksText}>Ready to break free from the virtual world and make some real-life connections? Clubbera is here to help you do just that! Our platform is all about bringing people together through shared interests and unforgettable experiences.</p>
        </div>

        <div className={style.homepageWorksCards}>
            {works.map((card, index) => (
                <WorkCard key={index} title={card.title} text={card.subtext} workimage={card.image} />
            ))}
        </div>
    </div>
);

export default WorksSection;