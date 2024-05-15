import Footer from "@/components/globals/Footer";
import Navbar from "@/components/globals/Navbar";
import BlogsSection from "@/components/home/BlogsSection";

export default function Page() {
    return (
      <div className="bg-white w-screen min-h-screen dark:bg-gray-900">
        <Navbar active="posts"/>
        <main className="px-4 pt-32 md:px-0 container mx-auto">
            <BlogsSection />
        </main>

        <Footer />
      </div>
    );
}