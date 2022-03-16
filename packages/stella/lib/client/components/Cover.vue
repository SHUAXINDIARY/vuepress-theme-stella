<style lang="scss" scoped>
@import "../styles/cover.scss";
// 移动端
@media screen and (max-width: $middle) {
  @include mobile_cover;
}
// pc端
@media screen and (min-width: $middle) {
  @include pc_cover;
}
</style>
<template>
  <div class="userMsg">
    <h1>
      <RouterLink to="/">{{ siteData.title }}</RouterLink>
    </h1>
    <ul class="cateList">
      <li
        v-for="(item, index) of themeData.themeConfig.cates"
        :key="index"
        :class="route.path.includes(item.link) ? 'focus' : 'normal'"
      >
        <RouterLink :to="item.link">
          <span>{{ item.label }}</span>
          <span
            :class="
              route.path.includes(item.link) ? 'linkFocusLine' : 'linkLine'
            "
          ></span>
        </RouterLink>
      </li>
    </ul>
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
import { defineComponent } from "vue";
import { usePageData, useSiteData } from "@vuepress/client";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { useRoute } from "vue-router";
import { _ as lodash } from "../../util";

export default defineComponent({
  setup() {
    const pageData = usePageData();
    const route = useRoute();
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
    const handleCopyEmail = async (email: string) => {
      const res = await lodash.copyText(email);
      res && alert("已复制到粘贴板");
    };
    return {
      supportIcons,
      pageData,
      siteData,
      themeData,
      route,
      handleCopyEmail,
    };
  },
});
</script>
