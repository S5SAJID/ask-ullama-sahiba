import NeonLight from "./NeonLight";

export default function Footer() {
    return (
        <footer className="p-4 relative bg-white md:p-8 lg:p-10 dark:bg-gray-800">
          <NeonLight />
        <div className="mx-auto relative z-[2] max-w-screen-xl text-center">
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Ask Ullama Sahiba
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Questions asked by Muslims and Replied by Ullama Sahiba (Islamic Scholars)
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Posts
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024-2025{" "}
            <a href="#" className="hover:underline">
              S5 SAJID
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
      
    );
}