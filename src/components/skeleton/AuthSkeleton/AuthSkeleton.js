import style from './AuthSkeleton.module.css';


export default function AuthSkeleton() {
    return (
        <main className={style.authContainer}>
            <section className={style.authContainerMain}>
                <div className={style.authFormContent}>
                    <div className={`${style.logo} ${style.skeleton}`} aria-hidden="true"></div>
                    <div className={style.authFormContentMain}>
                        <header className={style.authFormContentIntro}>
                            <h1 className={`${style.title} ${style.skeleton}`} aria-hidden="true"></h1>
                            <p className={`${style.text} ${style.skeleton}`} aria-hidden="true"></p>
                        </header>
                    </div>

                    <button className={`${style.socialButton} ${style.skeleton}`} aria-hidden="true"></button>

                    <form className={style.authFormInputs}>
                        <div className={`${style.input} ${style.skeleton}`} aria-hidden="true"></div>
                        <div className={`${style.input} ${style.skeleton}`} aria-hidden="true"></div>
                    </form>
                </div>

                <div className={style.authFormActions}>
                    <button className={`${style.button} ${style.skeleton}`} aria-hidden="true"></button>
                    <p className={`${style.text} ${style.skeleton}`} aria-hidden="true"></p>
                </div>
            </section>
        </main>
    );
};
