<template>
  <div class="demo-wrapper">
    <component :is="component" />
    <details v-if="code" class="custom-block details">
      <summary>Click me to view the code</summary>
      <span v-html="code"></span>
    </details>
  </div>
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

<style lang="scss" scoped>
@import '../styles/var.scss';

.demo-wrapper {
  border: 1px solid var(--vp-c-divider-light);
  border-radius: $spacing-base;
  padding: $spacing-medium $spacing-medium 0;
  margin: $spacing-medium 0;

  ::v-deep(div[class*='language-']) {
    font-size: 16px;
  }
}
</style>
