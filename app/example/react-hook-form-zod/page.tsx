"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { LoginForm, loginSchema } from "./schema";
// import needed from assets nder app

import image2 from "@/app/assets/image2.jpg";

// to insure that image is bundled and available at build 

import Image from "next/image"
// auto optimized image compinent, nesxtjs recommended

// use this instead of <img> tag





// export const loginSchema = z.object(
//     {
//         email: z.email({message:"Email is required"}),
//         password: z.string().min(6,{message:"Passwoed pugena"})
//     }
// )

    // export type LoginForm= z.infer<typeof loginSchema>;
    export default function Page() {
        const {register, handleSubmit, formState: {errors,isSubmitting}} = useForm<LoginForm>(
            {
                resolver: zodResolver(loginSchema),
            values:{ email: "xyz", password:"abc"} // initials
            }
        )

        const onSubmit = async (data: LoginForm)=>{
            alert(data.email)
        }


        return (
            <div>
                {/* height, width optional for assets import */}
                <Image src={image2} alt={"image"}/>
                {/* height, width is required for publoc, omit "piblic" on path/src**/}
                <Image src="/images/image1.jpg" height={100} width={100} alt={"Image1"}></Image>
                <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-2 max-w xl border">
                <div className="mt-2">
                    <label>Username</label>
                    <input { ...register("email")}/>
                    {
                        errors.email && // conditional rendering
                        <span className="text-red-500">{errors.email.message}</span>
                    }
                </div>
                <button type="submit" className="p-2 bg-green-500">Submit</button>
            </form>
        </div>
            </div>
        );
    }