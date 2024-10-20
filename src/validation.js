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
        message: "Password must be at least 8 characters long and include at least one uppercase letter, one special character, and one number",
    }),
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().refine(isPasswordValid, {
        message: "Password must be at least 8 characters long and include at least one uppercase letter, one special character, and one number",
    }),
});

export const createMeetingSchema = z.object({
    title: z.string().min(1, "Title is required."),
    description: z.string().min(1, "Description is required."),
    date_of_meeting: z.string().min(1, "Date of meeting is required."),
    time_of_meeting: z.string().min(1, "Time of meeting is required."),
    duration: z.string().min(1, "Duration is required"),
    capacity: z.number().min(1, "At least 1 person required"),
    banner: z.string().refine((base64) => 
        {
            return /^data:image\/(png|jpeg|webp|gif);base64,/.test(base64);
        },
        {
            message: "A valid  image must be uploaded",
        }
    ),
    location: z.string().min(1, "Location is required"),
    location_details: z.string().min(1, "Venue description is required"),
});
