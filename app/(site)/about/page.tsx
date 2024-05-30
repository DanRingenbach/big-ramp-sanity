// app/about/page.tsx

import Image from "next/image";
import { getAbout } from "@/sanity/sanity.query";
import type { AboutType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiSolidBomb } from "react-icons/bi";
import Iframe from "react-iframe"

export default async function About() {
  const profile: AboutType[] = await getAbout();




  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6 bg-white text-black">
      {profile && profile.map((data) => (
        <div key={data._id}>
          <section className="grid lg:grid-cols-1 grid-cols-1 gap-x-6 justify-items-center">

            <div className="max-w-full">
              <h1 className="lg:text-5xl text-4xl lg:leading-tight mb-5 font-bold">
                {data.galleryName}
              </h1>

              <ul className="mb-5">
                <li>
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                  >
                    <BiEnvelope className="text-lg" />
                    {data.email}
                  </a>
                </li>

                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                      >
                        <BiSolidBomb className="text-lg" />
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}

              </ul>
              <div className="flex flex-col gap-y-3 leading-relaxed">
                <PortableText value={data.bio} />
                <h1 className="lg:text-5xl text-4xl lg:leading-tight mt-8 font-bold">
                  Location
                </h1>
                <p className="mb-5">2024 East Westmoreland Street, Philadelphia, Pennsylvania 19134, United States</p>
                <div className="map flex flex-col items-center justify-center">
                  <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.613806979828!2d-75.11143172453882!3d39.994734981216254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d527488d1f%3A0xe444d88bbbc07fe9!2s2024%20E%20Westmoreland%20St%2C%20Philadelphia%2C%20PA%2019134!5e0!3m2!1sen!2sus!4v1705536597800!5m2!1sen!2sus"
                    width="450" height="450" allowFullScreen={true} loading="lazy" className="max-w-full ml-1/2 mr-1/2"></Iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </main>
  );
}