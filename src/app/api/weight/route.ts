// app/api/weight/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // 共有化したprismaをインポート
import { getBalance } from "@/lib/gmo-api";

// POSTリクエストを処理するための関数
export async function POST(request: Request) {
  console.log("=== api/weightを呼んでいます ==="); // ★追加1
  try {
    // 1: リクエストのボディからJsonデータ取得する
    const body = await request.json();
    const { weight } = body; // bodyの中からweightの値を取り出す(ここではまだstringかも)
    console.log("Request body parsed:", body);

    // バリデーション：weightが存在するかまずチェック
    if (weight === undefined || weight === null) {
      return NextResponse.json(
        { error: "Weightの入力が必要です." },
        { status: 400 }
      );
    }

    //数値型に変換する
    const numericWeight = parseFloat(String(weight));

    // 数値変換チェック
    if (isNaN(numericWeight)) {
      return NextResponse.json(
        { error: "Weight must be a valid number." },
        { status: 400 }
      );
    }
    console.log("Attempting to create record in DB..."); // ★追加3

    // Prismaを使ってDBに体重を新規作成する
    const newWeightLog = await prisma.weightLog.create({
      data: {
        weight: numericWeight, // 受け取ったweightの値を設定
      },
    });

    console.log("Successfully created record:", newWeightLog); // ★追加4
    // ★★★ここからテスト用のコードを追加★★★
    console.log("=== GMO API呼び出し中===");

    //銀行APIから残高取得
    const gmoResponse = await getBalance();
    console.log("GMO API Response:", gmoResponse);

    //フロントに返すデータを整形
    const responseData = {
      saveWeight: newWeightLog,
      balanceInfo: gmoResponse,
    };

    // 4: 作成した体重データをフロントエンドに返す
    return NextResponse.json(responseData, { status: 201 });
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
