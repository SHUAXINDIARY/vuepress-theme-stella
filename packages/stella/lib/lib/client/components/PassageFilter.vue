<style lang="scss" scoped>
@import "../styles/theme.scss";
.selectArea {
  display: flex;
  @media screen and (max-width: $middle) {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    & > div {
      margin-bottom: 20px;
    }
  }
  & > div {
    margin-right: 20px;
    position: relative;
  }

  span {
    font-size: 20px;
    font-weight: 700;
    font-family: $font;
    display: inline-block;
    @include label-link-normal-color;
  }

  .resetBtn {
    cursor: pointer;
    margin-left: 10px;
    font-weight: initial;
    font-size: 14px;
    @include link-color;
  }
  .passagFilter {
    cursor: pointer;
    border-radius: 7px;
    padding: 5px 14px;
    margin-right: 9px;
    @include lighten-high-text-background;
    .filterList {
      display: inline-block;
      position: absolute;
      width: 200px;
      height: 200px;
      overflow-y: scroll;
      box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
        0 9px 28px 8px rgb(0 0 0 / 5%);
      z-index: -1;
      top: 50px;
      left: 0;
      opacity: 0;
      transition: $transition;
      border-radius: 6px;
      padding: 10px 0;
      @include background;
      overflow-y: scroll;
      // 隐藏滚动条
      &::-webkit-scrollbar {
        display: none;
      }
      p {
        &:hover {
          @include lighten-high-text-background;
        }
      }
      .hoverItem {
        @include lighten-high-text-background;
      }
      .hoverItem,
      p {
        text-indent: 2rem;
        font-weight: 100;
        width: 95%;
        border-radius: 3px;
        margin: 0 auto;
        padding: 5px 0;
      }
    }
    &:hover {
      @include label-color;
      .filterList {
        opacity: 1;
        z-index: 100;
      }
    }
  }
}
</style>
<template>
  <div class="selectArea">
    <div class="categorySelect">
      <span class="passagFilter">
        {{ selectedCate }}
        <span class="filterList">
          <p v-if="allCategory?.length === 0">暂无数据</p>
          <p
            v-else
            v-for="(item, i) in allCategory"
            :key="i"
            @click="() => handleSelectCate(item)"
            :class="route.query.selectedCate === item && 'hoverItem'"
          >
            {{ item }}
          </p>
        </span>
      </span>
      <span class="filterName">分类的内容</span>
      <a
        class="resetBtn"
        v-if="
          !lodash.isEmpty(route.query) && route.query[stateEmum.selectedCate]
        "
        @click="() => handleCancelSelecte(stateEmum.selectedCate)"
      >
        取消
      </a>
    </div>
    <div class="tagSelect">
      <span class="passagFilter">
        {{ selectedTag }}
        <span class="filterList">
          <p v-if="allTag?.length === 0">暂无数据</p>
          <p
            v-else
            v-for="(item, i) in allTag"
            :key="i"
            @click="() => handleSelectTag(item)"
            :class="route.query.selectedTag === item && 'hoverItem'"
          >
            {{ item }}
          </p>
        </span>
      </span>
      <span class="filterName">标签的内容</span>
      <a
        class="resetBtn"
        v-if="
          !lodash.isEmpty(route.query) && route.query[stateEmum.selectedTag]
        "
        @click="() => handleCancelSelecte(stateEmum.selectedTag)"
      >
        取消
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { stateEmum } from "../../types";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { _ as lodash } from "../../util";
export default defineComponent({
  props: {
    selectedCate: String,
    selectedTag: String,
    setState: Function,
    allCategory: Array,
    allTag: Array,
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const handleSelectCate = (cate: string) => {
      props.setState!(stateEmum.selectedCate, cate);
    };
    const handleSelectTag = (tag: string) => {
      props.setState!(stateEmum.selectedTag, tag);
    };
    // 重置filter
    const handleCancelSelecte = (key: string) => {
      props.setState!(key, "所有");
      const query = {
        ...route.query,
      };
      delete query[key];
      router.push({
        path: route.path,
        query,
      });
    };
    return {
      lodash,
      route,
      stateEmum,
      handleSelectTag,
      handleSelectCate,
      handleCancelSelecte,
    };
  },
});
</script>
