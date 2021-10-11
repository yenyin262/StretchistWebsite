import { createClient } from "contentful";
import NavItems from "../components/NavItems/NavItems";
import {
  HeroImageContentType,
  IntroductionSectionContentType,
  SocialSectionContentType,
  TestimonialSectionContentType,
  ImageCollageSectionContentType,
  ContactSectionContentType,
  AboutPageContentType,
  JoinUsPageContentType,
} from "./constants";

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

function getContentfulFileUrl(fileContentType) {
  if (fileContentType) {
    return {
      src: `https:${fileContentType.fields.file.url}`,
      alt: fileContentType.fields.description,
    };
  }
  return {
    src: null,
    alt: null,
  };
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
    heroImage: getContentfulFileUrl(item.fields.heroImage).src,
  };
}

export async function getIntroductionSection(params) {
  const { items } = await getClient(params.preview).getEntries({
    content_type: IntroductionSectionContentType,
    order: "fields.order",
    limit: 2,
  });

  return items.map((item) => ({
    image: getContentfulFileUrl(item.fields.image).src,
    order: item.fields.order,
    title: item.fields.title,
    link: item.fields.link,
    content: item.fields.content,
    details: item.fields.details,
    alt: item.fields.alt,
    linkColor: item.fields.linkColor,
  }));
}

export async function getSocialSection(params) {
  const { items } = await getClient(params.preview).getEntries({
    content_type: SocialSectionContentType,
    limit: 2,
  });

  return items.map((item) => ({
    image: getContentfulFileUrl(item.fields.image).src,
    title: item.fields.title,
    content: item.fields.content,
  }));
}

export async function getTestimonialSection(params) {
  const {
    items: [section],
  } = await getClient(params.preview).getEntries({
    content_type: TestimonialSectionContentType,
    limit: 1,
  });

  return {
    title: section.fields.title,
    values: section.fields.testimonials.map((item) => ({
      image: getContentfulFileUrl(item.fields.image).src,
      content: item.fields.content,
      name: item.fields.name,
      alt: item.fields.alt,
    })),
  };
}

export async function getImageCollageSection(params) {
  const { items } = await getClient(params.preview).getEntries({
    content_type: ImageCollageSectionContentType,
    order: "fields.order",
    limit: 4,
  });

  return items.map((item) => ({
    image: getContentfulFileUrl(item.fields.image).src,
  }));
}

export async function getContactSection(params) {
  const {
    items: [item],
  } = await getClient(params.preview).getEntries({
    content_type: ContactSectionContentType,
    limit: 1,
  });

  return {
    title: item.fields.title,
    message: item.fields.message,
    email: item.fields.email,
  };
}

export async function getAboutPage(params) {
  const {
    items: [section],
  } = await getClient(params.preview).getEntries({
    content_type: AboutPageContentType,
    limit: 1,
    include: 10,
  });

  return {
    title: section.fields.title,
    aboutSection: {
      images:
        section.fields.aboutSection.fields.images.map(getContentfulFileUrl),
      content: section.fields.aboutSection.fields.content,
    },
    coreValues: {
      title: section.fields.coreValues.fields.title,
      values: section.fields.coreValues.fields.coreValues.map((item) => ({
        image: getContentfulFileUrl(item.fields.image).src,
        description: item.fields.description,
        alt: item.fields.alt,
        label: item.fields.label,
      })),
    },
    myExperience: {
      title: section.fields.myExperience.fields.title,
      values: section.fields.myExperience.fields.myExperience.map((item) => ({
        numbers: item.fields.numbers,
        label: item.fields.label,
      })),
    },
  };
}

export async function getJoinUsPage(params) {
  const {
    items: [section],
  } = await getClient(params.preview).getEntries({
    content_type: JoinUsPageContentType,
    limit: 1,
    include: 10,
  });

  return {
    heading: section.fields.heading,
    videoClip: getContentfulFileUrl(section.fields.videoClip).src,
    whyStretchSection: {
      title: section.fields.whyStretchSection.fields.title,
      facts: section.fields.whyStretchSection.fields.stretchSection.map(
        (item) => ({
          image: getContentfulFileUrl(item.fields.image).src,
          altDescription: item.fields.altDescription,
          title: item.fields.title,
          content: item.fields.content,
        })
      ),
    },
  };
}
