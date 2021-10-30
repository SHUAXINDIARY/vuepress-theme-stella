const { path } = require("@vuepress/utils");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  head: [
    [
      "link",
      { rel: "icon", href: "https://img.shuaxinjs.cn/favicon-16x16-next.png" },
    ],
  ],
  title: "Stella.",
  theme: path.resolve(__dirname, "../../package/stella/node/index.ts"),
  themeConfig: {
    shiki: {
      theme: "nord",
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
    footer: {
      label: "Stella Blog",
      link: "https://github.com/SHUAXINDIARY/vuepress-theme-stella",
    },
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
    icons: [
      {
        label: "GITHUB",
        link: "https://github.com/SHUAXINDIARY/vuepress-theme-stella",
      },
      {
        label: "EMAIL",
        link: "shuaxinjs@qq.com",
      },
      {
        label: "WEIXIN",
        link: "NIXIDESHUAXIN",
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
  dest: path.resolve(__dirname, "../../public"),
};
