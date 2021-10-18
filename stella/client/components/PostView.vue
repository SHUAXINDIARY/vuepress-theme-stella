<style lang="scss" scoped>
@import "../styles/theme.scss";
.postView {
  padding: 20px 0;
  .postViewTag {
    width: 400px;
    margin: 0 auto;
    span {
      margin-right: 10px;
      cursor: pointer;
      font-weight: 700;
      @include label-link-normal-color;
      &:hover {
        @include label-link-high-color;
      }
    }
    .categories {
      text-decoration: underline rgba(60, 60, 67, 0.6) solid;
    }
  }
}
</style>
<template>
  <div class="postView" v-for="(item, i) of postInfo" :key="i">
    <RouterLink :to="item.link">
      <Title :title="item.name" />
    </RouterLink>
    <div class="postViewTag">
      <span class="iconfont icon-calendar1">
        {{ dayjs(item.date).format("YYYY-MM-DD") }}
      </span>
      <span
        class="categories"
        v-for="(item, i) of item.categories || []"
        :key="i"
        @click="() => handleSelectCate(item)"
      >
        {{ item }}
      </span>
      <span
        class="tags"
        v-for="(item, i) of item.tags || []"
        :key="i"
        @click="() => handleSelectTag(item)"
      >
        #{{ item }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { stateEmum } from "../../types";
import Title from "./Title.vue";
import dayjs from "dayjs";

export default defineComponent({
  props: {
    postInfo: Array,
    setState: Function,
  },
  components: {
    Title,
  },
  setup(props) {
    const handleSelectCate = (cate: string) => {
      props.setState!(stateEmum.selectedCate, cate);
    };
    const handleSelectTag = (tag: string) => {
      props.setState!(stateEmum.selectedTag, tag);
    };
    return {
      dayjs,
      handleSelectTag,
      handleSelectCate,
    };
  },
});
</script>
