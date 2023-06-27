<template>
  <svg
      :width="sizeX"
      :height="sizeY"
      class="svg-ico"
      :class="className"
      role="img">
    <use :xlink:href="sprite"></use>
  </svg>
</template>

<script>

import spriteFile from '@/assets/img/icons/sprite.svg';

export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    sizeX: {
      type: Number,
      default: 0
    },
    sizeY: {
      type: Number,
      default: 0
    },
    className: {
      type: String
    }
  },
  data() {
    return {
      sprite: `${spriteFile}#${this.name}`,
    }
  },
}
</script>

<style lang="scss">

</style>
