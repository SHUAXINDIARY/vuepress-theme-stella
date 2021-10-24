import { path } from "@vuepress/utils";
import { createPage } from "@vuepress/core";
import type { ThemeConfig } from "../types";
import { getAllPostMsg, getAllCategory, getAllTag } from "./utils/util";

const routes = {
  Layout: path.resolve(__dirname, "../client/layouts/Layout.vue"),
  404: path.resolve(__dirname, "../client/layouts/404.vue"),
  PostPage: path.resolve(__dirname, "../client/layouts/PostPage.vue"),
  PostDetail: path.resolve(__dirname, "../client/layouts/PostDetail.vue"),
};

export default (themeConfig: ThemeConfig = {}, ctx) => {
  return {
    name: "vuepress-theme-stella",
    layouts: routes,
    clientAppSetupFiles: path.resolve(
      __dirname,
      "../client/clientAppSetupFiles.ts"
    ),
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
      const postInfo = getAllPostMsg(app.pages);
      const allCategory = getAllCategory(app.pages);
      const allTag = getAllTag(app.pages);

      // default pages
      const homepage = await createPage(app, {
        path: "/",
        frontmatter: {
          layout: "Layout",
        },
      });
      const postpage = await createPage(app, {
        path: "/post/",
        frontmatter: {
          layout: "PostPage",
          postInfo,
          allCategory,
          allTag,
        },
      });
      // const snippetspage = await createPage(app, {
      //   path: "/snippets/",
      //   frontmatter: {
      //     layout: "Layout",
      //     postInfo,
      //   },
      // });
      app.pages.push(...[homepage, postpage]);
    },
    // 监听文件变动重启 dev ；因为文章数据都是在node层做的
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
    extendsPageOptions:({filePath},app) => {
      if(filePath && (filePath.includes('post') || filePath.includes('about'))){
        return {
          frontmatter: {
            layout: 'PostDetail'
          },
        }
      }
    }
  };
};
