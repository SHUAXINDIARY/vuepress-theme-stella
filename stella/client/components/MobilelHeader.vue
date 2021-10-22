<style lang="scss" scoped>
@import "../styles/theme.scss";
.headerContainer {
  border-bottom: 1px solid;
  padding: 10px;
  & > div {
    font-size: 28px;
    text-indent: 2rem;
    font-weight: 400;
    padding: 4px 18px;
    @include background;
    .slash {
      display: inline-block;
      width: 2px;
      height: 24px;
      transform: rotate(30deg);
      margin-left: 8px;
      margin-right: 12px;
      box-sizing: border-box;
      background-color: #000;
    }
    .highTitle {
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
        <RouterLink to="/">{{ siteData.title }}</RouterLink></span
      >
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
import Title from "./Title.vue";
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
      console.log(route.path.split("/")[1]);
      pageName.value = route.path.split("/")[1];
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
    };
  },
});
</script>
