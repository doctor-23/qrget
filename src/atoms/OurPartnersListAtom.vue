<template>
  <div
      :class="{ [`item-${index}`]: index}"
      :style="`background-image: url(${item.image})`"
  >
    <h3 class="item-heading">
      {{ item.title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {title: "", image: ""}
    },
    index: {
      type: Number,
      default: 0
    },
  }
}
</script>

<style scoped lang="scss">
.item-1 {
  .item-heading {
    font-size: 40px;
    font-weight: 700;
    text-align: left;
    line-height: 1.1;

    @include mobile {
      font-size: 28px;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
    }
  }
}
.item-heading {
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;

  @include mobile {
    font-size: 22px;
  }
}
</style>
