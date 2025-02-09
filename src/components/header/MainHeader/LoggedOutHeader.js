import Logo from "@/components/utility/Logo/logo";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./MainHeader.module.css";


function LoggedOutHeader() {
    return (
        <>
            <Logo coloring="default-logo-coloring" size="header-logo-size"></Logo>

            <div className={`${style.flexC} ${style.headerButtons}`}>
                <CustomButton link destination="/login" coloring="inverseColoring">Log in</CustomButton>
                <CustomButton link destination="/signup">Sign up</CustomButton>
            </div>
        </>
    );
}

export default LoggedOutHeader