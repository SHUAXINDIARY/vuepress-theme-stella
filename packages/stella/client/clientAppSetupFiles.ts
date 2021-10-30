import { defineClientAppSetup } from "@vuepress/client";
// 会自动在setup中执行
export default defineClientAppSetup(() => {
  // 解决ios浏览器hover 属性失效
    document.body.addEventListener('touchstart',function(){});
});
