'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUpSchema } from '@/validation';
import { z } from 'zod';
import { signupAction } from '@/app/actions/signupAction';
import { validateStepOne } from '@/utils/signupUtils';


export function useSignupForm(destination = "") {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        password: '',
        cityLocation: null,
        latLocation: null,
        lngLocation: null,
        ageConsent: false,
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target ? e.target : e;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSignup = async () => {
        try {
            setLoading(true);
            signUpSchema.parse(formData);

            const result = await signupAction(formData);
            console.log('API Response:', result);

            if (result.success) {
                router.push(destination);
            } else {
                setErrors({ general: result.error });
                console.log('Signup Error:', result.error);
                router.push(`/signup?step=userDetails${destination ? `&destination=${destination}` : ''}`);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = {};
                error.errors.forEach((err) => {
                    fieldErrors[err.path[0]] = err.message;
                });
                setErrors(fieldErrors);
            } else {
                setErrors({ form: error.message });
            }
        } finally {
            setLoading(false);
        }
    };

    const isDisabled = !formData.fullName || !formData.email || !formData.password || loading;

    return {
        formData,
        handleInputChange,
        isDisabled,
        handleSignup,
        loading,
        errors,
        validateStepOne: () => validateStepOne(formData, setErrors),
    };
}