"use server"; //optional
import { redirect } from "next/navigation";

export async function loginAction(username: string) {
    if (!username ){
        throw new Error("Username is required");
    }
    if (username === "admin") {
        redirect("/example/input-form");
    }else{
        redirect("/example/state");
    }
}


//classroom task
//create a new url-path for example/order
// /example/orders/success -> "Display Success"
// /exmaple/orders/failure ->"Display Failure"
// /example/orders/unauthorized -> displau unauthorized
// on /example/orders
//input for "status", "price" with states
//make 2 button apply and next
// on "apply" button
// use client side rediret to check if price is below 0
//if below redirect to /example/orders/authorized
// on "next" button
//use serverside redirect to check if status is "active", "inactive"
//if active redirect to  "/example/orders/success"
//if inactive redirect to  "/example/orders/failure"
//if empty or not "active/inactive" - Display error message
//make use of useTransition in every "redirect"