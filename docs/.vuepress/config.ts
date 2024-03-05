import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",
  head: [['link', { rel: 'icon', href: 'https://my-pic-base.oss-cn-beijing.aliyuncs.com/avatar.jpg' }]],
  lang: "zh-CN",
  title: "葛智恒的博客",
  description: "葛智恒的博客",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
