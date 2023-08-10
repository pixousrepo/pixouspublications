import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'richTextComponent',
  title: 'Rich Texts',
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
      name: 'richText',
      title: 'Rich Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
