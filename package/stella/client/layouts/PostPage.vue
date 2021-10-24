<template>
  <PageLayout :isShowPostList="true" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageLayout from "../components/PageLayout.vue";

export default defineComponent({
  components: {
    PageLayout,
  },
});
</script>

