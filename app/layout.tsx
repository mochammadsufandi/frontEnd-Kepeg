"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./lib/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
