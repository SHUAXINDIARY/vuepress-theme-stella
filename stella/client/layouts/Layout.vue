<style lang="scss">
@import "../styles/reset.scss";
@import "../fonts/iconfont.css";
</style>
<style lang="scss" scoped>
@import "../styles/layout.scss";
</style>
<template>
  <div class="layout">
    <div class="container">
      <div class="left">
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
                <span>{{ item.text }}</span>
                <span
                  :class="
                    route.path.includes(item.link)
                      ? 'linkFocusLine'
                      : 'linkLine'
                  "
                ></span>
              </RouterLink>
            </li>
          </ul>
          <ul class="iconList">
            <li
              v-for="(item, index) of themeData.themeConfig.icons"
              :key="index"
            >
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
      </div>
      <div class="right">
        <div class="content">
          <div
            v-if="
              ['/about/'].includes(route.path) ||
              (route.path.includes('/post/') && route.path !== '/post/')
            "
          >
            <Title
              :title="foront?.title || pageData.title"
              :createdTime="foront?.date || pageData.git.createdTime"
            />
            <div class="theme-default-content">
              <Post />
            </div>
          </div>
          <div v-if="route.path === '/post/'">
            <PostList />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">{{ themeData.themeConfig.footer }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { usePageData, useSiteData, usePageFrontmatter } from "@vuepress/client";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import Post from "../components/Post.vue";
import Title from "../components/Title.vue";
import PostList from "./PostList.vue";
import { _ as lodash } from "../../util";
export default defineComponent({
  components: {
    Post,
    Title,
    PostList,
  },
  setup(props, ctx) {
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
    const handleCopyEmail = (email: string) => {
      const result = lodash.copyText(email);
      result && alert("已复制到粘贴板");
    };
    return {
      supportIcons,
      foront,
      pageData,
      siteData,
      themeData,
      route,
      handleCopyEmail,
    };
  },
});
</script>

