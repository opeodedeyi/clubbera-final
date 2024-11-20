'use client';

import Link from "next/link";
import Logo from "@/components/utility/logo";
import style from "./MainFooter.module.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { useLogout } from '@/hooks/useLogout';
import { useUser } from '@/app/context/UserContext';


export default function MainFooter() {
    const { user, loading, error } = useUser();
    const logout = useLogout();

    return (
        <footer className={style.mainFooter}>
            <div className={style.mainFooterTop}>
                <div className={style.mainFooterTopLeft}>
                    <Logo size="header-logo-size" coloring="white-logo-coloring"/>
                    <p className={style.mainFooterTagline}>We connect individuals with local communities and clubs</p>
                </div>
                <div className={style.mainFooterTopRight}>
                    <ul>
                        <li><p className={style.mainFooterLinkHeader}>Your Account</p></li>
                        {
                            user ? (
                                <>
                                    <li><Link href="/profile" className={style.mainFooterLink}>Profile</Link></li>
                                    <li><Link href="#" onClick={logout} className={style.mainFooterLink}>Logout</Link></li>
                                </> 
                            ) : (
                                <>
                                    <li><Link href="/signup" className={style.mainFooterLink}>Sign up</Link></li>
                                    <li><Link href="/login" className={style.mainFooterLink}>Login</Link></li>
                                </>
                            )
                        }
                    </ul>
                    <ul>
                        <li><p className={style.mainFooterLinkHeader}>Company</p></li>
                        <li><Link href="/help" className={style.mainFooterLink}>Help</Link></li>
                        <li><Link href="#" className={style.mainFooterLink}>Enquiries</Link></li>
                    </ul>
                    <ul>
                        <li><p className={style.mainFooterLinkHeader}>Legal</p></li>
                        <li><Link href="/privacypolicy" className={style.mainFooterLink}>Privacy policy</Link></li>
                        <li><Link href="/terms" className={style.mainFooterLink}>Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
            <div className={style.mainFooterMidline}></div>
            <div className={style.mainFooterBottom}>
                <p className={style.mainFooterBottomText}>© Clubbera 2023. All rights reserved.</p>
                <div className={style.mainFooterBottomIcons}>
                    <Link href="#" className={style.mainFooterBottomIcon}>
                        <FaFacebookF color="var(--bright-color-text)"/>
                    </Link>
                    <Link href="#" className={style.mainFooterBottomIcon}>
                        <FaInstagram color="var(--bright-color-text)"/>
                    </Link>
                    <Link href="#" className={style.mainFooterBottomIcon}>
                        <FaTwitter color="var(--bright-color-text)"/>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
