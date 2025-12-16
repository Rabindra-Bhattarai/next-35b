"use client";
import {useState, ChangeEvent} from "react";
export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        //e-event, target - element, value - current value of input
    }
    return (
        <div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmail} className="border p-2 m-2"/>
            </div>
            <button onClick={() => alert(`Email: ${email}, Password: ${password}`)} className="border p-5 bg-green-500 text-white rounded">Test</button>
        </div>
    );
}