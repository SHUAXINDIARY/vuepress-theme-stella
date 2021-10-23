# Introduction
- Hi there ! Stella is a Gatsby Theme, design by [jctaoo](https://github.com/jctaoo), But now if you are vuepress2.x users, now you can use **Stella** too!
- English | [Chinese](./README_CN.md)
# Overview
![](./stella_cover.png)

# Usage
 
## themeConfig
```js
module.exports = {
  // vuepress config  
  title: "SHUAXIN.",
  theme: 'stella',
  themeConfig: {
    // shiki config , same as official website
    shiki:{
      // highlight theme 
      // look here to find more theme https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "material-darker",
      // support code https://github.com/shikijs/shiki/blob/main/docs/languages.md
      lang: [ 'html' ],
    },
    // footer content
    footer: "SHUAXINDIARY Blog",
    // pageCategory config 
    cates: [
      {
        text: "文章",
        link: "/post/",
      },
      {
        text: "片段",
        link: "/snippets/",
      },
      {
        text: "关于",
        link: "/about/",
      },
    ],
    // media config
    icons:[
      {
        label:'GITHUB',
        link:'https://github.com/SHUAXINDIARY'
      },
      {
        label:'EMAIL',
        link:''
      },
      {
        label:'WEIXIN',
        link:''
      },
    ]
  },
};


```


<!-- # Feature -->

# TODO
- [x] config other link
- [x] follow system mode （dark/light）
- [x] markdown style of stella
- [x] passage filter by category 、tag
- [ ] config default page ON-OFF
- [ ] comment system
- [ ] change theme color
- [ ] pagination
- [ ] doc、blog mode 
- [x] mobile adaptation
- [ ] post banner img
- [ ] site search
- [ ] friend link

# License
[![License: MIT](https://img.shields.io/badge/License-0BSD-yellow.svg)](https://opensource.org/licenses/0BSD)


[LICENSE](https://github.com/SHUAXINDIARY/vuepress-theme-stella/blob/main/LICENSE) file
