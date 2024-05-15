import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ask Ullama Sahiba — Online Platform for Islamic QA",
  description: "Online Platform for Islamic QA. Here you can find different questions asked by people arround the globe and replied by famous Ullama Sahiba..",
  keywords: ['Ask Ullama Sahiba', 'Ullama', "Islamic Scholars", "Islamic QA", "Islamic Questions & answers"],
  icons: [
    "/assets/images/favicon.png"
  ],
  authors: [
    // FIX: FIX THE CHANNEL NAME
    {name: "Assim al Hakeem", url: "https://youtube.com/channelname"},
    {name: "S5 SAJID", url: "https://s5sajid.github.io"},
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="dZRCkzgnNwmocmkNFYcH-Ehjdet8g0l8My4ndaeOGAs" />
      </head>
      <body >{children}</body> {/** REMOVED `className={inter.className}` */}
    </html>
  );
}
