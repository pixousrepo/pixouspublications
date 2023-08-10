import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textComponent',
  title: 'Texts',
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
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
})
