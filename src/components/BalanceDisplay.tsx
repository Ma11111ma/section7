// BalanceDisplay.tsx
// 現在の残高を表示するコンポーネント
// API で取得する予定だが、ここでは固定値を表示する（例: 100,000 円）

export default function BalanceDisplay() {
    return (
      <div className="p-4 bg-white shadow rounded-lg text-center">
        {/* 固定の残高表示 */}
        <p className="text-gray-700 text-lg">現在の残高:</p>
        <p className="text-2xl font-bold text-green-600">100,000 円</p>
      </div>
    );
  }
  