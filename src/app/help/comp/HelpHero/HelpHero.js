import style from './HelpHero.module.css';

export default function HelpHero() {
    return (
        <div className={style.heroContainer}>
            <p className={style.heroTitle}>Hello, how can we help you today</p>
        </div>
    );
}