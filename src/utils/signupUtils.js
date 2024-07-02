import { signUpSchema } from '@/validation';

export const validateStepOne = (formData, setErrors) => {
    const result = signUpSchema
        .pick({
            email: true,
            fullName: true,
            password: true,
        })
        .safeParse({
            email: formData.email,
            fullName: formData.fullName,
            password: formData.password,
        });

    if (!result.success) {
        setErrors(result.error.flatten().fieldErrors);
    } else {
        setErrors({});
    }

    return result.success;
};