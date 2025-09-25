"use client";

import { useState } from "react";

type WeightInputFormProps = {
  setBalance: (value: number) => void; // 親の state 更新関数
};

export default function WeightInputForm({ setBalance }: WeightInputFormProps) {
  const [weight, setWeight] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const numericWeight = Number(weight);
    if (!weight || isNaN(numericWeight)) {
      alert("体重を正しく入力してください");
      return;
    }

    try {
      const res = await fetch("/api/weight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weight: numericWeight }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.error || "送信に失敗しました");
        return;
      }

      const data = await res.json();
      console.log("API Response:", data);

      // balance が取得できれば state を更新
      if (data.balanceInfo?.balances?.[0]?.balance) {
        setBalance(Number(data.balanceInfo.balances[0].balance));
      }

      // 入力フォームをリセット
      setWeight("");
    } catch (error) {
      console.error("API 呼び出し中にエラーが発生:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="今日の体重"
        className="border p-2 rounded mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        送信
      </button>
    </form>
  );
}
