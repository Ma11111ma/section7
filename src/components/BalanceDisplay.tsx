type BalanceDisplayProps = {
  balance: number | null; // 親コンポーネントから受け取る
};

export default function BalanceDisplay({ balance }: BalanceDisplayProps) {
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-lg font-semibold">現在の残高</h2>
      {/* balance が null なら「読み込み中」と表示 */}
      <p className="text-2xl font-bold">
        {balance !== null ? `${balance.toLocaleString()} 円` : "読み込み中..."}
      </p>
    </div>
  );
}
