export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-black">
        Smarter Trading Starts Here.
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        CompareTick is your go-to resource for analyzing historical investment returns, comparing trading tools, and making smarter capital decisions — fast.
      </p>

      <div className="space-y-4 mb-10">
        <a
          href="/roi/aapl/2010/2024"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700"
        >
          Try the ROI Calculator →
        </a>
        <p className="text-sm text-gray-500">Example: AAPL from 2010 to 2024</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="/compare/topstep-vs-apex"
          className="block border p-4 rounded hover:shadow-md"
        >
          <h2 className="text-xl font-semibold">Topstep vs Apex</h2>
          <p className="text-sm text-gray-600 mt-2">
            Which prop firm is right for you? Side-by-side breakdown.
          </p>
        </a>

        <a
          href="/review/bookmap"
          className="block border p-4 rounded hover:shadow-md"
        >
          <h2 className="text-xl font-semibold">Bookmap Review</h2>
          <p className="text-sm text-gray-600 mt-2">
            Deep dive into Bookmap’s features, pros, cons, and pricing.
          </p>
        </a>
      </div>
    </main>
  );
}