const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // 配置icon等
  head: [
    [
      "link",
      { rel: "icon", href: "https://img.shuaxinjs.cn/favicon-16x16-next.png" },
    ],
  ],
  title: "Stella.",
  theme: 'vuepress-theme-stella',
  themeConfig: {
    // 评论 不需要直接去掉该配置项
    comment: {
      serverURL: "https://stella-comment-uh9g.vercel.app/",
      dark: "auto",
      login: "force",
    },
    // shiki配置和官方同步
    shiki: {
      // 主题
      theme: "nord",
      // 支持语言
      langs: [
        "c",
        "cpp",
        "cs",
        "css",
        "dart",
        "docker",
        "fs",
        "go",
        "html",
        "java",
        "js",
        "json",
        "kt",
        "less",
        "makefile",
        "md",
        "php",
        "py",
        "rb",
        "rs",
        "sass",
        "scss",
        "sh",
        "styl",
        "ts",
        "toml",
        "vue",
        "yml",
        "javascript",
        "yaml",
      ],
    },
    // 配置footer信息
    footer: {
      label: "Stella Blog",
      link: "https://github.com/SHUAXINDIARY/vuepress-theme-stella",
    },
    // 配置导航栏
    cates: [
      {
        label: "文章",
        link: "/post/",
      },
      {
        label: "片段",
        link: "/snippets/",
      },
      {
        label: "关于",
        link: "/about/",
      },
    ],
    // 配置外联链接
    icons: [
      {
        label: "GITHUB",
        link: "https://github.com/SHUAXINDIARY/vuepress-theme-stella",
      },
      {
        label: "EMAIL",
        link: "",
      },
      {
        label: "WEIXIN",
        link: "",
      },
      // {
      //   label:'DOUBAN',
      //   link:''
      // },
      // {
      //   label:'WEIBO',
      //   link:''
      // },
      // {
      //   label:'TWITTER',
      //   link:''
      // },
    ],
  },
};
