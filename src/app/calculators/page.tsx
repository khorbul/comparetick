import Link from "next/link";

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Investment Calculators</h1>
      <p className="mb-6 text-lg text-gray-700">
        Use our calculators to estimate stock returns, CAGR, and compound growth.
      </p>
      <ul className="space-y-4">
        <li>
          <Link href="/roi/aapl/2010/2024" className="text-blue-600 underline">
            📈 ROI Calculator (Try AAPL)
          </Link>
        </li>
        <li className="text-gray-400">📊 CAGR Calculator (Coming Soon)</li>
        <li className="text-gray-400">🧮 Compound Interest Calculator (Coming Soon)</li>
      </ul>
    </main>
  );
}