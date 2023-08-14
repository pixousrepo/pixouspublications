import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["settings"]);

const config = defineConfig({
  projectId: "t9xt5xc2",
  dataset: "production",
  apiVersion: "2023-08-01",
  basePath: "/studio",
  title: "Pixous Publications",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("Settings").id("settings").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("settings").documentId("settings")
            ),

            // Regular document types
            S.documentTypeListItem("pages").title("Pages"),
            S.documentTypeListItem("sections").title("Sections"),
          ]),
    }),
    visionTool(),
    vercelDeployTool(),
  ],
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

export default config;
