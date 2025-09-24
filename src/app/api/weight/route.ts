import { NextResponse } from "next/server";

// POSTリクエストを処理するための関数
export async function POST(request: Request) {
  // 現時点では、どんなリクエストが来ても
  // 「APIは正常に動いています！」というJSONを返すだけ
  return NextResponse.json({ message: "API is working correctly!" });
}
