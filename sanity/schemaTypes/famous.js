
export const famous = {
  name: "famous",
  title: "Famous",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
  ],
};
