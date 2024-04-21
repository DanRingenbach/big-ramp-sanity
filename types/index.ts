// types/index.ts

import { PortableTextBlock } from "sanity";

export type AboutType = {
  _id: string,
  galleryName: string,
  byline: string,
  profileImage: {
    alt: string,
    image: string
  },
  email: string,
  bio: PortableTextBlock[],
  missionStatement: string,
  socialLinks: string[],

};


export type ExhibitType = {
  _id: string;
  name: string;
  artists: string[];
  description: string;
  pressRelease: string;
  opened: boolean;
  openingDate: string;
  closingDate: string;
  imageUrls: string[];
  slug: string;
 
};