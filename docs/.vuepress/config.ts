import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'How',

  theme: plumeTheme({

    avatar: {
      name: 'How',
      description: 'Bigtomcat',
      location: 'Sydney',
      url: '/logo.png',
      circle: true,

    },

    navbar: [
      {text: 'Blog', link: '/'},
    ],

    blog: {
      link: '/blog/',
      tagsLink: '/tags/',
      archives: true,
      archivesLink: '/archives/',
      include: ['1.读书笔记/**/*.md'],
    },

    notes: {
      dir: '/',
      link: '/',
      notes: [
        {
          dir: '1.读书笔记',
          link: '/1.读书笔记/',
        },
      ],
    },
    
    footer: {
      message: '',
      copyright: '©2022 - 2024 <a href="https://www.bigtomcat.com/">How</a><br>'
    },
    plugins: {
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