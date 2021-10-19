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
        <Cover />
      </div>
      <div class="right"></div>
    </div>
    <div class="footer">{{ themeData.themeConfig.footer }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import Post from "../components/Post.vue";
import Title from "../components/Title.vue";
import PostList from "./PostList.vue";
import Cover from "./Cover.vue";
export default defineComponent({
  components: {
    Post,
    Title,
    Cover,
    PostList,
  },
  setup(props, ctx) {
    const themeData = useThemeData();
    onMounted(() => {
      console.log("comming home");
    });
    return {
      themeData,
    };
  },
});
</script>

