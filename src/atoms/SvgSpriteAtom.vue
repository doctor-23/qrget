<template>
  <svg
      :width="{ sizeX }"
      :height="{ sizeY }"
      class="svg-ico"
      :class="{ className }"
      role="img">
    <use :xlink:href="sprite"></use>
  </svg>
</template>

<script>

import spriteFile from '@/assets/img/icons/sprite.svg';

export default {
  props: ['name', 'sizeX', 'sizeY', 'className'],
  data() {
    return {
      sprite: `${spriteFile}#${this.name}`,
    }
  },
}
</script>

<style lang="scss">

</style>
