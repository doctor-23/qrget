<template>
  <ul class="tabs">
    <li
        v-for="( item, index ) in tabs"
        :key="item.text"
        :class="{active: activeTab === index}"
        @click="updateActiveTab(index)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["tabs", "activeTab"],
  methods: {
    updateActiveTab(index) {
      this.$emit('updateActiveTab', index)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @include mobile {
    margin-bottom: 25px;
  }

  li {
    padding: 0 14px 21px;
    line-height: 1.1;
    text-align: center;
    border-bottom: 1px solid rgba(36, 36, 36, 0.6);
    cursor: pointer;
    user-select: none;

    @include mobile {
      padding: 0 5.5px 11px;
    }

    &.active {
      padding-bottom: 20px;
      font-weight: bold;
      border-bottom: 2px solid #242424;

      @include mobile {
        padding-bottom: 10px;
      }
    }
  }
}

</style>
