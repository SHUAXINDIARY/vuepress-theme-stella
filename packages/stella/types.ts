import type { HighlighterOptions } from "shiki";
import type { Page, PageData } from "vuepress";
import type { GitPluginPageData } from "@vuepress/plugin-git";

interface ICommon {
  label: string;
  link: string;
}

type Ifooter = ICommon;
type Icates = ICommon;
export type linkLabel = "WEIXIN" | "TWITTER" | "WEIBO" | "EMAIL" | "DOUBAN" | "GITHUB";

interface Icons extends ICommon {
  label: linkLabel;
}

type Data = PageData & GitPluginPageData;

export type Pages = Page<Data>;

export interface ThemeConfig {
  shiki?: HighlighterOptions;
  footer?: string | Ifooter;
  cates?: Icates[];
  icons?: Icons[];
}

export interface Post {
  link: string;
  date: number | string;
  name: string;
  categories: string[];
  tags: string[];
}

export enum stateEmum {
  selectedCate = "selectedCate",
  selectedTag = "selectedTag",
}

export interface PostMap {
  [key: string]: Post[];
}
export interface CategoryMap {
  allCategory: string[];
  data: PostMap;
}
export interface TagMap {
  allTag: string[];
  data: PostMap;
}
