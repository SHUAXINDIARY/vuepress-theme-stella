# 简介
- Stella 是一个Gatsby的主题, 由[jctaoo](https://github.com/jctaoo)设计, 如果你是vuepress2.x的用户，现在也可以做在vuepress中使用这个主题啦
- [英语](./README.md) | 中文
****
# 概览
![](./stella_cover.png)


# 使用

## 安装

```shell
mkdir stella-demo

yarn init -y # or npm init -y

yarn add vuepress@next2.0.0-beta.26 

yarn add vuepress-theme-stella
```
## 写博客
所有文章文件都应该在**post**目录下

## 创建一个关于页
新建一个**about**目录，然后新建一个**README.md**

## 分类
## category

```md
---
title: MD样式测试
category:
    - 技术
tag:
    - MarkDown
---
```
## 主题配置

```ts
interface ICommon {
  label: string;
  link: string;
}

type Ifooter = ICommon;
type Icons = ICommon;
type Icates = ICommon;

interface ThemeConfig extends VupressSiteConfig {
  shiki?: HighlighterOptions;
  footer?: string | Ifooter;
  cates?: Icates[];
  icons?: Icons[];
}
```


<!-- # Feature -->

# TODO
- [x] 支持配置外链 
- [x] 支持跟随系统切换模式（深色/浅色） 
- [x] Stella md 文件样式
- [x] 支持分类、tag过滤文章 
- [x] 支持评论系统 
- [x] 移动端适配 
- [ ] 默认页支持配置开关 
- [ ] 支持切换主题色 
- [ ] 支持分页 
- [ ] 支持文档、博客模式 
- [ ] 文章页配置banner图
- [ ] 全文搜索
- [ ] 友链
- [ ] vue剪切板插件
- [ ] 评论插件

# License
[![License: MIT](https://img.shields.io/badge/License-0BSD-yellow.svg)](https://opensource.org/licenses/0BSD)


[LICENSE](https://github.com/SHUAXINDIARY/vuepress-theme-stella/blob/main/LICENSE) file
