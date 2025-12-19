"use client";
import { useState, useTransition } from "react";
import { loginAction } from "./redirect-server/actions/login";


export default function Page() {

    const [username, setUsername] = useState("");
    const [isPending, startTransition] = useTransition();

    // const[username, setUsername] = useState("");
    // const handleSubmit =async()=> {
    //     try{
    //         await loginAction(username);
    //     }catch(err: Error | any){
    //         alert (err.message ?? "Unknown error");
    //     }   
        
    // }

    const handleSubmit = () => {
        startTransition (async () => {
            try{
                await new Promise (resolve => setTimeout (resolve, 2000)); //simulate delay
                await loginAction(username);
                
            }catch(err: Error | any){
                alert (err.message ?? "Form error");
            }   
        });
    };

    //navigation will be pending and wont block the UI
    //can use state isPending to show loading indicator

    return (
        <>
            <div className = "mx-auto max-w-md border p-4">
                <label>Username:</label>
                <input 
                    onChange ={(e) => setUsername (e.target.value)}></input>
            </div>
            <button 
                disabled={isPending}
                className="border p-5 bg-blue-500 text-white rounded mt-4"
                onClick={handleSubmit}>
                    {isPending ? "Logging in..." : "Submit"}
            </button>
        </>
    );
}