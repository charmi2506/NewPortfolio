import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charmi Gubbala | Software Engineer",
  description:
    "Charmi Gubbala — Software Engineering undergraduate building full-stack, real-time and AI-powered applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}