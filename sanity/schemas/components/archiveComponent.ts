import { defineField, defineType } from "sanity";

export default defineType({
  name: "archive",
  title: "Archive",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "path",
      title: "Path",
      type: "string",
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "string",
    }),
  ],
});
