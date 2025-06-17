// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const AUTHOR_NAME = "Astro";

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

export const menuLinks = [
  { name: "POSTS", nameJa: "記事", path: "/post" },
  { name: "FEATURED", nameJa: "特集", path: "/featured" },
  { name: "FRIENDS", nameJa: "友人", path: "/friends" },
  { name: "ABOUT", nameJa: "について", path: "/about" },
];

export const giscusConfig = {
  enabled: false,
  dataRepo: "",
  dataRepoId: "",
  dataCategory: "Announcements",
  dataCategoryId: "",
  dataMapping: "pathname",
  dataStrict: "0",
  dataReactionsEnabled: "1",
  dataEmitMetadata: "0",
  dataInputPosition: "bottom",
  dataTheme: "light",
  dataThemeDark: "dark",
  dataLang: "en",
  dataLoading: "lazy",
};

export const friendsLinks = [
  {
    name: "Demo",
    site: "Demo",
    siteURL: "https://example.com",
    icon: "https://gravatar.loli.net/avatar/da416f8013b9815f1e1c81754fffd701?s=300",
  },
  {
    name: "Demo",
    site: "Demo",
    siteURL: "https://example.com",
    icon: "https://gravatar.loli.net/avatar/da416f8013b9815f1e1c81754fffd701?s=300",
  },
  {
    name: "Demo",
    site: "Demo",
    siteURL: "https://example.com",
    icon: "https://gravatar.loli.net/avatar/da416f8013b9815f1e1c81754fffd701?s=300",
  },
  {
    name: "Demo",
    site: "Demo",
    siteURL: "https://example.com",
    icon: "https://gravatar.loli.net/avatar/da416f8013b9815f1e1c81754fffd701?s=300",
  },
  {
    name: "Demo",
    site: "Demo",
    siteURL: "https://example.com",
    icon: "https://gravatar.loli.net/avatar/da416f8013b9815f1e1c81754fffd701?s=300",
  },
  {
    name: "Demo",
    site: "Demo",
    siteURL: "https://example.com",
    icon: "https://gravatar.loli.net/avatar/da416f8013b9815f1e1c81754fffd701?s=300",
  },
];
