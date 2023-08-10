import { defineField, defineType } from "sanity";

export default defineType({
  name: "sections",
  title: "Sections",
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
    {
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [
        {
          type: "reference",
          name: "titletext",
          to: { type: "titleTextComponent" },
        },
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
          name: "listcomponent",
          to: { type: "listComponent" },
        },
      ],
    },
  ],
});
