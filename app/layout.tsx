import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandil Hetti Arachchige | High Jump Recruit",
  description:
    "Sandil Dilmeth Hetti Arachchige — Sri Lankan high jump recruit, personal best 2.01 m, Class of 2027.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
