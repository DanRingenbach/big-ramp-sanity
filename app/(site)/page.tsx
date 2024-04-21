// app/page.tsx
import CurrentExhibition from "../../components/CurrentExhibition"
import { getExhibitions } from "@/sanity/sanity.query";
import { ExhibitType } from "@/types";

export default async function Home() {
  const job: ExhibitType[] = await getExhibitions();
  const singleJob = job[0]

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
    </main>
  );
}