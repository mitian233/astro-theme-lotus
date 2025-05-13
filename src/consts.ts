// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const SITE_URL = "https://astro-blog-lotus.vercel.app";
interface SiteConfig {
  homePageImageSrc: string;
  paginationSize: number;
  logoSrc?: string;
}
export const siteConfig: SiteConfig = {
  homePageImageSrc: "/shared/img/kv.jpg",
  paginationSize: 10,
  //   logoSrc:
  //     "https://www.lovelive-anime.jp/hasunosora/shared/img/common/hd_logo.svg",
};
