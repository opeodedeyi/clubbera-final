'use client';

import { createContext, useContext } from 'react';

const GroupContext = createContext(null);

export function GroupProvider({ children, value }) {
    return (
        <GroupContext.Provider value={value}>
            {children}
        </GroupContext.Provider>
    );
}

export function useGroup() {
    const context = useContext(GroupContext);
    if (context === undefined) {
        throw new Error('useGroup must be used within a GroupProvider');
    }
    return context;
}