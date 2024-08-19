import style from './SearchInfoSkeleton.module.css';

export default function SearchInfoSkeleton() {
    return (
        <div className={style.searchInfo}>
            <div className={`${style.title} ${style.skeleton}`}></div>
            <div className={`${style.description} ${style.skeleton}`}></div>
        </div>
    );
};
