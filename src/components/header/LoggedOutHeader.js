'use client';

import Logo from "@/components/utility/logo";
import CustomButton from "@/components/utility/CustomButton/CustomButton";


function LoggedOutHeader() {
    return (
        <>
            <Logo coloring="default-logo-coloring" size="header-logo-size"></Logo>

            <div className="flex-c header-buttons">
                <CustomButton link destination="/login" coloring="inverse-coloring">Log in</CustomButton>
                <CustomButton link destination="/signup">Sign up</CustomButton>
            </div>
        </>
    );
}

export default LoggedOutHeader