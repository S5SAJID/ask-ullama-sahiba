import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

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
      <body className={poppins.className}>{children}</body> {/** REMOVED `className={inter.className}` */}
    </html>
  );
}
