import Image from "next/image";

type Props = {
  weightDiff: number | null;
  balanceDiff: number | null;
  imageSrc: string;
};

export default function StatusDisplay({
  weightDiff,
  balanceDiff,
  imageSrc,
}: Props) {
  // 小数点第一位まで表示
  const formattedWeightDiff = weightDiff?.toFixed(1);

  return (
    <div className="mt-6 text-center">
      {/* メッセージ表示エリア */}
      <div className="h-12">
        {/* 体重のメッセージ */}
        {weightDiff !== null && weightDiff > 0 && (
          <p className="text-xl font-bold text-red-500">
            {formattedWeightDiff}kg増えました...
          </p>
        )}
        {weightDiff !== null && weightDiff < 0 && (
          <p className="text-xl font-bold text-blue-500">
            {/* マイナス記号を消すために Math.abs を使用 */}
            {Math.abs(Number(formattedWeightDiff))}kgやせました！
          </p>
        )}

        {/* 残高のメッセージ */}
        {balanceDiff !== null && balanceDiff > 0 && (
          <p className="text-xl font-bold text-green-600">
            残高が＋{balanceDiff.toLocaleString()}円増えました！
          </p>
        )}
      </div>

      {/* キャラクター画像表示エリア */}
      <div className="mt-4">
        <Image
          src={imageSrc}
          alt="キャラクター"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
