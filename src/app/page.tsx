"use client"; // ← Next.js でクライアントサイドのコンポーネントに必須

import { useState } from "react";

export default function WeightInputForm() {
  const [weight, setWeight] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/weight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ weight }), // 入力値を API仕様通り送信
      });

      const data = await response.json(); // レスポンスを JSON として取得
      console.log("APIレスポンス:", data);
    } catch (error) {
      console.error("API送信エラー:", error);
    }
  };

  return (
    <form className="p-4 bg-gray-50 shadow rounded-lg" onSubmit={handleSubmit}>
      <label htmlFor="weight" className="block text-gray-700 mb-2">
        今日の体重を入力してください
      </label>

      <input
        id="weight"
        type="number"
        step="0.1"
        placeholder="例: 75.5"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 mb-4"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
      >
        記録する
      </button>
    </form>
  );
}
