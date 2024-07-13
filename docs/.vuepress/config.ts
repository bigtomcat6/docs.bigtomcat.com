import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'



export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "How",
  description: "Bigtomcat",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  plugins: [
    removeHtmlExtensionPlugin(),
  ],

  bundler: viteBundler(),
});
