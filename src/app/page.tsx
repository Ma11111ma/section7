"use client";

import { useState } from "react";
import BalanceDisplay from "@/components/BalanceDisplay";
import WeightInputForm from "@/components/WeightInputForm";

export default function Page() {
  // 残高を保持する state
  const [balance, setBalance] = useState<number | null>(null);

  return (
    <div className="p-4">
      {/* BalanceDisplay に残高を渡す */}
      <BalanceDisplay balance={balance} />

      {/* WeightInputForm に setBalance を渡す */}
      <WeightInputForm setBalance={setBalance} />
    </div>
  );
}
