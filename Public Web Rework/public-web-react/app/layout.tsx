import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHIME/FRB Public Web",
  description: "Fast Radio Bursts in Realtime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center align-center min-h-screen text-center bg-zinc-100 max-w-screen">
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
