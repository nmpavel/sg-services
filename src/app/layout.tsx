import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

// Headings: rounded geometric sans (Poppins). Body: humanist sans (Inter).
// Substitution documented in README — exact Figma font family unconfirmed.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RemoteRecruit — The First Fully Global Job Board",
  description:
    "RemoteRecruit connects the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. No paywalls, no fees, no barriers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} antialiased`}
    >
      {/* suppressHydrationWarning: some browser extensions inject attributes
          (e.g. cz-shortcut-listen) onto <body> before React hydrates, which
          would otherwise trigger a spurious hydration mismatch warning. */}
      <body
        className="min-h-screen overflow-x-hidden bg-surface"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
