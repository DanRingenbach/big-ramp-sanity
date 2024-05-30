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

            <section className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
                {posts.map((post) => (
                    <div key={post._id} className="border-2 border-transparent hover:shadow-lg">

                        <Link
                            href={`/posts/${post.slug}`}
                            key={post._id}
                            className="flex flex-col items-center justify-center ease-in-out"
                        >
                            <Image src={post.coverImageURL} width={200} height={200} alt="Overlay" className="max-h-40 w-auto lg:h-auto md:h-auto sm:h-auto pb-5" />

                            <div className="w-1/2">
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