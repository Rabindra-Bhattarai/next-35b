"use client";
import {useState, ChangeEvent} from "react";
import { useLoginForm } from "./hooks/use-login";   
export default function Page() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.target.value);
        //e-event, target - element, value - current value of input
   // }
    const {
        email, password,
        handleEmail, handlePassword, handleSubmit   
    } = useLoginForm();// destructuring hook object
    
    const form = useLoginForm(); //entrire hook object

    return (
        <div>
            <div>
                <label>Email:</label>
                <input type="email" value={form.email} onChange={form.handleEmail} className="border p-2 m-2"/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={form.password} onChange={form.handlePassword} className="border p-2 m-2"/>
            </div>
            <button onClick={form.handleSubmit} className="border p-5 bg-green-500 text-white rounded">Test</button>
        </div>
    );
}


