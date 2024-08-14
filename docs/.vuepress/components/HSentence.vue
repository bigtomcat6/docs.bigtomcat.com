<template>
  <div :class="layoutClass">
    <div :class="isEm">
      <div class="h5-style"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HSentence',
  props: {
    layout: {
      type: String,
      default: 'center',
      validator: value => ['left', 'center', 'right'].includes(value),
    },
    left: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    em: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    layoutClass() {
      if (this.left) return 'layout-left';
      if (this.center) return 'layout-center';
      if (this.right) return 'layout-right';
      return `layout-${this.layout}`;
    },
    isEm() {
      return this.em ? 'em' : '';
    }
  },
};
</script>

<style scoped lang="scss">
.layout-left {
  text-align: left;
}

.layout-center {
  text-align: center;
}

.layout-right {
  text-align: right;
}

/* h5-style class to mimic the <h5> style */
.h5-style {
  font-size: 1.13em; /* Adjust based on your <h5> style */
  font-weight: bold; /* Typical for headings, adjust as necessary */
  line-height: 1.3; /* Adjust based on your <h5> style */
  /* margin: 1.67em 0; /* Adjust based on your <h5> style */
  font-family: Comic-Sans-MS, HannotateSC-W5
}

.em {
  font-style: italic;
}

</style>