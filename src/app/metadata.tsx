import { type Metadata } from "next";

export const baseMetadata: Metadata = {
  title: "Auth App",
  description: "Simple authentication app with Google and Microsoft",
  openGraph: {
    title: "Auth App",
    description: "Simple authentication app with Google and Microsoft",
  },
  icons: {
    icon: ["@/public/meta/favicon.ico?v=4"],
    apple: ["@/public/meta/apple-touch-icon.png?v=4"],
    shortcut: ["@/public/meta/apple-touch-icon.png"],
  },
};


export const Head = () => {
    return (
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png"/>
            <link rel="manifest" href="/meta/site.webmanifest"/>
            <link rel="mask-icon" href="/meta/safari-pinned-tab.svg" color="#76b72a"/>
            <meta name="msapplication-TileColor" content="#3c3c3b"/>
            <meta name="theme-color" content="#ffffff"/>
        </head>
    );
};
