import Footer from "@/components/globals/Footer";
import Navbar from "@/components/globals/Navbar";
import Posts from '@/data/data.json' assert { type: 'json' };
import { Metadata } from "next";

export const generateMetadata = ({params}: {params: any}): Metadata => {
  const post = Posts.find(blog => blog['url'].toLowerCase() == params.slug.toLowerCase());
  return {
    title: post?.title + " — Ask Ullama Sahiba",
    keywords: [...post?.tags as string[], 'Ask Ullama Sahiba', 'Ullama', "Islamic Scholars", "Islamic QA", "Islamic Questions & answers"],
    description: `Question: ${post?.question}. Answer by ${post?.author.split("-").join(" ")} : ${post?.answer}`,
    authors: [
      {name: post?.author.split("-").join(" "), url: "https://www.youtube.com/@assimalhakeem"},
      {name: "S5 SAJID", url: "https://s5sajid.github.io"},
    ]
  }
}

export default function Layout({children}: {children: any}) {
    return (
      <div className="bg-white dark:bg-gray-900">
        <Navbar active="posts"/>
        <div className="pt-10">
          {children}
        </div>
        <Footer />
      </div>
    );
}