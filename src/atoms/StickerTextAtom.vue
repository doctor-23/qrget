<template>
  <span class="sticker-text" :class="className">
        <slot></slot>
    </span>
</template>

<script>
export default {
  props: ['className']
}
</script>

<style scoped lang="scss">
.sticker-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 84px;
  border: 3px dashed var(--violet);
  border-radius: 100px;

@include mobile {
  height: 46px;
}

span {
  height: 78px;
  padding: 10px 30px 0;
  font-size: 72px;
  line-height: 33px;
  font-weight: 700;
  color: #fff;
  border-radius: 100px;
  user-select: none;

@include mobile {
  height: 42px;
  line-height: 28px;
  padding-top: 0;
  font-size: 40px;
}
}
}
</style>
