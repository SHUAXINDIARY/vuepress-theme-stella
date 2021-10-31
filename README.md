# Introduction
- Hi there ! Stella is a Gatsby Theme, design by [jctaoo](https://github.com/jctaoo), But now if you are vuepress2.x users, now you can use **Stella** too!
- English | [Chinese](./README_CN.md)
# Overview
![](./stella_cover.png)

# Usage
 
## themeConfig
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
- [x] config other link
- [x] follow system mode （dark/light）
- [x] markdown style of stella
- [x] passage filter by category 、tag
- [ ] config default page ON-OFF
- [x] comment system
- [x] mobile adaptation
- [ ] change theme color
- [ ] pagination
- [ ] doc、blog mode 
- [ ] post banner img
- [ ] site search
- [ ] friend link
- [ ] clipboard-plugin
- [ ] comment-plugin

# License
[![License: MIT](https://img.shields.io/badge/License-0BSD-yellow.svg)](https://opensource.org/licenses/0BSD)


[LICENSE](https://github.com/SHUAXINDIARY/vuepress-theme-stella/blob/main/LICENSE) file
