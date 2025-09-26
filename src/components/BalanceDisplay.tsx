type BalanceDisplayProps = {
  balance: number | null; // 親コンポーネントから受け取る
  currentWeight: number | null;
};

export default function BalanceDisplay({
  balance,
  currentWeight,
}: BalanceDisplayProps) {
  return (
    // ★★★ この開き括弧と... ★★★
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center mb-6">
      <div className="flex justify-around items-center">
        {/* 残高エリア */}
        <div>
          <h2 className="text-lg font-medium text-gray-600 mb-2">現在の残高</h2>
          <p className="text-4xl font-bold text-gray-800">
            {balance !== null ? `${balance.toLocaleString()} 円` : "---"}
          </p>
        </div>

        {/* 体重表示エリア */}
        <div>
          <h2 className="text-lg font-medium text-gray-600 mb-2">現在の体重</h2>
          <p className="text-4xl font-bold text-gray-800">
            {currentWeight !== null ? `${currentWeight.toFixed(1)} kg` : "---"}
          </p>
        </div>
      </div>
    </div>
  );
}
