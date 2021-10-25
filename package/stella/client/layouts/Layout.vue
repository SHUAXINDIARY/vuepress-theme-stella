<style lang="scss">
@import "../styles/reset.scss";
@import "../fonts/iconfont.css";
</style>
<style lang="scss" scoped>
@import "../styles/layout.scss";
@media screen and (min-width: $middle) {
  .header {
    display: none;
  }
}
</style>
<template>
  <div class="layout">
    <div class="container">
      <div class="left">
        <Cover />
        <div class="footer">{{ themeData.themeConfig.footer }}</div>
      </div>
      <div class="right">
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { usePageData, useSiteData, usePageFrontmatter } from "@vuepress/client";
import { useRoute } from "vue-router";
import Cover from "../components/Cover.vue";
export default defineComponent({
  props: {
    isHome: Boolean,
    isShowPostList: Boolean,
  },
  components: {
    Cover,
  },
  setup() {
    const pageData = usePageData();
    const route = useRoute();
    const foront = usePageFrontmatter();
    const siteData = useSiteData();
    const themeData = useThemeData();
    const supportIcons = {
      WEIXIN: "icon-weixin",
      TWITTER: "icon-HTSCIT-Twitter",
      WEIBO: "icon-weibo",
      EMAIL: "icon-email",
      DOUBAN: "icon-douban",
      GITHUB: "icon-github-outline",
    };
    return {
      supportIcons,
      foront,
      pageData,
      siteData,
      themeData,
      route,
    };
  },
});
</script>
