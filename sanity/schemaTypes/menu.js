import { defineType, defineField } from "sanity";
export const menu = {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    defineField({
      name: "tags",
      type: "array", // Define an array field
      title: "Tags for item",
      of: [
        // Specify the type of array items (in this case, an object)
        {
          type: "object",
          name: "tag",
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            defineField({
              name: "tags",
              type: "array", // Define an array field
              title: "Tags for item",
              of: [
                // Specify the type of array items (in this case, an object)
                {
                  type: "object",
                  name: "tag",
                  fields: [
                    {
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                    },
                    {
                      name: 'subtitle',
                      title: 'Subtitle',
                      type: 'string',
                    },
                    {
                      name: 'number',
                      title: 'Number',
                      type: 'string',
                    },
                    
                  ],
                },
              ]
            }
          )
            
          ],
        },
      ]
    }
  )
      
   
  ],
}
