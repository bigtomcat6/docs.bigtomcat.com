import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import { path } from "vuepress/utils";

import theme from "./theme.js";

import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';

/*** deprecated from hope@2.0.0-rc.54 ***/
import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

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

    /*** deprecated from hope@2.0.0-rc.54 ***/
    markdownTabPlugin({
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true,
    }),
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
    markdownMathPlugin({
      // 选项
      type: 'katex',
    }),
  ],

  alias: {
    "@theme-hope/modules/info/components/PageViewInfo": path.resolve(
      __dirname,
      "./layouts/PageViewInfo.ts"
    ),
  },

  bundler: viteBundler(),
});
