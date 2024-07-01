import { z } from "zod";
export const isPasswordValid = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
};
export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Full name is required" })
    .max(100, { message: "Full name must be less than 100 characters" }), 
  ageConsent: z.boolean().refine((value) => value === true, {
    message: "You must consent to age requirement",
  }),
  email: z.string().email(),
  password: z.string().refine(isPasswordValid, {
    message:
      "Password must be at least 8 characters long and include at least one uppercase letter, one special character, and one number",
  }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().refine(isPasswordValid, {
    message:
      "Password must be at least 8 characters long and include at least one uppercase letter, one special character, and one number",
  }),
});
