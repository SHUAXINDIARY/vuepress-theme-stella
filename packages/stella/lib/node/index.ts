import { path } from "@vuepress/utils";
import { createPage } from "@vuepress/core";
import type { ThemeConfig } from "../types";
import { getAllPostMsg, getAllCategory, getAllTag } from "./utils/util";

const routes = {
  404: path.resolve(__dirname, "../client/layouts/404.vue"),
  Layout: path.resolve(__dirname, "../client/layouts/Layout.vue"),
};

export default (themeConfig: ThemeConfig = {}, ctx) => {
  return {
    name: "vuepress-theme-stella",
    layouts: routes,
    plugins: [
      ["@vuepress/plugin-nprogress"],
      ["@vuepress/plugin-back-to-top"],
      [
        "@vuepress/plugin-theme-data",
        {
          themeData: {
            themeConfig,
          },
        },
      ],
      ["@vuepress/plugin-git"],
      ["@vuepress/plugin-palette", { preset: "sass" }],
      [
        "@vuepress/plugin-shiki",
        {
          theme: themeConfig?.shiki?.theme || "material-darker",
          lang: themeConfig?.shiki?.langs || [],
        },
      ],
    ],
    async onInitialized(app) {
      // 获取所有文章 分类 标签信息
      const allTag = getAllTag(app.pages);
      const postInfo = getAllPostMsg(app.pages);
      const allCategory = getAllCategory(app.pages);
      const homePage = await createPage(app, {
        path: "/",
        frontmatter: {
          layout: "Layout",
          postInfo,
          allCategory,
          allTag,
        },
      });
      const postPage = await createPage(app, {
        path: "/post/",
        frontmatter: {
          layout: "Layout",
          postInfo,
          allCategory,
          allTag,
        },
      });
      const snippetPage = await createPage(app, {
        path: "/snippet/",
        frontmatter: {
          layout: "Layout",
          postInfo,
          allCategory,
          allTag,
        },
      });
      app.pages.push(...[homePage, postPage, snippetPage]);
    },
    // 监听文md文件变动重启 dev ；因为文章相关数据都是在node层生成并下发的
    onWatched(app, watchers, restart) {
      watchers.some(item => {
        item.on("change", () => {
          restart();
        });
      });
    },
    // 加载markdown-it插件
    extendsMarkdown(md) {
      md.use(require("markdown-it-task-lists"));
    },
  };
};
