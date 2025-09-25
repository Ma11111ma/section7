"use client";  // ← これを必ず最初に書く

import { useState } from "react";

export default function WeightInputForm() {
  const [weight, setWeight] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("入力された体重:", weight);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="体重を入力"
        className="border p-2"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
        記録する
      </button>
    </form>
  );
}
