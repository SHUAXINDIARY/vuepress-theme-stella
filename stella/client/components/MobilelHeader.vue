<style lang="scss" scoped>
@import "../styles/theme.scss";
.headerContainer {
  border-bottom: 1px solid;
  h3 {
    font-size: 28px;
    text-indent: 2rem;
    font-weight: 400;
    .slash {
      display: inline-block;
      width: 2px;
      height: 24px;
      transform: rotate(30deg);
      margin-left: 8px;
      margin-right: 12px;
    }
  }
  @include background;
}
</style>
<template>
  <div class="headerContainer">
    <h3>
      <span>
        <RouterLink to="/">{{ siteData.title }}</RouterLink></span
      >
      <span class="slash"></span>
      <span>{{ pageName }}</span>
    </h3>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { usePageData, useSiteData } from "@vuepress/client";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const pageData = usePageData();
    const route = useRoute();
    const siteData = useSiteData();
    let pageName = ref("");
    watchEffect(() => {
      console.log(route.path.split("/")[1]);
      pageName.value = route.path.split("/")[1];
    });
    return {
      pageData,
      route,
      siteData,
      pageName,
    };
  },
});
</script>
