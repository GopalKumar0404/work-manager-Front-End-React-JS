import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";

connectDB();

// GET request function
export function GET() {
  const users = [
    { name: "Gopal Kumar", id: 1, email: "Gopal@demomail.com" },
    { name: "Gopal Kumar", id: 2, email: "Gopal@demomail.com" },
    { name: "Gopal Kumar", id: 3, email: "Gopal@demomail.com" },
    { name: "Raja Kumar", id: 4, email: "Gopal@demomail.com" }
    
  ];
  return NextResponse.json(users,{status:201, statusText:'Users'});
}


// POST request function
export function POST() {}

// PUT request fucntion
export function PUT() {}

// DELETE request function
export function DELETE(request) {
    console.log("Delete method called!!")
    return NextResponse.json({
        messsage:"User Deleted",
        status:true
    },{status:201, statusText:'Deleted'})
}
