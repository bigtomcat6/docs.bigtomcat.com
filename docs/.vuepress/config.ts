import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

import { getDirname, path } from "vuepress/utils";

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
    


    footer: {
      message: '',
      copyright: '©2022 - 2024 <a href="https://www.bigtomcat.com/">How</a><br>'
    },
    plugins: {
      search: false,
    },
  }),

  head: [
    ['link', { rel: 'stylesheet', href: 'style/index.css'}],
    ['link', { rel: 'icon', href: '/logo.png'}],
  ],

  plugins: [
    removeHtmlExtensionPlugin(),
  ],

  bundler: viteBundler(),
})