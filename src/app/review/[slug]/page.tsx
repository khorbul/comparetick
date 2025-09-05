export default function Page() {
    return (
      <main className="min-h-screen p-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Bookmap Review (2024)</h1>
        <p className="mb-4 text-lg text-gray-700">
          Bookmap is a market depth and liquidity heatmap tool used by scalpers and futures traders. Here's what you need to know.
        </p>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">✅ Pros</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Real-time liquidity visualization</li>
          <li>Great for order flow and volume profile traders</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-6 mb-2">❌ Cons</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Steeper learning curve</li>
          <li>Monthly cost higher than most charting tools</li>
        </ul>
  
        <a href="https://bookmap.com" target="_blank" className="inline-block bg-black text-white px-4 py-2 rounded">
          Try Bookmap → Affiliate Link
        </a>
      </main>
    );
}