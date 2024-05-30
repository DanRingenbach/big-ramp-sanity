// app/exhibitions/page.tsx
import Link from "next/link";
import { getExhibitions } from "@/sanity/sanity.query";
import type { ExhibitType } from "@/types";

export default async function Exhibit() {
  const projects: ExhibitType[] = await getExhibitions();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Exhibitions
        </h1>
      </section>

      <section className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        {projects.map((project) => (
          <div key={project._id} className="border-2 border-transparent hover:shadow-lg">

            <Link
              href={`/exhibitions/${project.slug}`}
              key={project._id}
              className="flex flex-col items-center justify-center ease-in-out"
            >

              <div>
                <h2 className="text-lg font-semibold mb-1">{project.name}</h2>
                <h2 className='text-lg mb-5'>{project.openingDate} {'->'} {project.closingDate}</h2>
                <h2 className="font-semibold mb-1">{project.description}</h2>
              </div>

            </Link>
          </div>

        ))}
      </section>
    </main>
  );
}