import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // 共有化したprismaをインポート

// POSTリクエストを処理するための関数
export async function POST(request: Request) {
  console.log("--- API /api/weight CALLED ---"); // ★追加1
  try {
    // 1: リクエストのボディからJsonデータ取得する
    const body = await request.json();
    const { weight } = body; // bodyの中からweightの値を取り出す
    console.log("Request body parsed:", body); // ★追加2

    // 2: バリデーション
    if (!weight || typeof weight !== "number") {
      return NextResponse.json(
        { error: "Weightが送られていないか、数値で入力されていません" },
        { status: 400 }
      );
    }
    console.log("Attempting to create record in DB..."); // ★追加3
    // 3: Prismaを使ってDBに体重を新規作成する
    const newWeightLog = await prisma.weightLog.create({
      data: {
        weight: weight, // 受け取ったweightの値を設定
      },
    });

    console.log("Successfully created record:", newWeightLog); // ★追加4

    // 4: 作成した体重データをフロントエンドに返す
    return NextResponse.json(newWeightLog, { status: 201 });
  } catch (error) {
    console.error("!!! ERROR IN POST /api/weight:", error); // ★追加5
    // 5：予期せぬエラーが起きた時
    console.error(error); // サーバー側のログにエラーを出力
    return NextResponse.json(
      { error: "予期せぬエラーが起きました" },
      { status: 500 }
    );
  }
}
