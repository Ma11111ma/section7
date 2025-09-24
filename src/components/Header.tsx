// Header.tsx
// アプリのタイトルを表示するだけのヘッダーコンポーネント
// TailwindCSS を使ってデザインを整える（固定テキスト）

export default function Header() {
    return (
      <header className="bg-blue-600 text-white p-4 shadow-md">
        {/* アプリ名（仮） */}
        <h1 className="text-xl font-bold">マネーフィット</h1>
      </header>
    );
  }
  