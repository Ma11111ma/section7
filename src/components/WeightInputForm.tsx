// WeightInputForm.tsx
// 体重を入力するフォームコンポーネント
// 実際には API に送信するが、今回は静的なフォームとして実装する
// ボタンを押しても何も起きない（見た目だけ）

export default function WeightInputForm() {
    return (
      <form className="p-4 bg-gray-50 shadow rounded-lg">
        {/* ラベル */}
        <label htmlFor="weight" className="block text-gray-700 mb-2">
          今日の体重を入力してください
        </label>
  
        {/* 入力欄 */}
        <input
          id="weight"
          type="number"
          step="0.1"
          placeholder="例: 75.5"
          className="w-full border border-gray-300 rounded p-2 mb-4"
        />
  
        {/* 送信ボタン */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          記録する
        </button>
      </form>
    );
  }
  