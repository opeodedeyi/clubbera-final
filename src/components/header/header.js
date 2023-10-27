'use client';

import { useRouter, usePathname } from "next/navigation";
import "./header.css";

import CustomButton from "../utility/custombutton";
import Logo from "../utility/logo";

import { useState } from 'react';


export default function Header() {
    const [user, setUser] = useState(false);
    const pathName = usePathname();

    return (
        <>
            <header className={`header-main ${pathName==='/login' || pathName==='/signup' || pathName==='/forgotpassword' ? 'no-border-bottom' : ''}`}>
                {pathName==='/login' || pathName==='/signup' || pathName==='/forgotpassword' ?  
                    <CustomButton link destination="/" coloring="form-header-coloring" size="form-header-size"><img src="/back_direction.svg" alt="<" /><span>Back to home page</span></CustomButton>
                : 
                    // Normal header
                    <>
                        <Logo coloring="default-logo-coloring" size="header-logo-size"></Logo>

                        {user ? 
                            <div className="flex-c header-buttons">
                                {/* searchbar goes here */}
                                <div className="header-verti-line"></div>
                                
                            </div>
                            :
                            <div className="flex-c header-buttons">
                                <CustomButton link destination="/login" coloring="inverse-coloring">Log in</CustomButton>
                                <CustomButton link destination="/signup">Sign up</CustomButton>
                            </div>
                        }
                    </>
                    // else statement with search header
                }
            </header>
            
            {/* <MobileNav isOpen={navOpen} onCancel={toggleNav} logoutClick={logoutClick}></MobileNav> */}
        </>
    )
}

