'use client';

import Link from "next/link";
import Logo from "@/components/utility/logo";
import { useUser } from "@/context/UserContext";
import "@/components/footer/mainfooter.css"


export default function MainFooter() {
    const { user } = useUser();

    return (
        <footer className="main-footer">
            <div className="main-footer-top">
                <div className="main-footer-top-left">
                    <Logo size="header-logo-size" coloring="white-logo-coloring"/>
                    <p className="main-footer-tagline">We connect individuals with local communities and clubs</p>
                </div>
                <div className="main-footer-top-right">
                    <ul>
                        <li><p className="main-footer-link-header">Your Account</p></li>
                        { user ?
                            <>
                                <li><Link href="#" className="main-footer-link">Profile</Link></li>
                                <li><Link href="#" className="main-footer-link">Logout</Link></li>
                            </> : 
                            <>
                                <li><Link href="/signup" className="main-footer-link">Sign up</Link></li>
                                <li><Link href="/login" className="main-footer-link">Login</Link></li>
                            </> }
                    </ul>
                    <ul>
                        <li><p className="main-footer-link-header">Company</p></li>
                        <li><Link href="#" className="main-footer-link">About</Link></li>
                        <li><Link href="#" className="main-footer-link">Enquiries</Link></li>
                    </ul>
                    <ul>
                        <li><p className="main-footer-link-header">Legal</p></li>
                        <li><Link href="#" className="main-footer-link">Privacy policy</Link></li>
                        <li><Link href="#" className="main-footer-link">Cookie policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="main-footer-midline"></div>
            <div className="main-footer-bottom">
                <p className="main-footer-bottom-text">© Clubbera 2023. All rights reserved.</p>
                <div className="main-footer-bottom-icons">
                    <Link href="#" className="main-footer-bottom-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5.58177 8.74882V5.33382H6.73385L6.9051 3.99674H5.58177V3.14507C5.58177 2.75924 5.68927 2.49507 6.24302 2.49507H6.94469V1.30299C6.60329 1.2664 6.26012 1.24873 5.91677 1.25007C4.89844 1.25007 4.19927 1.87174 4.19927 3.01299V3.99424H3.05469V5.33132H4.20177V8.74882H5.58177Z" fill="#F4F4F4"/>
                        </svg>
                    </Link>
                    <Link href="#" className="main-footer-bottom-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M5.85 1.5H12.15C14.55 1.5 16.5 3.45 16.5 5.85V12.15C16.5 13.3037 16.0417 14.4101 15.2259 15.2259C14.4101 16.0417 13.3037 16.5 12.15 16.5H5.85C3.45 16.5 1.5 14.55 1.5 12.15V5.85C1.5 4.69631 1.9583 3.58987 2.77409 2.77409C3.58987 1.9583 4.69631 1.5 5.85 1.5ZM5.7 3C4.98392 3 4.29716 3.28446 3.79081 3.79081C3.28446 4.29716 3 4.98392 3 5.7V12.3C3 13.7925 4.2075 15 5.7 15H12.3C13.0161 15 13.7028 14.7155 14.2092 14.2092C14.7155 13.7028 15 13.0161 15 12.3V5.7C15 4.2075 13.7925 3 12.3 3H5.7ZM12.9375 4.125C13.1861 4.125 13.4246 4.22377 13.6004 4.39959C13.7762 4.5754 13.875 4.81386 13.875 5.0625C13.875 5.31114 13.7762 5.5496 13.6004 5.72541C13.4246 5.90123 13.1861 6 12.9375 6C12.6889 6 12.4504 5.90123 12.2746 5.72541C12.0988 5.5496 12 5.31114 12 5.0625C12 4.81386 12.0988 4.5754 12.2746 4.39959C12.4504 4.22377 12.6889 4.125 12.9375 4.125ZM9 5.25C9.99456 5.25 10.9484 5.64509 11.6517 6.34835C12.3549 7.05161 12.75 8.00544 12.75 9C12.75 9.99456 12.3549 10.9484 11.6517 11.6517C10.9484 12.3549 9.99456 12.75 9 12.75C8.00544 12.75 7.05161 12.3549 6.34835 11.6517C5.64509 10.9484 5.25 9.99456 5.25 9C5.25 8.00544 5.64509 7.05161 6.34835 6.34835C7.05161 5.64509 8.00544 5.25 9 5.25ZM9 6.75C8.40326 6.75 7.83097 6.98705 7.40901 7.40901C6.98705 7.83097 6.75 8.40326 6.75 9C6.75 9.59674 6.98705 10.169 7.40901 10.591C7.83097 11.0129 8.40326 11.25 9 11.25C9.59674 11.25 10.169 11.0129 10.591 10.591C11.0129 10.169 11.25 9.59674 11.25 9C11.25 8.40326 11.0129 7.83097 10.591 7.40901C10.169 6.98705 9.59674 6.75 9 6.75Z" fill="#F4F4F4"/>
                        </svg>
                    </Link>
                    <Link href="#" className="main-footer-bottom-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M16.7671 4.41176C16.2235 4.65882 15.6376 4.82118 15.0306 4.89882C15.6518 4.52471 16.1318 3.93176 16.3576 3.21882C15.7718 3.57176 15.1224 3.81882 14.4376 3.96C13.88 3.35294 13.0965 3 12.2071 3C10.5482 3 9.19294 4.35529 9.19294 6.02824C9.19294 6.26824 9.22118 6.50118 9.27059 6.72C6.75765 6.59294 4.52 5.38588 3.03059 3.55765C2.76941 4.00235 2.62118 4.52471 2.62118 5.07529C2.62118 6.12706 3.15059 7.05882 3.96941 7.58824C3.46824 7.58824 3.00235 7.44706 2.59294 7.23529V7.25647C2.59294 8.72471 3.63765 9.95294 5.02118 10.2282C4.57698 10.3498 4.11066 10.3667 3.65882 10.2776C3.85055 10.8794 4.22603 11.4059 4.73248 11.7832C5.23894 12.1606 5.8509 12.3697 6.48235 12.3812C5.41197 13.2285 4.08517 13.6866 2.72 13.68C2.48 13.68 2.24 13.6659 2 13.6376C3.34118 14.4988 4.93647 15 6.64471 15C12.2071 15 15.2635 10.3835 15.2635 6.38118C15.2635 6.24706 15.2635 6.12 15.2565 5.98588C15.8494 5.56235 16.3576 5.02588 16.7671 4.41176Z" fill="#F4F4F4"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
