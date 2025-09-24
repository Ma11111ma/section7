// src/app/page.tsx

import Header from "@/components/Header";
import BalanceDisplay from "@/components/BalanceDisplay";
import WeightInputForm from "@/components/WeightInputForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-md mx-auto mt-6 space-y-6">
        <BalanceDisplay />
        <WeightInputForm />
      </div>
    </main>
  );
}
