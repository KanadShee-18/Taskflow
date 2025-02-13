import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskFlow - Agile Project Management",
  description:
    "TaskFlow is a powerful Jira-like project management tool for teams, featuring real-time collaboration, task tracking, and agile workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen`}>
        <QueryProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                backgroundColor: "rgb(129, 122, 255)",
                background:
                  "linear-gradient(90deg, rgb(129, 122, 255, 0.65) 22%, rgba(211,210,218,0.25) 100%)",
                border: "none",
                color: "#13131c",
              },
            }}
            className={`${inter.className} font-semibold`}
          />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
