import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DentalPro Premium",
  description: "Premium dental clinic booking and care experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
