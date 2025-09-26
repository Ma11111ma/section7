"use client";

import { useState } from "react";
import BalanceDisplay from "@/components/BalanceDisplay";
import WeightInputForm from "@/components/WeightInputForm";
import StatusDisplay from "@/components/StatusDisplay";

export default function Page() {
  // 残高の初期値を300,000円に設定
  const initialBalance = 300000;
  const [balance, setBalance] = useState<number | null>(initialBalance);

  //  体重を管理するためのstateを追加（初期値: 80.0）
  const [currentWeight, setCurrentWeight] = useState<number>(80.0);

  //差額と画像管理のstate
  const [weightDiff, setWeightDiff] = useState<number | null>(null);
  const [balanceDiff, setBalanceDiff] = useState<number | null>(null);
  const [characterImage, setCharacterImage] = useState("/images/normal.png");

  return (
    <div className="p-4">
      {/* BalanceDisplay に残高とメッセージを渡す */}
      <BalanceDisplay balance={balance} currentWeight={currentWeight} />

      {/* WeightInputForm に必要な情報をすべて渡す */}
      <WeightInputForm
        currentWeight={currentWeight} // WeightInputFormに現在の体重を渡す
        setCurrentWeight={setCurrentWeight}
        initialBalance={initialBalance}
        setBalance={setBalance}
        // ② 差額と画像を更新するための関数を渡す
        setWeightDiff={setWeightDiff}
        setBalanceDiff={setBalanceDiff}
        setCharacterImage={setCharacterImage}
      />
      {/* 新しいコンポーネントを呼び出す */}
      <StatusDisplay
        weightDiff={weightDiff}
        balanceDiff={balanceDiff}
        imageSrc={characterImage}
      />
    </div>
  );
}
