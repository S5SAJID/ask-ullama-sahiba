import Footer from "@/components/globals/Footer";
import Navbar from "@/components/globals/Navbar";
import Posts from '@/data/data.json' assert { type: 'json' };
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ask Ullama Sahiba ",
  description: "About Ask Ullama Sahiba, Online Platform for Islamic QA. Here you can find different questions asked by people arround the globe and replied by famous Ullama Sahiba..",
  keywords: ['Ask Ullama Sahiba', 'Ullama', "Islamic Scholars", "Islamic QA", "Islamic Questions & answers"],
  icons: [
      "/assets/images/favicon.png"
  ],
  authors: [
      // FIX: FIX THE CHANNEL NAME
      { name: "Assim al Hakeem", url: "https://youtube.com/channelname" },
      { name: "S5 SAJID", url: "https://s5sajid.github.io" },
  ]
};

export default function Layout({children}: {children: any}) {
    return (
      <div className="bg-white dark:bg-gray-900">
        <Navbar active="about"/>
        <div className="pt-10">
          {children}
        </div>
        <Footer />
      </div>
    );
}