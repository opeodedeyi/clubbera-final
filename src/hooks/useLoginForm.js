import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isEmailValid, isPasswordValid } from '@/validation';

export default function useLoginForm(destination) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const nextPage = () => {
        return destination ? `/${destination}` : '/';
    };

    const submitLogin = async () => {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.error) {
                console.log(data.error);
            } else {
                router.push(nextPage());
            }
        }
        setLoading(false);
    };

    const isDisabled = !email || !password || !isEmailValid(email) || !isPasswordValid(password) || loading;

    return { email, setEmail, password, setPassword, submitLogin, isDisabled, loading };
}
