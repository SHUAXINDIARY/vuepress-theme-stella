import { isArray } from "@vue/shared";
import type { Pages, Post, CategoryMap, PostMap, TagMap } from "../../types";
export const getAllPostMsg = (pages: Pages[]): Post[] => {
  const result: Post[] = [];
  pages.forEach(page => {
    console.log(page);
    if (page.filePathRelative && page.filePathRelative.includes("post")) {
      result.push({
        // 文章名
        name: page.frontmatter.title || page.title,
        // 创建日期 以推到git仓库为准
        date: page.data.git.createdTime || page.date,
        // 文章分类
        categories: (page.frontmatter.category as string[]) || [],
        // 文章标签
        tags: (page.frontmatter.tag as string[]) || [],
        // 跳转链接
        link: "/" + page.filePathRelative,
      });
    }
  });
  return result;
};

export const getAllCategory = (pages: Pages[]): CategoryMap => {
  const result: PostMap = {};
  pages.forEach(page => {
    if (page.filePathRelative && page.filePathRelative.includes("post")) {
      if (isArray(page.frontmatter.category)) {
        page.frontmatter.category.forEach(cate => {
          const pageInfo = {
            // 文章名
            name: page.frontmatter.title || page.title,
            // 创建日期 以推到git仓库为准
            date: page.data.git.createdTime || page.date,
            // 文章分类
            categories: (page.frontmatter.category as string[]) || [],
            // 文章标签
            tags: (page.frontmatter.tag as string[]) || [],
            // 跳转链接
            link: "/" + page.filePathRelative,
          };
          if (result[cate]) {
            result[cate].push(pageInfo);
          } else {
            result[cate] = [pageInfo];
          }
        });
      }
      return page.filePathRelative;
    }
  });
  return {
    allCategory: Object.keys(result),
    data: {
      ...result,
    },
  };
};
export const getAllTag = (pages: Pages[]): TagMap => {
  const result: PostMap = {};
  pages.forEach(page => {
    if (page.filePathRelative && page.filePathRelative.includes("post")) {
      if (isArray(page.frontmatter.tag)) {
        page.frontmatter.tag.forEach(tag => {
          const pageInfo = {
            // 文章名
            name: page.frontmatter.title || page.title,
            // 创建日期 以推到git仓库为准
            date: page.data.git.createdTime || page.date,
            // 文章分类
            categories: (page.frontmatter.category as string[]) || [],
            // 文章标签
            tags: (page.frontmatter.tag as string[]) || [],
            // 跳转链接
            link: "/" + page.filePathRelative,
          };
          if (result[tag]) {
            result[tag].push(pageInfo);
          } else {
            result[tag] = [pageInfo];
          }
        });
      }
      return page.filePathRelative;
    }
  });
  return {
    allTag: Object.keys(result),
    data: {
      ...result,
    },
  };
};
