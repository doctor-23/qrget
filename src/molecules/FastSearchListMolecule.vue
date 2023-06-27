<template>
  <div class="list">
    <div
        v-for="item in list"
        :key="item.title"
        class="item"

    >
      <div class="heading">
        {{ item.title }}
      </div>

      <div class="description">
        {{ item.description }}
      </div>
    </div>

    <div class="item">
      {{ lastItemList.description }}

      <div class="image">
        <img :src="lastItemList.image" alt="Ключи">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['list', 'lastItemList']
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @include mobile {
    gap: 20px;
  }
}

.item {
  position: relative;
  width: calc(33.33% - 26.66px);
  border-radius: 30px;

  @include tablet {
    width: calc(50% - 20px);
  }

  @include mobile {
    width: 100%;
    min-height: 260px;
  }

  &:nth-child(odd) {
    .heading {
      background-color: var(--blue);
    }

    .description {
      background-color: var(--light-blue);
    }
  }

  &:nth-child(even) {
    .heading {
      background-color: var(--purpure);
    }

    .description {
      background-color: var(--light-putpure);
    }
  }

  &:last-child {
    padding: 40px 31.5px;
    color: #fff;
    background-color: var(--purpure);

    @include mobile {
      padding: 25px 12.5px;
    }
  }
}

.heading {
  min-height: 96px;
  padding: 19px 25px;
  text-align: center;
  font-size: 26px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  border-radius: 30px 30px 0 0;

  @include laptop {
    font-size: 24px;
  }

  @include mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 78px;
    padding: 15px 37px;
    font-size: 22px;
  }
}

.description {
  height: calc(100% - 96px);
  padding: 20px 25px;
  text-align: center;
  border-radius: 0 0 30px 30px;

  @include mobile {
    height: calc(100% - 78px);
    padding: 20px 12.5px 30px;
  }
}

.image {
  position: absolute;
  right: -42px;
  bottom: -39px;
  width: 150px;
  height: 150px;
  pointer-events: none;
  user-select: none;

  @include mobile {
    right: -30px;
    bottom: -42px;
  }
}
</style>
