const ENABLED = "1";

export const disablePreview = (url) => {
  const pattern = /preview=[^\\&]+&?/;
  return url.replace(pattern, "");
};

export const isPreviewEnabled = (query) => {
  const param = String(query?.preview).toLowerCase();
  return param === ENABLED;
};

export const withPreviewParam = (url, isPreview) => {
  const query = isPreview ? `?preview=${ENABLED}` : "";
  return url + query;
};
