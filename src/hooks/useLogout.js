'use client';

import { logout as serverLogout } from '@/app/actions/auth';
import { useRouter, usePathname } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';


const acceeptedRoutes = ['/login', '/register', '/forgot-password', '/', '/group/:uniqueURL'];

export function useLogout() {
    const router = useRouter();
    const pathname = usePathname();
    const { setUser } = useUser();

    const logout = async () => {
        await serverLogout();
        setUser(null);
        router.refresh();

        if (!acceeptedRoutes.includes(pathname)) {
            router.push('/');
        }
    }

    return logout
}