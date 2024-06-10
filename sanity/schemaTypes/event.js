import { defineField } from "sanity";

export const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 200, // will be ignored if slugify is set
          slugify: (input) =>
            input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
      },
    {
      name: "timing",
      title: "Timing",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
        name: "max_seats",
        title: "Maximum Number Of Seats",
        type: "number",
      },
    defineField({
      name: "tags",
      type: "array", // Define an array field
      title: "Images",
      of: [
        // Specify the type of array items (in this case, an object)
        {
          type: "object",
          name: "tag",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
  ],
};
