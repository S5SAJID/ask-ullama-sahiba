import Posts from '@/data/data.json' assert { type: 'json' };
import { notFound } from 'next/navigation';

export default function PostPage({ params }: { params: any }) {
  const post = Posts.find(e => e.url.replaceAll("/", "").toLowerCase() == params['slug'].toLowerCase());
  if (!post) {
    notFound()
  }
  return (
    <>
      <main className="min-h-[80vh] relative z-[2] pb-16 pt-16 lg:pb-24 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={`/assets/images/ullama/${post.author}.png`}
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl capitalize font-bold text-gray-900 dark:text-white"
                    >
                      {post.author.split("-").join(" ")}
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Islamic Scholar, educator &amp; CEO Flowbite
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time

                        dateTime={post.date}
                        title={post.date}
                      >
                        {post.date}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 font-semibold leading-tight text-gray-900 lg:mb-6 text-xl dark:text-white">
                {post.question}
              </h1>
            </header>
            <div className='text-black dark:text-neutral-100'>
              <div className="p-5 rounded-lg bg-primary-100/10">
                <p className='underline decoration-primary-400 decoration-2 underline-offset-2'>Question :</p>
                {post.question}
              </div>

              <div className="answer mt-5">
              <p className='bg-primary-400/10 inline-block px-1 rounded'>Answer</p>
              {post.answer.split("\n").map((paragraph, index) => <p className='mt-3' key={index}>{paragraph}</p>)}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>

  );
}