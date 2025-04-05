import { hopeTheme } from "vuepress-theme-hope";

import { zhNAV, enNAV } from "./navbar.js";
import { zhSide, enSide } from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.bigtomcat.com",

  author: {
    name: "How",
    url: "https://www.bigtomcat.com",
  },

  license: 'Apache-2.0',

  logo: "/logo.svg",

  docsDir: "docs",

  // 导航栏
  navbarTitle: '',
  // navbar,

  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Links", "Search", "Outlook", "Language"],
  },

  darkmode: "switch",
  themeColor: true,


  // 侧边栏
  // sidebar,

  locales: {
    "/": {
      navbar: zhNAV,
      sidebar: zhSide
    },
    "/en/": {
      navbar: enNAV,
      sidebar: enSide
    },
  },


  // 页脚
  // footer: "",
  displayFooter: true,
  copyright: 'Copyright © 2022 - 2025 <a href="https://www.bigtomcat.com/" target="_blank">How</a><br>',

  // 博客相关
  blog: {
    description: "Bigtomcat",
    intro: "/intro",
    timeline: "简单快乐，理应如此。",
    articlePerPage: 20,
    articleInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    // medias: {
    //   Baidu: "https://example.com",
    //   BiliBili: "https://example.com",
    //   Bitbucket: "https://example.com",
    //   Dingding: "https://example.com",
    //   Discord: "https://example.com",
    //   Dribbble: "https://example.com",
    //   Email: "mailto:info@example.com",
    //   Evernote: "https://example.com",
    //   Facebook: "https://example.com",
    //   Flipboard: "https://example.com",
    //   Gitee: "https://example.com",
    //   GitHub: "https://example.com",
    //   Gitlab: "https://example.com",
    //   Gmail: "mailto:info@example.com",
    //   Instagram: "https://example.com",
    //   Lark: "https://example.com",
    //   Lines: "https://example.com",
    //   Linkedin: "https://example.com",
    //   Pinterest: "https://example.com",
    //   Pocket: "https://example.com",
    //   QQ: "https://example.com",
    //   Qzone: "https://example.com",
    //   Reddit: "https://example.com",
    //   Rss: "https://example.com",
    //   Steam: "https://example.com",
    //   Twitter: "https://example.com",
    //   Wechat: "https://example.com",        
    //   Weibo: "https://example.com",
    //   Whatsapp: "https://example.com",
    //   Youtube: "https://example.com",
    //   Zhihu: "https://example.com",
    //   VuePressThemeHope: {
    //     icon: "https://theme-hope-assets.vuejs.press/logo.svg",
    //     link: "https://theme-hope.vuejs.press",
    //   },
    // },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: true,

  prevLink: false,
  nextLink: false,

  pageInfo: ["Original", "Date", "Category", "Tag", "Word", "ReadingTime", "PageView"],

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    // igure: true,
    figure: false,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    math: {
      type: "katex",
    },

    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    markmap: true,
    footnote: true,

    // 在启用之前安装 chart.js
    // chart: true,

    // insert component easily

    // 在启用之前安装 echarts
    echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // gfm requires mathjax-full to provide tex support
    // gfm: true,

    // 在启用之前安装 katex
    // katex: true,

    // 在启用之前安装 mathjax-full
    // mathjax: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 reveal.js
    // revealJs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    comment: {
      comment: false,
      provider: "Waline",
      serverURL: "https://waline.server.docs.bigtomcat.com",
      pageview: true,
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // slimsearch: {
    //   indexContent: true,
    //   suggestion: true,
    //   hotKeys: [
    //     { key: "k", ctrl: true },
    //     { key: "k", meta: true },
    //   ]
    // },

    docsearch: {
      appId: "Q1DQBBQMEO",
      apiKey: "c8451fd9ea8dfb915a9b10a4963312f1",
      indexName: "bigtomcat",
    },

    icon: {
      assets: "iconify",
    },

    redirect: {
      switchLocale: 'modal',
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
  
},{ custom: true });
