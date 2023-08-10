import { defineField, defineType } from "sanity";

export default defineType({
  name: "listComponent",
  title: "Lists",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "list",
      title: "list",
      type: "array",
      of: [
        {
          type: "reference",
          name: "textcomponent",
          to: { type: "textComponent" },
        },
        {
          type: "reference",
          name: "richtext",
          to: { type: "richTextComponent" },
        },
        {
          type: "reference",
          name: "linkcomponent",
          to: { type: "linkComponent" },
        },
        {
          type: "reference",
          name: "imagecomponent",
          to: { type: "imageComponent" },
        },
        {
          type: "reference",
          name: "titletext",
          to: { type: "titleTextComponent" },
        },
        {
          type: "reference",
          name: "person",
          to: { type: "person" },
        },
      ],
    }),
  ],
});
