// app/posts/page.tsx
import Link from "next/link";
import { getPosts } from "@/sanity/sanity.query";
import type { PostType } from "@/types";
import Image from "next/image";

export default async function Posts() {
    const posts: PostType[] = await getPosts();

    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6">
            <section className="max-w-2xl mb-16">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
                    News
                </h1>
            </section>

            <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
                {posts.map((post) => (
                    <div key={post._id}>

                        <Image src={post.coverImageURL} width={400} height={400} alt="Overlay" className="w-full lg:h-full md:h-full sm:h-auto" />
                        <Link
                            href={`/posts/${post.slug}`}
                            key={post._id}
                            className="flex items-center gap-x-4 border border-transparent hover:border-zinc-700 ease-in-out"
                        >

                            <div>
                                <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
                                <h2 className='text-lg mb-5'>{post.date}</h2>
                                <h2 className="font-semibold mb-1">{post.exerpt}</h2>
                            </div>

                        </Link>
                    </div>
                ))}
            </section>
        </main>
    );
}