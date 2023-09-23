import { NextResponse } from "next/server";

export function GET(reqeust,{params}){
    console.log(params);

    const {userId,postId} = params;
    // const {postId} = params;

    console.log("userId: ",userId," postId: ",postId)

    return NextResponse.json(params,{status:203})
}