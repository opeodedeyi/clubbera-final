import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useTabManager = (defaultTab, searchParams) => {
    const [activeTab, setActiveTab] = useState('');
    const router = useRouter();

    useEffect(() => {
        const tab = searchParams.tab || defaultTab;
        setActiveTab(tab);
        router.push(`?tab=${tab}`, undefined, { shallow: true });
    }, [searchParams.tab]);

    const handleTabClick = (e, tabName) => {
        e.preventDefault();
        setActiveTab(tabName);
        router.push(`?tab=${tabName}`, undefined, { shallow: true });
    };

    return { activeTab, handleTabClick };
};
