import { useSanityClient, createImageBuilder } from "astro-sanity";

export const client = useSanityClient();
const imageBuilder = createImageBuilder(client);

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export async function getData(query) {
  return client.fetch(query);
}

export async function getPageData(slug) {
  const query = `*[_type == 'pages' && slug.current == "${slug}"][0]{
        ...,
        sections[]->{
          ...,
          blocks[]->{
            ...,
            list[]->
          }
        }
      }
        `;
  return getData(query);
}

export async function getSettingsData() {
  const query = `*[_type == 'settings'][0]`;
  return getData(query);
}

export function getSectionData(pageData, slug) {
  return pageData.sections.filter((s) => s.slug.current === slug)[0];
}

export function getBlockData(sectionData, slug) {
  return sectionData.blocks.filter((b) => b.slug.current === slug)[0];
}
