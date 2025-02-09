'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';
import { HiOutlineHome, HiOutlineSearch, HiOutlineUser, HiOutlineMail, HiOutlineTicket } from "react-icons/hi";
import styles from './BottomNav.module.css';

export default function BottomNav() {
    const { user, loading, error } = useUser();
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        const debouncedScroll = () => {
            let ticking = false;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', debouncedScroll);
        return () => window.removeEventListener('scroll', debouncedScroll);
    }, [lastScrollY]);

    return (
        <nav className={`${styles.navContainer} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.navContent}>
                {
                    user ? 
                        <>
                            <Link href="/dashboard/" className={`${styles.navLink} ${pathname === '/dashboard/' ? styles.activeHome : ''}`}>
                                <HiOutlineHome />
                                <p>Home</p>
                            </Link>
                            <Link href="/search/" className={`${styles.navLink} ${pathname === '/search/' ? styles.activeHome : ''}`}>
                                <HiOutlineSearch />
                                <p>Explore</p>
                            </Link>
                            {/* <Link href="/profile" className={`${styles.navLink} ${pathname === '/search/' ? styles.activeHome : ''}`}>
                                <HiOutlineTicket />
                                <p>Events</p>
                            </Link>
                            <Link href="/profile" className={`${styles.navLink} ${pathname === '/search/' ? styles.activeHome : ''}`}>
                                <HiOutlineMail />
                                <p>Messages</p>
                            </Link> */}
                            <Link href="/profile/" className={`${styles.navLink} ${pathname === '/profile/' ? styles.activeHome : ''}`}>
                                <HiOutlineUser />
                                <p>Profile</p>
                            </Link>
                        </>
                    :   <>
                            <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.activeHome : ''}`}>
                                <HiOutlineHome />
                                <p>Home</p>
                            </Link>
                            <Link href="/search/" className={`${styles.navLink} ${pathname === '/search/' ? styles.activeHome : ''}`}>
                                <HiOutlineSearch />
                                <p>Explore</p>
                            </Link>
                            <Link href="/login/" className={`${styles.navLink} ${pathname === '/login/' || pathname === '/signup/' ? styles.activeHome : ''}`}>
                                <HiOutlineUser />
                                <p>Log in</p>
                            </Link>
                        </>
                }
            </div>
        </nav>
    );
}