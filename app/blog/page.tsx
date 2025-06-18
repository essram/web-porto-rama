import Link from "next/link";
import { blogPosts } from "../../data/blog";
import Navbar from "@/components/navbar/page";

export default function BlogPage({ searchParams }): {
  searchParams: {
    category?: string;
  };
} {
  const category = searchParams.category;
  const filteredBlog = category
    ? blogPosts.filter(
        (blog) => blog.category.toLowerCase() === category.toLowerCase()
      )
    : blogPosts;
  return (
    <>
      <Navbar />
      <main className="container mx-auto bg-gray-950">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-full">
          <h1 className="text-5xl font-bold mb-8 text-blue-500 text-center ">
            Blog Posts
          </h1>
          <div className="mt-4 mb-6 flex justify-center space-x-4">
            <Link
              href="/blog"
              className={`hover:text-blue-400 hover:transition-all ${
                !category ? "font-bold text-blue-400" : "text-white"
              }`}
            >
              All
            </Link>
            <Link
              href="/blog?category=react"
              className={`hover:text-blue-400 hover:transition-all ${
                category === "react" ? "font-bold text-blue-400" : "text-white"
              }`}
            >
              ReactJs
            </Link>
            <Link
              href="/blog?category=nextjs"
              className={`hover:text-blue-400 hover:transition-all ${
                category === "nextjs" ? "font-bold text-blue-400" : "text-white"
              }`}
            >
              NextJs
            </Link>
            <Link
              href="/blog?category=css"
              className={`hover:text-blue-400 hover:transition-all ${
                category === "css" ? "font-bold text-blue-400" : "text-white"
              }`}
            >
              CSS
            </Link>
            <Link
              href="/blog?category=flutter"
              className={`hover:text-blue-400 hover:transition-all ${
                category === "flutter"
                  ? "font-bold text-blue-400"
                  : "text-white"
              }`}
            >
              Flutter
            </Link>
          </div>
          <div className="grid gap-6">
            {filteredBlog.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 p-4 rounded-lg"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold mb-2 text-white hover:text-blue-400 hover:transition-all hover:underline">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-white text-sm font-semibold mb-2">
                  {post.date}
                </p>
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
