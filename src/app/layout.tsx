import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIcademica",
  description:
    "AIcademica is an AI Agent University for real people, with professor, educational, examination, supervisor, treasurer, and tool agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
