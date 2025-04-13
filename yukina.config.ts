import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "rain",
  subTitle: "Zzzz",
  brandTitle: "Yan",
  description: "Not",
  site: "https://shinyan.top",
  locale: "zh-CN",
  navigators: [
    { nameKey: I18nKeys.nav_bar_home, href: "/" },
    { nameKey: I18nKeys.nav_bar_archive, href: "/archive" },
    { nameKey: I18nKeys.nav_bar_about, href: "/about" },
    { nameKey: I18nKeys.nav_bar_steam, href: "https://steamcommunity.com/profiles/76561199036244480" }
  ],
  username: "柳颜",
  sign: "这是一段文字，但就是一段文字",
  avatarUrl: "https://img.fastmirror.net/s/2025/03/23/67dee35eb3567.jpg",
  socialLinks: [
    { icon: "line-md:github-loop", link: "https://github.com/colorainw" },
    { icon: "mingcute:bilibili-line", link: "https://space.bilibili.com/565790565" },
    { icon: "mingcute:netease-music-line", link: "https://music.163.com" }
  ],
  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,
  banners: [
    "http://acg1.rainw.top/",
    "http://acg2.rainw.top/",
    "http://acg3.rainw.top/",
    "http://acg4.rainw.top/"
  ],
  slugMode: "HASH",
  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
  },
  bannerStyle: "LOOP"
};

export default YukinaConfig;
