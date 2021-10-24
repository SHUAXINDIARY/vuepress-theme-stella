import type { HighlighterOptions } from "shiki";
import type { Page, PageData } from "vuepress";
import type { GitPluginPageData } from "@vuepress/plugin-git";

interface Cates {
    text: string;
    link: string;
}
interface Icons {
    label: string;
    link: string;
}
type Data = PageData & GitPluginPageData;

export type Pages = Page<Data>;

export interface ThemeConfig {
    shiki?: HighlighterOptions;
    footer?: string;
    cates?: Cates[];
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
