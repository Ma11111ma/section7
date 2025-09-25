"use client";

import { useState } from "react";

export default function WeightInputForm() {
  const [weight, setWeight] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // 入力値の確認
      console.log("入力値:", weight, "Number:", Number(weight));

      // 64以下なら音を鳴らす
      if (Number(weight) <= 64 && weight !== "") {
        console.log("チャリーン再生");
        const audio = new Audio("/sounds/coin.mp3");
        audio.play().catch((err) => console.error("音声再生エラー:", err));
      }

      // API通信
      const response = await fetch("/api/weight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weight }),
      });

      if (!response.ok) {
        throw new Error("API通信に失敗しました");
      }

      const data = await response.json();
      console.log("API Response:", data);

      // 成功したら入力欄をリセット
      setWeight("");
    } catch (err) {
      setError("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-green-50 border border-green-100">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
        体重を記録する
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          step="0.1"
          placeholder="体重を入力してください (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300"
          disabled={isSubmitting}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-xl font-semibold transition 
            ${
              isSubmitting
                ? "bg-green-200 text-green-600 cursor-not-allowed"
                : "bg-green-400 hover:bg-green-500 text-white shadow-md hover:shadow-lg"
            }`}
        >
          {isSubmitting ? "記録中..." : "記録する"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-center text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}
