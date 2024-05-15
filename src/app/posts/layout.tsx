import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Posts — Ask Ullama Sahiba ",
    description: "Posts from Ask Ullama Sahiba, Online Platform for Islamic QA. Here you can find different questions asked by people arround the globe and replied by famous Ullama Sahiba..",
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
      <div>
        {children}
      </div>
    );
}