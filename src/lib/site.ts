export const siteName = "Jerome Gao / Full Stack Engineer";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");

export function absoluteUrl(pathname: string) {
  return new URL(pathname, `${siteUrl}/`).toString();
}
