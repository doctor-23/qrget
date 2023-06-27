<template>
  <a
      v-if="link"
      :href="link"
      :class="className"
      class="btn"
  >
    <slot></slot>
  </a>

  <button
      v-else
      class="btn"
      :class="className"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['className', 'link']
}
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 65px;
  color: #242424;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 140%;
  background-color: var(--green);
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out;

  @include mobile {
    width: 335px;
    height: 45px;
  }

  @include fullMobile {
    width: 100%;
  }

  &:hover {
    color: #fff;
    background-color: var(--violet);
  }
}
</style>
