import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",
  dest: "./dist/docs",
  head: [["link", { rel: "icon", href: "https://my-pic-base.oss-cn-beijing.aliyuncs.com/avatar.jpg" }]],
  lang: "zh-CN",
  title: "",
  description: "",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
