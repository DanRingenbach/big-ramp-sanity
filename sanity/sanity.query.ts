// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

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
    groq`*[_type == "exhibit"] | order(openingDate desc){
      _id,
      name,
      artists,
      description,
      'pressRelease' : pressRelease.asset->url,
      opened,
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

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(date desc){
      _id,
      title,
      'slug': slug.current,
      content,
      exerpt,      
      'coverImageURL' : coverImage.asset->url,
      date,
      'imageUrls' : imageArray[].asset->url,

    }`
  );
}

export async function getPost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      'slug': slug.current,
      content,
      exerpt,      
      'coverImageURL' : coverImage.asset->url,
      date,
      'imageUrls' : imageArray[].asset->url,

    }`,
    { slug }
  );
}


