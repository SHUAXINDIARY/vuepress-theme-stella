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
  .header {
    display: block;
  }
  .left {
    display: none;
  }
  .right {
    display: block !important;
    width: 100vw;
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
          <PostList v-if="route.path === '/post/'" />
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
import { defineComponent, watchEffect } from "vue";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { useRoute } from "vue-router";
import Post from "../components/Post.vue";
import Title from "../components/Title.vue";
import PostList from "../components/PostList.vue";
import Cover from "../components/Cover.vue";
import MobilelHeader from "../components/MobilelHeader.vue";
export default defineComponent({
  components: {
    Post,
    Title,
    Cover,
    PostList,
    MobilelHeader,
  },
  setup() {
    const route = useRoute();
    const pageData = usePageData();
    const foront = usePageFrontmatter();
    const themeData = useThemeData();
    watchEffect(() => {
      console.log(route.path);
    });
    return {
      foront,
      pageData,
      themeData,
      route,
    };
  },
});
</script>
