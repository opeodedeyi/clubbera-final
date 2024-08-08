'use client';

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { getUserData } from '@/app/actions/getUserData';

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUser = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getUserData();
            setUser(data);
        } catch (err) {
            setError(err);
            console.error('Failed to fetch user:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const updateUser = useCallback((updates) => {
        setUser(prevUser => ({ ...prevUser, ...updates }));
    }, []);

    const value = useMemo(() => ({
        user,
        setUser,
        loading,
        error,
        refetch: fetchUser,
        updateUser
    }), [user, loading, error, fetchUser, updateUser]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}