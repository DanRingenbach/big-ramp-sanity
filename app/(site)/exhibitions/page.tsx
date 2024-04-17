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
          Featured projects
        </h1>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/exhibitions/${project.slug}`}
            key={project._id}
            className="flex items-center gap-x-4 border border-transparent hover:border-zinc-700 ease-in-out"
          >
            
            <div>
              <h2 className="font-semibold mb-1">{project.name}</h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}