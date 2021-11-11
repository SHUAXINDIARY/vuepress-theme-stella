---
title: Stella
category: 
    - 技术
tag:
    - vue
    - vuepress
    - blog
    - theme
    - stella
---

# 介绍

**Stella** 是一个 *vuepress2.x* 的主题，灵感来 *Gatsby* 的一个同名主题 *Stella*，作者是 **[jctaoo](https://github.com/jctaoo)**


# 快速上手

### 依赖

- Vuepress2.x(2.0.0-beta-26)
- Node v12+

### 安装

确保你的 **vuepress@next** 版本是 **2.0.0.beta6** ,官方最新是2.0.0.7， usePageFrontmatter 有点bug 

```shell

# 安装stella
yarn add vuepress-theme-stella

# 创建博客目录 所有博客文件都在post目录下 可自由在新建子级目录做分类
mkdir post

# 如果需要开启关于页

mkdir about 

# 在about下的README.md 编辑关于页的内容
touch about/README.md

```

### 主题配置

```ts

interface HighlighterOptions{
    /**
     * The theme to load upfront.
     * more https://github.com/shikijs/shiki/blob/main/docs/themes.md
     */
    theme?: IThemeRegistration;
    /**
     * A list of themes to load upfront.
     *
     * Default to: `['dark-plus', 'light-plus']`
     */
    themes?: IThemeRegistration[];
    /**
     * A list of languages to load upfront.
     *
     * Default to `['html', 'css', 'javascript']`
     * more https://github.com/shikijs/shiki/blob/main/docs/languages.md
     */
    langs?: (Lang | ILanguageRegistration)[];
    /**
     * Paths for loading themes and langs. Relative to the package's root.
     */
    paths?: IHighlighterPaths;
}

interface ICommon {
  label: string;
  link: string;
}

type Ifooter = ICommon;
type Icates = ICommon;

type linkLabel = "WEIXIN" | "TWITTER" | "WEIBO" | "EMAIL" | "DOUBAN" | "GITHUB";

interface Icons extends ICommon {
  label: linkLabel;
}

// 官方所有的站点配置均可用 一下是stella的themeConfig
interface ThemeConfig extends VupressSiteConfig {
    // shiki配置
    shiki?: HighlighterOptions;
    // 配置站点底部footer
    footer?: string | Ifooter;
    // 配置首页菜单栏
    cates?: Icates[];
    // 配置其他站点链接 
    icons?: Icons[];
}
```