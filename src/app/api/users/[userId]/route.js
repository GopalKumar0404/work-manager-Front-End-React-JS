import { NextResponse } from "next/server";


export function DELETE(request,{params}){ // params indicating the uri varailbe passed dynamically
    console.log(params);
    const {userId} = params;
    console.log("userId", userId);
    return NextResponse.json({
        message:"Deleted",
    });
}