<style lang="scss" scoped>
@import "../styles/theme.scss";
.headerContainer {
  border-bottom: 1px solid;
  padding: 10px;
  & > div,
  a {
    @include label-color;
  }
  & > div {
    font-size: 28px;
    font-weight: 400;
    padding: 0 4px;
    .slash {
      display: inline-block;
      width: 2px;
      height: 24px;
      transform: rotate(30deg);
      margin-left: 8px;
      margin-right: 12px;
      box-sizing: border-box;
      @include label-color-background;
    }
    .highTitle {
      font-size: 25px;
      @include indicator-high-color;
    }
  }
  .iconList {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 0;
    margin-bottom: 0;
    li {
      margin-right: 20px;
    }
    .iconfont {
      font-size: 25px;
    }
  }
}
</style>
<template>
  <div class="headerContainer">
    <div>
      <span>
        <RouterLink to="/">
          {{ siteData.title }}
        </RouterLink>
      </span>
      <span class="slash"></span>
      <span class="highTitle">{{ pageName }}</span>
    </div>
    <ul class="iconList">
      <li v-for="(item, index) of themeData.themeConfig.icons" :key="index">
        <a
          v-if="['EMAIL', 'WEIXIN'].includes(item.label)"
          target="_blank"
          @click="() => handleCopyEmail(item.link)"
          class="copyBtn"
        >
          <span :class="`iconfont ${supportIcons[item.label]}`"></span>
        </a>
        <a v-else :href="item.link" target="_blank">
          <span :class="`iconfont ${supportIcons[item.label]}`"></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { usePageData, useSiteData } from "@vuepress/client";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { useRoute } from "vue-router";
import { _ as lodash } from "../../util";

import Title from "./Title.vue";
const MMOBILE_TITLE = {
  post: "文章",
  about: "关于",
  snippet: "片段",
};
export default defineComponent({
  components: {
    Title,
  },
  setup() {
    const pageData = usePageData();
    const route = useRoute();
    const siteData = useSiteData();
    let pageName = ref("");
    const themeData = useThemeData();
    watchEffect(() => {
      pageName.value = MMOBILE_TITLE[route.path.split("/")[1]];
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
      pageData,
      route,
      siteData,
      pageName,
      supportIcons,
      themeData,
      handleCopyEmail: lodash.handleCopyEmail,
    };
  },
});
</script>
