<style lang="scss" scoped>
@import "../styles/theme.scss";
@media screen and (max-width: $middle) {
  .postTitle {
    margin-left: 10px;
  }
  .postDate {
    padding-left: 20px;
  }
}
.postTitle,
.hoverpostTitle {
  display: inline-block;
  position: relative;
  font-size: 25px;
  padding-bottom: 3px;
  cursor: pointer;
  position: relative;

  span:first-child {
    position: relative;
    z-index: 1;
    @include label-color;
  }

  &:hover {
    .titleDesLine {
      transition: $transition;
      height: 60%;
    }
  }

  .titleDesLine {
    transition: $transition;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40%;
    width: 100%;
    @include indicator-high-color;
  }
}

.postDate {
  @include label-link-normal-color;
  font-size: 17px;
  font-weight: 700;
  font-family: PingFangSC-Regular;
  cursor: pointer;
}
</style>
<template>
  <h2 :class="hover ? 'hoverpostTitle' : 'postTitle'">
    <span>{{ title }}</span>
    <span class="titleDesLine"></span>
  </h2>
  <div class="postDate" v-if="createdTime">
    <span class="iconfont icon-calendar1">{{ createdTime }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import dayJs from "dayjs";
export default defineComponent({
  props: {
    title: String,
    createdTime: Number,
    hover: Boolean,
  },
  setup(props) {
    return {
      createdTime:
        props.createdTime && dayJs(props.createdTime).format("YYYY-MM-DD"),
    };
  },
});
</script>
