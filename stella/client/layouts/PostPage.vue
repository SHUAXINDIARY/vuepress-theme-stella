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
@media screen and (max-width: $middle) {
  .left {
    display: none;
  }
  .right {
    display: block !important;
    width: 100vw;
    height: 100vh;
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
        <div class="header">
          <MobilelHeader />
        </div>
        <div class="content">
          <PostList />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePageData, useSiteData, usePageFrontmatter } from "@vuepress/client";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import Post from "../components/Post.vue";
import Title from "../components/Title.vue";
import Cover from "../components/Cover.vue";
import MobilelHeader from "../components/MobilelHeader.vue";
import PostList from "./PostList.vue";
import { _ } from "../../util";
export default defineComponent({
  components: {
    Post,
    Title,
    Cover,
    PostList,
    MobilelHeader,
  },
  setup(props, ctx) {
    const pageData = usePageData();
    const route = useRoute();
    const foront = usePageFrontmatter();
    const siteData = useSiteData();
    const themeData = useThemeData();
    onMounted(() => {
      console.log(route.path);
    });
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

