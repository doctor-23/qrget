<template>
  <ul class="tabs" :class="{'page-tabs': location === 'page', className}">
    <li
        v-for="( item, index ) in content"
        :key="item.value"
        :data-id="item.value"
        class="item"
        :class="{active: activeTab === index + 1}"
        @click="updateActiveTab(index + 1)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['content', 'location', 'activeTab', 'className'],
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
  gap: 25px;
  width: calc(100vw - ((100vw - var(--container)) / 2 + 20px));
  padding-right: calc((100vw - var(--container)) / 2 + 20px);
  margin-bottom: 50px;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  @include tablet {
    gap: 8px;
  }

  @include mobile {
    margin-bottom: 40px;
  }

  &.page-tabs {
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    max-width: 784px;
    margin: 0 auto 50px;
    padding-right: 0;

    @include mobile {
      justify-content: flex-start;
      flex-wrap: nowrap;
      max-width: none;
      padding-right: calc((100vw - var(--container))/ 2 + 20px);
    }
  }
}

.item {
  flex-shrink: 0;
  width: max-content;
  padding: 10px 30px;
  border: 1px solid #242424;
  border-radius: 30px;
  cursor: pointer;
  user-select: none;
  transition: background-color .3s ease-in-out;

  @include mobile {
    padding: 8px 15px;
  }

  &.active, &:focus-visible, &:hover {
    background-color: var(--green);
  }
}
</style>
