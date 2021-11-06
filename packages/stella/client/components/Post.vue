<style lang="scss">
@import "../styles/markdown.scss";
.passage-container {
  padding: 20px;
}
</style>
<template>
  <div class="passage-container">
    <Content />
    <div
      v-if="
        themeData?.themeConfig.comment &&
        !lodash.isEmpty(themeData.themeConfig.comment)
      "
      id="Waline"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Waline from "@waline/client";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { _ as lodash } from "../../util";
export default defineComponent({
  setup() {
    const themeData = useThemeData();
    const initWaline = () => {
      console.log();
      Waline({
        el: "#Waline",
        ...themeData.value.themeConfig?.comment,
      });
    };
    onMounted(() => {
      if (!lodash.isEmpty(themeData.value.themeConfig?.comment)) {
        initWaline();
      }
    });

    return { themeData, lodash };
  },
});
</script>

