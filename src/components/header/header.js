'use client';

import { usePathname } from "next/navigation";
import CustomButton from "@/components/utility/custombutton";
import Logo from "@/components/utility/logo";
import { useUser } from "@/context/UserContext";
import "@/components/header/header.css";


export default function Header() {
    const { user } = useUser();
    const pathName = usePathname();

    return (
        <>
            <header className={`header-main ${pathName==='/login' || pathName==='/signup' || pathName==='/forgotpassword' ? 'no-border-bottom' : ''}`}>
                {/* header for login, signup and forgot password pages */}
                {pathName==='/login' || pathName==='/signup' || pathName==='/forgotpassword' ?  
                    <CustomButton link destination="/" coloring="form-header-coloring" size="form-header-size"><img src="/back_direction.svg" alt="<" /><span>Back to home page</span></CustomButton>
                : 
                    // main header for all other pages
                    (
                        user ? 
                            <>
                                {/* logged in header (to be continued) */}
                                <Logo coloring="default-logo-coloring" size="header-logo-size"></Logo>

                                <div className="flex-c header-buttons">
                                    <CustomButton link destination="/logout" coloring="inverse-coloring">Logout</CustomButton>
                                </div>
                            </>
                        :
                            <> 
                                {/* logged out header finished */}
                                <Logo coloring="default-logo-coloring" size="header-logo-size"></Logo>

                                <div className="flex-c header-buttons">
                                    <CustomButton link destination="/login" coloring="inverse-coloring">Log in</CustomButton>
                                    <CustomButton link destination="/signup">Sign up</CustomButton>
                                </div>
                            </>
                    )
                }
            </header>
            
            {/* <MobileNav isOpen={navOpen} onCancel={toggleNav} logoutClick={logoutClick}></MobileNav> */}
        </>
    )
}

