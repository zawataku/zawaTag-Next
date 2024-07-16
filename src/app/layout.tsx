import type { Metadata } from "next";
import 'leaflet/dist/leaflet.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "zawaTag",
  description: "ざわタグ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
