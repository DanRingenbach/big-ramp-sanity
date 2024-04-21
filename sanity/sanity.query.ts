// sanity/sanity.query.ts

import { groq } from "next-sanity";
import  client  from "./sanity.client";

export async function getAbout() {
    return client.fetch(
        groq`*[_type == "about"]{
          _id,
          galleryName,
          byline,
          profileImage {alt, "image": asset->url},
          email,
          bio,
          missionStatement,
          socialLinks
        }`
    );
}


export async function getExhibitions() {
  return client.fetch(
    groq`*[_type == "exhibit"]{
      _id,
      name,
      artists,
      description,
      'pressRelease' : pressRelease.asset->url,
      openingDate,
      closingDate,
      'imageUrls' : imageArray[].asset->url,
      'slug': slug.current
    }`
  );
}

export async function getSingleExhibit(slug: string) {
  return client.fetch(
    groq`*[_type == "exhibit" && slug.current == $slug][0]{
      _id,
      name,
      artists,
      description,
      openingDate,
      closingDate,
      'pressRelease' : pressRelease.asset->url,
      'imageUrls' : imageArray[].asset->url,
    }`,
    { slug }
  );
}

