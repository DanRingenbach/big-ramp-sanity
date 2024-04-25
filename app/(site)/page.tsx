// app/page.tsx
import CurrentExhibition from "../../components/CurrentExhibition"
import Post from "@/components/Post";
import { getExhibitions, getPosts } from "@/sanity/sanity.query";
import { ExhibitType, PostType } from "@/types";
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const job: ExhibitType[] = await getExhibitions();
  const singleJob = job[0]

  const posts: PostType[] = await getPosts();
  const singlePost = posts[0]

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
        {singleJob.opened && <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">Current Exhibition</h1>}
        {!singleJob.opened && <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">Upcoming Exhibition</h1>}
      <section className="grid lg:grid-cols-2 grid-cols-1sm:flex sm:flex-col-reverse gap-x-6 justify-items-center">
          <CurrentExhibition />
        <a href={`/exhibitions/${singleJob.slug}`}><div className=" p-5 order-2 lg:order-none hover:border-2">
          <h1 className='text-2xl font-bold mb-8'>{singleJob.name}</h1>
          <h1 className='text-lg font-bold mb-8'>{singleJob.openingDate} {'->'} {singleJob.closingDate}</h1>
          <p className="text-lg mb-8">{singleJob.description}</p>
          {singleJob.artists.map((artist, index) => (
            <li key={index}>{artist}</li>
          ))}
        </div></a>
      </section>
      <div className="p-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 mt-10 lg:leading-[3.7rem] leading-tight">Recent News</h1>
                        <Link
                            href={`/posts/${singlePost.slug}`}
                            key={singlePost._id}
                            className="flex flex-col  gap-x-4 border border-transparent hover:border-zinc-700 ease-in-out"
                        >
                        <Image src={singlePost.coverImageURL} width={400} height={400} alt="Overlay" className="w-full lg:h-full md:h-full sm:h-auto" />

                            <div className="p-10">
                                <h2 className="text-lg font-semibold mb-1">{singlePost.title}</h2>
                                <h2 className='text-lg mb-5'>{singlePost.date}</h2>
                                <h2 className="font-semibold mb-1">{singlePost.exerpt}</h2>
                            </div>

                        </Link>
                    </div>
    </main>
  );
}