import { Metadata } from "next";

type Props = {
  params: { ticker: string; start: string; end: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const { ticker, start, end } = params;
  return {
    title: `${ticker.toUpperCase()} ROI from ${start} to ${end}`,
    description: `Calculate return on investment for ${ticker.toUpperCase()} from ${start} to ${end}`,
  };
}

export default function Page({ params }: Props) {
  const { ticker, start, end } = params;

  // Replace with actual ROI formula later
  const dummyROI = "372%";

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        {ticker.toUpperCase()} Return from {start} to {end}
      </h1>
      <p className="text-xl mb-2">Investing $10,000 in {start} would result in:</p>
      <p className="text-3xl font-semibold text-green-600">{dummyROI} Return</p>
    </main>
  );
}