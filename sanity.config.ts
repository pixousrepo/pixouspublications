import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const config = defineConfig({
  projectId: "t9xt5xc2",
  dataset: "production",
  apiVersion: "2023-08-01",
  basePath: "/studio",
  title: "Pixous Publications",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
