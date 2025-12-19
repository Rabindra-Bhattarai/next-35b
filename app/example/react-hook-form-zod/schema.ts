import z from "zod";

export const loginSchema = z.object(
    {
        email: z.email({message:"Email is required"}),
        password: z.string().min(6,{message:"Passwoed pugena"})
    }
)
    export type LoginForm= z.infer<typeof loginSchema>;