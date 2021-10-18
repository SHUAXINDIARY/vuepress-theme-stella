---
title: MD样式测试
category:
    - 技术
tag:
    - MarkDown
    - tag1
    - tag2
    - tag3
    - tag4
    - tag5
    - tag6
    - tag7
    - tag8
---

# header
# H1
## H2

### h4

#### h5

##### h6

# Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

# Lists

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

# LInks
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

# Table

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned |  |
| col 2 is      | centered      |    |
| zebra stripes | are neat      |     |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

# Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

    Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

    This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can put Markdown into a blockquote.

# Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

<dl>
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>
    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>



# Horizontal Rule

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

#  code block
> 测试代码块

*zhengwen* **cehsi**

```javascript

const a = 123;
console.log(a);
const {
  path
} = require("@vuepress/utils");

module.exports = {
  title: "SHUAXIN.",
  theme: path.resolve(__dirname, "./theme/node"),
  themeConfig: {
    codeTheme: "vitesse-dark",
    footer: "SHUAXINDIARY Blog",
    cates: [{
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
  },
};

```

# Image
![](https://camo.githubusercontent.com/8dc2f07c4ac17659fa7ec8f47145f5b0f51849f9c811f05f57d6f544d300fc56/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d7368756178696e64696172792673686f775f69636f6e733d74727565267468656d653d6275656679266c61796f75743d636f6d70616374)
