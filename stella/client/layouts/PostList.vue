<style lang="scss" scoped>
@import "../styles/theme.scss";
.postViewContainer {
  padding-top: 102px;
  @media screen and (max-width: $middle) {
    padding-top: 20px;
  }
  .postViewList {
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
  }
}
</style>
<template>
  <div class="postViewContainer">
    <PassageFilter
      :setState="setState"
      :selectedCate="selectedCate"
      :selectedTag="selectedTag"
      :allCategory="foront?.allCategory?.allCategory"
      :allTag="foront?.allTag?.allTag"
    />
    <div class="postViewList">
      <PostView :postInfo="postList" :setState="setState" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watchEffect, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { usePageFrontmatter } from "@vuepress/client";
import { Post, stateEmum } from "../../types";
import PostView from "../components/PostView.vue";
import PassageFilter from "../components/PassageFilter.vue";
export default defineComponent({
  components: {
    PostView,
    PassageFilter,
  },
  setup(props) {
    const foront = usePageFrontmatter();
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      [stateEmum.selectedCate]: "所有",
      [stateEmum.selectedTag]: "所有",
    });
    const _postState = reactive({
      // @ts-ignore
      postList: foront?.value.postInfo || [],
    });
    // 设置query 来保证刷新后filter 依旧有效
    const setState = (key: stateEmum, value: any) => {
      state[key] = value;
      router.push({
        path: route.path,
        query: {
          ...route.query,
          [key]: value,
        },
      });
    };
    const initSelectedState = () => {
      const {
        query: { selectedCate, selectedTag },
      } = route;
      if (selectedCate) {
        setState(stateEmum.selectedCate, selectedCate);
      }
      if (selectedTag) {
        setState(stateEmum.selectedTag, selectedTag);
      }
    };
    const reRenderPost = () => {
      const {
        // @ts-ignore
        allCategory: { data: categoryData },
        // @ts-ignore
        allTag: { data: tagData },
      } = foront.value;
      const newPostList: Post[] = [];
      if (state.selectedTag !== "所有") {
        newPostList.push(...[...tagData[state.selectedTag]]);
      }
      if (state.selectedCate !== "所有") {
        newPostList.push(...[...categoryData[state.selectedCate]]);
      }
      _postState.postList =
        newPostList.length !== 0 ? newPostList : foront?.value.postInfo;
    };
    watch([state], () => {
      reRenderPost();
    });
    watchEffect(() => {
      initSelectedState();
    });
    return {
      foront,
      ...toRefs(_postState),
      setState,
      ...toRefs(state),
    };
  },
});
</script>

