import Footer from "@/components/globals/Footer";
import Navbar from "@/components/globals/Navbar";
import HeroSection from "@/components/home/HeroSection";
import BlogsSection from "@/components/home/BlogsSection";

export default function Home() {
  return (
    <main className="w-screen min-h-screen" >
      <Navbar />
      <HeroSection />
      <BlogsSection maxPosts={9} />
      <Footer />
    </main>
  );
}
