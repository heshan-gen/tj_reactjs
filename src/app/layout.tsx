import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "topjobs",
  description: "topjobs sri lanka Job Network - most popular online job site in Sri Lanka for jobs, careers, recruitment and employment with recruitment automation for employers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon link here */}
        <link rel="icon" href="favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
