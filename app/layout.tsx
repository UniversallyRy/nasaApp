"use client";

import HeaderNav from "../components/NavBar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
