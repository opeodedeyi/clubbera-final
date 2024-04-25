import { useState, useEffect } from 'react';
import { getUserSession } from "@/lib";

export const useUserSession = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const session = await getUserSession();
            setUser(session.user);
        };

        fetchUser();
    }, []);

    return user;
};