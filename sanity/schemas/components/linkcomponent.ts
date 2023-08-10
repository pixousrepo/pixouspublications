import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkComponent',
  title: 'Links',
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
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
