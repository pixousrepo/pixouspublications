import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sanity from "astro-sanity";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'directory'
    },
    integrations: [tailwind(), react(), sanity({
        projectId: "t9xt5xc2",
        dataset: "production",
        apiVersion: "2023-08-01",
        useCdn: false
    })],
});
