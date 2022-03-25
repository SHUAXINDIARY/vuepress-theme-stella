import { isArray } from "@vue/shared";
import type { Pages, Post, PostMap, PostMsg } from "../../types";

export const mdType = {
  POST: "post",
  SNIPPET: "snippet",
};

/**
 * @description 统计分类、标签和文章的对应关系
 * @param postMap 存储结构
 * @param post 文章
 * @param list 分类或标签list
 */
export const getListBySomething = (
  postMap: PostMap,
  post: Post,
  list: any[]
) => {
  list.forEach(item => {
    if (postMap[item]) {
      postMap[item].push(post);
    } else {
      postMap[item] = [post];
    }
  });
};

/**
 * @description 统计文章信息
 * @param pages 指定目录的md文件信息
 * @param distName 指定目录
 * @returns 文章、分类、标签信息
 */
export const getAllMdMsg = (pages: Pages[], distName: string): PostMsg => {
  const postList: Post[] = [];
  const allCategory: PostMap = {};
  const allTag: PostMap = {};
  pages.forEach(page => {
    if (page.filePathRelative && page.filePathRelative.includes(distName)) {
      const post: Post = {
        // 文章名
        name: page.frontmatter.title || page.title,
        // 创建日期 以推到git仓库为准
        date: page.data?.git?.createdTime || page.date,
        // 文章分类
        categories: (page.frontmatter.category as string[]) || [],
        // 文章标签
        tags: (page.frontmatter.tag as string[]) || [],
        // 跳转链接
        link: "/" + page.filePathRelative,
        content: page.contentRendered,
      };
      // 统计文章时间
      postList.push(post);
      // 统计文章分类
      if (isArray(page.frontmatter.category)) {
        getListBySomething(allCategory, post, page.frontmatter.category);
      }
      // 统计标签
      if (isArray(page.frontmatter.tag)) {
        getListBySomething(allTag, post, page.frontmatter.tag);
      }
    }
  });
  return {
    postInfo: postList,
    allCategory: {
      allCategory: Object.keys(allCategory),
      data: {
        ...allCategory,
      },
    },
    allTag: {
      allTag: Object.keys(allTag),
      data: {
        ...allTag,
      },
    },
  };
};
