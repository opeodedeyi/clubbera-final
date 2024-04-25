import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isEmailValid, isPasswordValid } from '@/validation';

export default function useSignupForm(destination) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [cityLocation, setCityLocation] = useState(null);
    const [latLocation, setLatLocation] = useState(null);
    const [lngLocation, setLngLocation] = useState(null);
    const [ageConsent, setAgeConsent] = useState(false);

    const nextPage = () => {
        return destination ? `/${destination}` : '/';
    };

    const handleSignup = async () => {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, fullName, password, cityLocation, latLocation, lngLocation })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data.success) {
                router.push(nextPage());
            } else {
                console.log('Error:', data.data.message);
            }
        }
        setLoading(false);
    }

    const isDisabled = !fullName || !email || !password || !isEmailValid(email) || !isPasswordValid(password) || loading;

    return {
        step,
        setStep,
        email,
        setEmail,
        fullName,
        setFullName,
        password,
        setPassword,
        cityLocation,
        setCityLocation,
        latLocation,
        setLatLocation,
        lngLocation,
        setLngLocation,
        ageConsent,
        setAgeConsent,
        isDisabled,
        handleSignup,
        loading,
        setLoading
    };
};