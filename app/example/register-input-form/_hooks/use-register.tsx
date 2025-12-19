// "use client";
// import {useState, ChangeEvent} from "react";
// import { RegisterFormTask } from "./use-register";
// import { useRegister } from "./_hooks/use-register";

// export default function Page() {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
//         setUsername(e.target.value);
//     }   
//     const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);

//     }
//     const handlePassword =(e: ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);

//     }
//     const handlePasswordConfirm =(e: ChangeEvent<HTMLInputElement>) =>{
//         setConfirmPassword(e.target.value);
//     }
//     const handleSubmit =() =>{
//         if (password ! === confirmPassword) {
//             alert("password do not match");
//             return;
//         }
//         alert(`Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);

//     }
//     return (
//         <div>
//             <div>
//                 <label>Username:</label>
//                 <input type="text" value={username} onChange={handleUsername} className="border p-2 m-2"/>
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input type="email" value={email} onChange={handleEmail} className="border p-2 m-2"/>
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input type="password" value={password} onChange={handlePassword} className="border p-2 m-2"/>
//             </div>
//             <div>
//                 <label>Confirm Password:</label>
//                 <input type="password" value={confirmPassword} onChange={handlePasswordConfirm} className="border p-2 m-2"/>
//             </div>
//             <button onClick={handleSubmit} className="border p-5 bg-green-500 text-white rounded">Register</button>
//         </div>
//     );
// }