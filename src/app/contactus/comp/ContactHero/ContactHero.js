import style from "./ContactHero.module.css";


export default function ContactHero() {
    return (
        <div className={style.heroContainer}>
            <h3 className={style.heroTitle}>Contact Our Team</h3>
            
            <p className={style.heroDescription}>Have questions, feedback, or just want to say hello? We're here to help! Reach out to us, and we'll get back to you as soon as possible</p>
        </div>
    );
}