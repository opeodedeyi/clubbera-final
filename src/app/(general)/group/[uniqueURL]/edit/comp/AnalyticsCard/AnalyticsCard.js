import style from './AnalyticsCard.module.css';


export default function AnalyticsCard ({ img, title, explain, value }) {
    return (
        <div className={style.editAnalyticsCard}>
            <div className={style.editAnalyticsCardImage}>
                {img}
            </div>
            <div className={style.editAnalyticsCardInfo}>
                <div className={style.editAnalyticsCardInfoTop}>
                    <p className={style.editAnalyticsCardInfoTitle}>{title}</p>
                    <p className={style.editAnalyticsCardInfoExplain}>{explain}</p>
                </div>
                <p className={style.editAnalyticsCardInfoNum}>{value}</p>
            </div>
        </div>
    );
};
