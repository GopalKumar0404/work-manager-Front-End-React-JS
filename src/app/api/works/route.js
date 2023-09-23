import { NextResponse } from "next/server";


// GET request function
export function GET(request) {
  return NextResponse.json(
    { message: "works data api called!!" },
    { status: 203 }
  );
}
