import { defineClientAppEnhance } from '@vuepress/client'
// 注册全局组件等 增强客户端能力
export default defineClientAppEnhance(({ app, router }) => {
  console.log(app)
})
