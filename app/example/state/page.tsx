"use client";
//user intractivity/states


import {useEffect, useState} from "react";
export default function Page() {
    const [count, setCount] = useState(1);
    //state hooks
    //[value, setter func]
    //state is variable that re-renders the component when changed
    //when count chnages, component using "count" re-renders
    const handlePlus = () => {
        setCount(count + 1);
    }

    //dependency check 
    useEffect(() => {
        alert("Component mounter");
    }, []);

    useEffect(() => {
        if (count ===0) {
            alert("Count is zero");
        }
    }, [count]); //every time count chnages, this function runs
    //[count , var2,...] muliple dependencies can be watched



    return (
        //re-render this when state chnages
        <div>
            <div>Count: {count}</div>
            <button onClick={handlePlus} className="border p-5 bg-blue-500 text-white rounded">+</button>
            <button onClick={() => setCount(count - 1)} className="border p-5 bg-blue-500 text-white rounded">-</button>
        </div>
    );
}