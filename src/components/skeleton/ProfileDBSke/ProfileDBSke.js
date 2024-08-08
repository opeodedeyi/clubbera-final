import style from './ProfileDBSke.module.css';

export default function ProfileDBSke() {
    return (
        <div className={style.profileDetailsBar}>
            {['Gender', 'Birthday', 'Location'].map((item, index) => (
                <div key={index} className={style.profileDetailsBarItem}>
                    <h4 className={style.itemTitle}>{item}</h4>
                    <div className={`${style.itemValue} ${style.skeleton}`}></div>
                </div>
            ))}
        </div>
    );
};
