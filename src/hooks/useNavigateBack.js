'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';


export function useNavigateBack() {
    const router = useRouter();
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        setCanGoBack(window.history.length > 1);
    }, []);

    const navigateBack = useCallback(() => {
        if (canGoBack) {
            router.back();
        } else {
            router.push('/');
        }
    }, [canGoBack, router]);

    return navigateBack;
}