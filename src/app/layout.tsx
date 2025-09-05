import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CompareTick – Trading Tools & ROI Calculators",
  description:
    "CompareTick helps you analyze investment returns, evaluate trading tools, and find the best platforms to grow your capital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <nav className="w-full border-b bg-white sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="/" className="text-xl font-semibold tracking-tight">
              CompareTick
            </a>
            <div className="space-x-4 text-sm font-medium">
              <a href="/calculators" className="hover:underline">
                Calculators
              </a>
              <a href="/compare/topstep-vs-apex" className="hover:underline">
                Compare
              </a>
              <a href="/review/bookmap" className="hover:underline">
                Reviews
              </a>
            </div>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-4 py-10">{children}</main>

        <footer className="border-t text-sm text-gray-500 py-6 text-center">
          &copy; {new Date().getFullYear()} CompareTick. All rights reserved.
        </footer>
      </body>
    </html>
  );
}