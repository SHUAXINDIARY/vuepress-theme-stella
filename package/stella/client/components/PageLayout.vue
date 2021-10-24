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
      <div class="right" v-if="!isHome">
        <div class="header">
          <MobilelHeader />
        </div>
        <div class="content">
          <PostList v-if="isShowPostList" />
          <div v-else>
            <Title
              :title="foront?.title || pageData.title"
              :createdTime="foront?.date || pageData.git.createdTime"
            />
            <div class="theme-default-content">
              <Post />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { usePageData, useSiteData, usePageFrontmatter } from "@vuepress/client";
import { useRoute } from "vue-router";
import Post from "./Post.vue";
import Title from "./Title.vue";
import PostList from "../layouts/PostList.vue";
import Cover from "./Cover.vue";
export default defineComponent({
  props: {
    isHome: Boolean,
    isShowPostList: Boolean,
  },
  components: {
    Post,
    Title,
    Cover,
    PostList,
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
