import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";

import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskFlow – Agile Project Management Tool",
  description:
    "TaskFlow is a modern project management tool with real-time collaboration, task tracking, agile workflows, and team productivity features.",
  keywords: [
    "TaskFlow",
    "project management",
    "agile project management",
    "Jira alternative",
    "scrum tool",
    "kanban board",
    "team collaboration",
    "task tracking",
    "workflow management",
    "real-time project tool",
  ],
  authors: [{ name: "Kanad Shee" }],
  creator: "Kanad Shee",
  publisher: "Kanad Shee",
  metadataBase: new URL("https://taskflow-agile-pm.vercel.app"),
  openGraph: {
    title: "TaskFlow – Agile Project Management Tool",
    description:
      "Manage projects efficiently with TaskFlow. Real-time collaboration, task tracking, agile boards, and workflow automation – all in one place.",
    url: "https://taskflow-agile-pm.vercel.app",
    siteName: "TaskFlow",
    images: [
      {
        url: "https://taskflow-agile-pm.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "TaskFlow – Agile Project Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskFlow – Agile Project Management Tool",
    description:
      "An agile project management with real-time collaboration, kanban boards, and task tracking.",
    images: ["https://taskflow-agile-pm.vercel.app/og-image.png"],
    creator: "@Kanad_Shee",
  },
  alternates: {
    canonical: "https://taskflow-agile-pm.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${inter.className} antialiased min-h-screen`}>
          <QueryProvider>
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  backgroundColor: "rgb(129, 122, 255)",
                  background:
                    "linear-gradient(90deg, rgb(129, 122, 255, 1) 82%, rgba(235,235,237,0.85) 100%)",
                  border: "none",
                  color: "#ffffff",
                },
              }}
              className={`${inter.className} font-semibold`}
            />
            {children}
            <Analytics />
          </QueryProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
