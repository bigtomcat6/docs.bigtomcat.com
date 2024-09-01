import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import { path } from "vuepress/utils";

import theme from "./theme.js";

import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';


export default defineUserConfig({
  base: "/",

  // lang: "zh-CN",
  locales: {
    "/": {
      lang: "zh-CN",
    },
    "/en/": {
      lang: "en-US",
    }
  },

  title: "How",
  description: "Bigtomcat",

  head: [
    ['link', { rel: 'icon', href: '/logo.png'}],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  plugins: [
    removeHtmlExtensionPlugin(),
  ],

  alias: {
    "@theme-hope/modules/info/components/PageViewInfo": path.resolve(
      __dirname,
      "./layouts/PageViewInfo.ts"
    ),
  },

  bundler: viteBundler(),
});
