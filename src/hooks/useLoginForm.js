'use client';

import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/validation";
import { loginAction } from "@/app/actions/loginAction";


export default function useLoginForm(destination = "") {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const submitLogin = async () => {
        try {
            const data = { email, password };
            loginSchema.parse(data);

            setLoading(true);
            const result = await loginAction(email, password);

            if (result.success) {
                router.push(destination || "/");
            } else {
                setErrors({ general: result.error });
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = {};
                error.errors.forEach((err) => {
                    fieldErrors[err.path[0]] = err.message;
                });
                setErrors(fieldErrors);
            } else {
                setErrors({
                    general: "An unexpected error occurred. Please try again.",
                });
            }
        } finally {
            setLoading(false);
        }
    };

    const isDisabled = !email || !password || loading;

    return {
        email,
        setEmail,
        password,
        setPassword,
        submitLogin,
        isDisabled,
        loading,
        errors,
    };
}