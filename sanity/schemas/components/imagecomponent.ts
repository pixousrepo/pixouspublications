import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageComponent',
  title: 'Images',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
          name: "slug",
          title: "Slug",
          type: "slug",
          options: { source: "title" },
        }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
