// app/api/weight/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("サーバーで受け取った体重:", body.weight);

  return NextResponse.json({ message: "体重を受け取りました", weight: body.weight });
}
