<template>
  <component :is="component" />
  <details v-if="code" class="custom-block details">
    <summary>Click me to view the code</summary>
    <span v-html="code"></span>
  </details>
</template>

<script>
import raws from './raws';

export default {
  props: {
    component: String,
  },
  data() {
    return {
      code: raws[this.component],
    };
  },
};
</script>
