import type { Metadata } from "next";
import "./globals.css";
import {UserProvider} from "@auth0/nextjs-auth0/client"
import React from "react";

export const metadata: Metadata = {
  title: "Flow",
  description: "Control your money flow",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
      </html>
  );
}
