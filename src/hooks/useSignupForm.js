import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUpSchema } from "@/validation";
import { z } from "zod";

export default function useSignupForm(destination) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [cityLocation, setCityLocation] = useState(null);
  const [latLocation, setLatLocation] = useState(null);
  const [lngLocation, setLngLocation] = useState(null);
  const [ageConsent, setAgeConsent] = useState(false);
  const [errors, setErrors] = useState({});

  const nextPage = () => {
    return destination ? `/${destination}` : "/";
  };
  const validateStepOne = () => {
    const result = signUpSchema
      .pick({
        email: true,
        fullName: true,
        password: true,
      })
      .safeParse({
        email,
        fullName,
        password,
      });

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
    } else {
      setErrors({});
    }

    return result.success;
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      signUpSchema.parse({
        email,
        fullName,
        password,
        ageConsent,
        cityLocation,
        latLocation,
        lngLocation,
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            fullName,
            password,
            ageConsent,
            cityLocation,
            latLocation,
            lngLocation,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.data.success) {
          router.push(nextPage());
        } else {
          console.log("Error:", data.data.message);
        }
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        console.error("An error occurred:", error.message);
      }
      setLoading(false);
    }
  };

  const isDisabled = !fullName || !email || !password || loading;

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
    setLoading,
    errors,
    validateStepOne,
  };
}
