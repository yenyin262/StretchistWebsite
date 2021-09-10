import { createClient } from "contentful";
import { HeroImageContentType } from "./constants";

const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

const getClient = (preview) => (preview ? previewClient : client);

function getContentfulImageUrl(imageContentType) {
  return `https:${imageContentType.fields.file.url}`;
}

export async function getHeroImage(params) {
  const {
    items: [item],
  } = await getClient(params.preview).getEntries({
    content_type: HeroImageContentType,
    limit: 1,
  });

  return {
    title: item.fields.title,
    subtitle: item.fields.subtitle,
    heroImage: getContentfulImageUrl(item.fields.heroImage),
  };
}
