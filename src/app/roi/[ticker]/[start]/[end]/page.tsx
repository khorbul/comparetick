import { Metadata } from "next";
import roiData from "@/data/roiData.json";

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

export async function generateStaticParams() {
  return roiData.map(({ ticker, start, end }) => ({ ticker, start, end }));
}

export default function Page({ params }: Props) {
  const { ticker, start, end } = params;

  const match = roiData.find(
    (entry) =>
      entry.ticker === ticker &&
      entry.start === start &&
      entry.end === end
  );

  if (!match) {
    return (
      <main className="min-h-screen p-8 text-red-600">
        <h1 className="text-3xl font-bold">Data Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">
        {ticker.toUpperCase()} Return from {start} to {end}
      </h1>
      <p className="text-xl mb-2">
        Investing $10,000 in {start} would result in:
      </p>
      <p className="text-3xl font-semibold text-green-600">
        {match.roi} Return
      </p>
    </main>
  );
}