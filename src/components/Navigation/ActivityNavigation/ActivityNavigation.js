import style from './ActivityNavigation.module.css';

export default function ActivityNavigation({ length=1, currentStep=0, goToEvent }) {
    return (
        <div className={style.activityNavigation}>
            {[...Array(length)].map((_, i) => (
                <div
                    key={i}
                    onClick={() => goToEvent(i)}
                    className={`${style.activityNavigationDots} ${currentStep === i ? style.activeColoring : style.defaultColoring}`} />
            ))}
        </div>
    )
};