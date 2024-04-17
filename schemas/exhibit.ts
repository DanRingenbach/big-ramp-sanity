// schemas/exhibit.ts

import { BiBriefcase } from "react-icons/bi";
import { defineField } from "sanity";


const exhibit = {
    name: "exhibit",
    title: "Exhibit",
    type: "document",
    icon: BiBriefcase,
    fields: [
        {
            name: "name",
            title: "Show Name",
            type: "string",
            description: "What is the name of the show?",
        },
        {
            name: "artists",
            title: "Artists / Artist",
            type: "array",
            description: "Add artists/artist names/name",
            of: [{ type: "string" }],
          },
        {
            name: "description",
            title: "Job Description",
            type: "text",
            rows: 3,
            description: "Write a brief description about this show",
        },
        {
            name: "pressRelease",
            title: "Upload Press Release",
            type: "file",
          },
        {
            name: "imageArray",
            title: "Image Array",
            type: "array",
            description: "Image Array",
            of: [{
                type:'image'
            }]
        },
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            description:
              "Add a custom slug for the URL or generate one from the name",
            options: { source: "name" },
            validation: (rule) => rule.required(),
          }),

    ],
};

export default exhibit;