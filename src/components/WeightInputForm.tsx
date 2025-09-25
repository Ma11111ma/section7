"use client";

import { useState } from "react";

export default function WeightInputForm() {
  const [weight, setWeight] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // 前のエラーをリセット
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/weight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ weight }),
      });

      if (!response.ok) {
        throw new Error("API通信に失敗しました");
      }

      const data = await response.json();
      console.log("API 成功:", data);

      setWeight(""); // 入力欄をリセット
    } catch (error) {
      console.error("API 呼び出しエラー:", error);
      setErrorMessage("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        step="0.1"
        placeholder="体重を入力"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 rounded w-full"
        disabled={isSubmitting}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 rounded text-white ${
          isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isSubmitting ? "記録中..." : "記録する"}
      </button>

      {/* エラーメッセージ表示 */}
      {errorMessage && (
        <p className="text-red-500 font-medium">{errorMessage}</p>
      )}
    </form>
  );
}
