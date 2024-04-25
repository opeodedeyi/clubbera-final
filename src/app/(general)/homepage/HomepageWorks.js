function WorkCard({ title, text, workimage }) {
    return (
        <div className="homepage-work-card">
            <img className="homepage-work-card-img" src={workimage} alt="" />
            <p className="homepage-work-card-title">
            {title.split('&').map((part, index) => (
                <span key={index}>
                {part}
                {index !== title.split('&').length - 1 && (
                    <span className="spicy-normal-text">&</span>
                )}
                </span>
            ))}
            </p>
            <div className="homepage-work-card-body">
                <p className="homepage-work-card-title">
                    {title.split('&').map((part, index) => (
                    <span key={index}>
                        {part}
                        {index !== title.split('&').length - 1 && (
                        <span className="spicy-normal-text">&</span>
                        )}
                    </span>
                    ))}
                </p>
                <p className="homepage-work-card-text">{text}</p>
            </div>
        </div>
    );
}

const WorksSection = ({ works }) => (
    <div className="homepage-works">
        <div className="homepage-works-content">
            <h2 className="homepage-works-title">How Clubbera <span className="spicy-text">works</span></h2>
            <p className="homepage-works-text">Form new connections with individuals who have common interests through a wide range of physical events. Joining our platform and creating an account is absolutely free.</p>
        </div>

        <div className="homepage-works-cards">
            {works.map((card, index) => (
                <WorkCard key={index} title={card.title} text={card.subtext} workimage={card.image} />
            ))}
        </div>
    </div>
);

export default WorksSection;