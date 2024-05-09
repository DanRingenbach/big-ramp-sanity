// schemas/about.ts

import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const about = {
  name: "about",
  title: "About",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "galleryName",
      title: "Gallery Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "byline",
      title: "Byline",
      type: "string",
      description: "Byline for landing page",
    }),
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "bio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "missionStatement",
      title: "Upload Mission Statement",
      type: "file",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "facebook",
          title: "Facebook URL",
          type: "url",
          initialValue: "https://facebook.com/",
        },
        {
            name: "instagram",
            title: "Instagram URL",
            type: "url",
            initialValue: "https://instagram.com/",
          },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
 ],
};

export default about;