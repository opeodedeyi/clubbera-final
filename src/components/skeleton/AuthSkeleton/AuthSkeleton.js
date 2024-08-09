import style from './AuthSkeleton.module.css';


export default function AuthSkeleton() {
    return (
        <div className={style.authContainer}>
            <div className={style.authContainerMain}>
                <div className={style.authFormContent}>
                    <div className={`${style.logo} ${style.skeleton}`}></div>
                    <div className={style.authFormContentMain}>
                        <div className={style.authFormContentIntro}>
                            <div className={`${style.title} ${style.skeleton}`}></div>
                            <div className={`${style.text} ${style.skeleton}`}></div>
                        </div>
                    </div>

                    <div className={`${style.socialButton} ${style.skeleton}`}></div>

                    <div className={style.authFormInputs}>
                        <div className={`${style.input} ${style.skeleton}`}></div>
                        <div className={`${style.input} ${style.skeleton}`}></div>
                    </div>
                </div>

                <div className={style.authFormActions}>
                    <div className={`${style.button} ${style.skeleton}`}></div>
                    <div className={`${style.text} ${style.skeleton}`}></div>
                </div>
            </div>
        </div>
    );
};
