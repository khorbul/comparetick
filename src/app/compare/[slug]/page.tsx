export default function CompareTopstepVsApex() {
    return (
      <main className="min-h-screen p-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">TopStep vs Apex</h1>
        <p className="text-lg mb-4">
          Compare funding rules, payout splits, evaluation periods, and pricing to find the best prop firm.
        </p>
  
        <ul className="list-disc ml-6 mb-6">
          <li>✅ TopStep: Longer evaluation, cleaner UI</li>
          <li>✅ Apex: Faster payouts, cheaper monthly plans</li>
        </ul>
  
        <div className="space-y-2">
          <a href="https://www.topstep.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
            Try TopStep →
          </a>
          <a href="https://apextraderfunding.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-4 py-2 rounded">
            Try Apex →
          </a>
        </div>
      </main>
    );
  }