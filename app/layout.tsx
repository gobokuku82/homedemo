import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamagent.example"),
  title: "DreamAgent — The expert is you.",
  description:
    "DreamAgent deploys specialized AI agents built for your industry — with human-in-the-loop control at every step. You see every action, approve every decision.",
  openGraph: {
    title: "DreamAgent — The expert is you.",
    description:
      "Specialized AI agents for marketing, counseling and pharma sales — with human-in-the-loop control at every step.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+KR:wght@300;400;500;700&family=Zen+Kaku+Gothic+New:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
