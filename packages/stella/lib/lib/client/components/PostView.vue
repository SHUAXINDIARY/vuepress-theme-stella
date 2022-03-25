<style lang="scss" scoped>
@import "../styles/theme.scss";
@import "../styles/markdown.scss";
.postView {
  @media screen and (max-width: $middle) {
    padding: 0 0 20px 0;
    .postViewTag {
      margin-left: 20px;
      width: 300px;
    }
  }
  @media screen and (min-width: $middle) {
    padding: 20px 0;
    .postViewTag {
      width: 400px;
      margin: 0 auto;
    }
  }
}
.snippet {
  width: 100%;
  .snippetContent {
    margin-top: 20px;
  }
}
.postViewTag {
  span {
    display: inline-block;
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
</style>
<template>
  <div
    :class="route.path.includes('snippet') ? 'snippet' : 'postView'"
    v-for="(item, i) of postInfo"
    :key="i"
  >
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
    <div
      class="snippetContent passage-container"
      v-if="route.path.includes('snippet')"
      v-html="item.content"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { stateEmum } from "../../types";
import Title from "./Title.vue";
import dayjs from "dayjs";
import { useRoute } from "vue-router";

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
      route: useRoute(),
      handleSelectTag,
      handleSelectCate,
    };
  },
});
</script>
