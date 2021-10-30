<style lang="scss" scoped>
@import "../styles/constant";
a {
  &:hover {
    font-weight: 700;
  }
  transition: $transition;
}
</style>
<template>
  <div class="footer">
    <a
      v-if="typeof themeData.themeConfig.footer === 'object'"
      :href="themeData.themeConfig.footer.link"
      target="_blank"
    >
      {{ themeData.themeConfig.footer.label }}
    </a>
    <span v-else>
      {{ themeData.themeConfig.footer }}
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";

export default defineComponent({
  setup() {
    const themeData = useThemeData();
    return {
      themeData,
    };
  },
});
</script>
