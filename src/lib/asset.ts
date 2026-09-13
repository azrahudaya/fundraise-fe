const rawBase = import.meta.env.BASE_URL || "/";
const base = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

/**
 * Bangun URL aset publik dari folder /public supaya tetap benar walau app
 * di-serve di sub-path (mis. GitHub Pages project site /fundraise-fe/).
 */
export const asset = (path: string): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
};
