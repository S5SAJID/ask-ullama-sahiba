import PostCard from "../sub-components/PostCard";
import Posts from '@/data/data.json' assert { type: 'json' };

type BlogsSectionProps = {
  maxPosts?: number,
}

export default function BlogsSection(props: BlogsSectionProps) {
  let data = Posts;
  if (props.maxPosts) {
    data = Posts.slice(0, props.maxPosts)
  }
  return (
    <section className="bg-white  overflow-hidden dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Posts
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Questions asked by Muslims and Replied by Ullama Sahiba (Islamic Scholars)
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {
            data.map((post, index) => <PostCard post={post} key={index}  />)
          }
        </div>
      </div>
    </section>
  );
}