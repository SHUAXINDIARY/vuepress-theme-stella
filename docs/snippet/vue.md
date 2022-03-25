---
title: Vue
category: 
    - 语法测试
---

# 关于Vue语法

```vue
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return {
      count
    }
  },

  mounted() {
    console.log(this.count)
  }
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```