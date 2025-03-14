import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Shinyan",
  subTitle: "随便写写..",
  brandTitle: "Shinyan",

  description: "Demo Site",

  site: "https://localhost",

  locale: "zh-CN",
  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_steam,
      href: "https://steamcommunity.com/profiles/76561199036244480/",
    },
  ],

  username: "颜",
  sign: "个人简介",
  avatarUrl: "https://avatars.cloudflare.steamstatic.com/1af8efce80d90b32d47e4856ae02bdbae9fb73c6_full.jpg",
  socialLinks: [
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/565790565",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://music.163.com",
    },
  ],
  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://www.dmoe.cc/random.php",
  ],

  slugMode: "HASH",
  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  bannerStyle: "LOOP",
};

export default YukinaConfig;