import CustomButton from '@/components/utility/CustomButton/CustomButton';
import style from "./ContactLogin.module.css";


export default function ContactLogin() {
    return (
        <div className={style.loginContainer}>
            <h4>Log in to contact us</h4>
            <p className={style.description}>This will help us recognize you and provide the support you need faster</p>
            <div className={style.btnContainer}>
                <CustomButton link destination='/login'>Log in</CustomButton>
                <CustomButton link destination='/login' coloring='inverseColoring'>Sign up</CustomButton>
            </div>
        </div>
    );
}