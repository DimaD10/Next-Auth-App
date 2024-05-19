import { type Metadata } from "next";

export const baseMetadata: Metadata = {
  title: "Auth App",
  description: "Simple authentication app with Google and Microsoft",
  openGraph: {
    title: "Auth App",
    description: "Simple authentication app with Google and Microsoft",
  },
  icons: {
    icon: [
        "/favicon.ico?v=4",
    ],
    apple: [
        "/apple-touch-icon.png?v=4",
    ],
    shortcut: [
        "/apple-touch-icon.png",
    ],
  },
  manifest: "/site.webmanifest",
};
