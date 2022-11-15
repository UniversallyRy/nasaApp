'use client'

import HeaderNav from "../components/NavBar";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-green-900" lang="en">
      <body className="px-3">
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}

