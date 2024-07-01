'use client';

import { logout as serverLogout } from '@/app/actions/auth';
import { useRouter, usePathname } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';


const publicRoutes = ['/login', '/register', '/forgot-password', '/'];

export function useLogout() {
    const router = useRouter();
    const pathname = usePathname();
    const { setUser } = useUser();

    const logout = async () => {
        await serverLogout();
        setUser(null);
        router.refresh();

        if (!publicRoutes.includes(pathname)) {
            router.push('/login');
        }
    }

    return logout
}