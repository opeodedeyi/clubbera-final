import "./custombutton.css";

const SocialLoginButton = ( props ) => {
    const { imgSrc, coloring, onClick, disabled, children} = props;

    return (
        <button type="button" className={`social-login-button ${coloring}`} onClick={onClick} disabled={disabled}>
            <img src={imgSrc} alt="google" className="google-icon"/>
            <span>{ children }</span>
        </button>
    );
};

export default SocialLoginButton