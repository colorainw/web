import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "shinyan",
  subTitle: "",
  brandTitle: "shinyan",

  description: "Test",

  site: "https://shinyan.top",

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
  sign: "要好好愛自己",
  avatarUrl: "https://img.fastmirror.net/s/2025/03/23/67dee35eb3567.jpg",
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
    "https://www.loliapi.com/acg",
    "https://moe.jitsu.top/api",
    "https://api.miaomc.cn/image/get",
  ],

  slugMode: "HASH",
  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  bannerStyle: "LOOP",
};

export default YukinaConfig;