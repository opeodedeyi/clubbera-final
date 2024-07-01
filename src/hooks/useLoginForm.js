import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/validation";
import { z } from "zod";

export default function useLoginForm(destination) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const nextPage = () => {
    return destination ? `/${destination}` : "/";
  };

  const submitLogin = async () => {
    try {
      const data = {
        email,
        password,
      };

      loginSchema.parse(data);

      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const data = await response.json();

        if (data.error) {
          setErrors({ general: data.error });
        } else {
          router.push(nextPage());
        }
      } else {
        const errorData = await response.json();
        setErrors({ general: errorData.message || "An error occurred" });
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
