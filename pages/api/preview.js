import { AVAILABLE_PAGES } from "../../lib/constants";

export default async function preview(req, res) {
  const { secret, page } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Enable Preview Mode by setting the cookies
  // res.setPreviewData sets some cookies on the browser which turns on the preview mode. Any requests to Next.js containing these cookies will be considered as the preview mode
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  const url = AVAILABLE_PAGES.has(page) ? `/${page}` : `/`;
  res.redirect(url);
}
