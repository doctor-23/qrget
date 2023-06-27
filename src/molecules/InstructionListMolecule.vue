<template>
  <div class="list" v-if="isMobile">
    <div
        v-for="item in newList"
        :key="item.title"
        class="item"
        :class="`step-${item.value}`"
    >
      <div class="item__content">
        <h3 class="item__title">
          {{ item.title }}
        </h3>

        <div class="item__description">

          <p
              v-for="description in item.description"
              :key="description.text"
          >
            {{ description.text }}
          </p>

        </div>
      </div>

      <div class="item__image">
        <img :src="item.image" :alt="item.title">
      </div>
    </div>

    <div class="item item-last">
      <div class="item__description">
        <p
            v-for="description in lastItemList[0].description"
            :key="description.text"
        >
          {{ description.text }}
        </p>
      </div>

      <button class="btn">
        {{ button }}
      </button>
    </div>
  </div>

  <div class="list" v-else>
    <div class="column">
      <div
          v-for="item in evenList"
          :key="item.title"
          class="item"
          :class="`step-${item.value}`"
      >
        <div class="item__content">
          <h3 class="item__title">
            {{ item.title }}
          </h3>

          <div class="item__description">

            <p
                v-for="description in item.description"
                :key="description.text"
            >
              {{ description.text }}
            </p>

          </div>
        </div>

        <div class="item__image">
          <img :src="item.image" :alt="item.title">
        </div>
      </div>

      <div class="item item-last" v-if="evenList.length % 2 !== 0">
        <div class="item__description">
          <p
              v-for="description in lastItemList[0].description"
              :key="description.text"
          >
            {{ description.text }}
          </p>
        </div>

        <button class="btn">
          {{ button }}
        </button>
      </div>
    </div>

    <div class="column">
      <div
          v-for="item in oddList"
          :key="item.title"
          class="item"
          :class="`step-${item.value}`"
      >
        <div class="item__content">
          <h3 class="item__title">
            {{ item.title }}
          </h3>

          <div class="item__description">

            <p
                v-for="description in item.description"
                :key="description.text"
            >
              {{ description.text }}
            </p>

          </div>
        </div>

        <div class="item__image">
          <img :src="item.image" :alt="item.title">
        </div>
      </div>

      <div class="item item-last" v-if="oddList.length % 2 === 0">
        <div class="item__description">
          <p
              v-for="description in lastItemList[0].description"
              :key="description.text"
          >
            {{ description.text }}
          </p>
        </div>

        <button class="btn">
          {{ button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isMobile: false,
      evenList: [],
      oddList: []
    }
  },
  props: ['list', 'button'],
  computed: {
    newList() {
      return this.list.slice(0, -1);
    },
    lastItemList() {
      return this.list.slice(-1);
    }
  },
  mounted() {
    this.newList.forEach((item, index) => {
      if (index % 2 === 0) {
        this.evenList.push(item)
      } else {
        this.oddList.push(item)
      }
    });
  },
  created() {
    this.checkWindowSize();
    window.addEventListener("resize", this.checkWindowSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkWindowSize);
  },
  methods: {
    checkWindowSize() {
      this.isMobile = window.innerWidth <= 808; // Ширина экрана для mobile в этом проекте - 808 пикселей
    },
  },
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  //gap: 50px 48px;
  gap: 40px;

  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 0;
    //margin-top: -4px;
    margin-bottom: 0;
  }
}

.column {
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: calc(50% - 24px);
}

.item {
  position: relative;
  //width: calc(50% - 24px);
  width: 100%;
  height: max-content;
  padding: 30px 20px;
  outline: 4px dashed var(--purpure);
  border-radius: 30px;
  //margin-bottom: 50px;

  @include mobile {
    width: 100%;
    margin-top: -4px;
    margin-bottom: 0;
    outline: 0;
    border: 4px dashed var(--purpure);
  }

  &:not(:last-child) {
    display: flex;

    @include mobile {
      flex-direction: column;
      align-items: center;
    }
  }

  &.item-last {
    background-color: var(--violet);

    @include mobile {
      margin-top: -1px;
      outline: 4px dashed var(--purpure);
      border: 0;
    }

    .item__description {
      gap: 20px;
      margin-bottom: 20px;

      p {
        color: #fff;
        font-weight: 600;
      }
    }
  }
}

.step-1 {
  min-height: 230px;

  @include mobile {
    padding-bottom: 24px;
  }

  .item__content {
    max-width: calc(100% - 220px);
  }

  .item__image {
    top: 19px;
    right: 30px;
    width: 190px;
  }
}

.step-2 {
  min-height: 174px;

  @include mobile {
    padding-bottom: 25px;
  }

  .item__content {
    max-width: calc(100% - 246px);
  }

  .item__image {
    top: 30px;
    right: 26px;
    width: 222px;
  }
}

.step-3 {
  min-height: 180px;

  @include mobile {
    padding-bottom: 20px;
  }

  .item__content {
    max-width: calc(100% - 210px);
  }

  .item__image {
    top: 0;
    right: 30px;
    width: 180px;
  }
}

.step-4 {
  min-height: 292px;

  @include mobile {
    padding-bottom: 34px;
  }

  .item__content {
    max-width: calc(100% - 227px);
  }

  .item__image {
    top: 37px;
    right: 27px;
    width: 200px;
  }
}

.step-5 {
  min-height: 261px;

  @include mobile {
    padding-bottom: 35px;
  }

  .item__content {
    max-width: calc(100% - 257px);
  }

  .item__image {
    top: 25px;
    right: 47px;
    width: 130px;
  }
}

.step-6 {
  min-height: 231px;

  @include mobile {
    padding-bottom: 33px;
  }

  .item__content {
    max-width: calc(100% - 222px);
  }

  .item__image {
    top: 25px;
    right: 32px;
    width: 190px;
  }
}

.step-7 {
  min-height: 285px;

  @include mobile {
    padding-bottom: 34px;
  }

  .item__content {
    max-width: calc(100% - 240px);
  }

  .item__image {
    top: 32px;
    right: 20px;
    width: 220px;
  }
}

.step-8 {
  min-height: 336px;

  @include mobile {
    padding-bottom: 34px;
  }

  .item__content {
    max-width: calc(100% - 211px);
  }

  .item__image {
    top: 33px;
    right: 29px;
    width: 182px;
  }
}

.step-9 {
  min-height: 165px;

  @include mobile {
    padding-bottom: 34px;
  }

  .item__content {
    max-width: calc(100% - 221px);
  }

  .item__image {
    top: 15px;
    right: 21px;
    width: 200px;
  }
}

.step-10 {
  min-height: 225px;

  @include mobile {
    padding-bottom: 34px;
  }

  .item__content {
    max-width: calc(100% - 225px);
  }

  .item__image {
    top: 12px;
    right: 15px;
    width: 240px;
  }
}

.item__content {
  @include mobile {
    max-width: 100%;
    min-height: auto;
  }
}

.item__content {
  @include mobile {
    max-width: 100% !important;
  }
}

.item__title {
  margin-bottom: 15px;
  font-size: 26px;
  font-weight: 600;

  @include mobile {
    font-size: 22px;
    text-align: center;
  }
}

.item__description {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include mobile {
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;

    @include mobile {
      text-align: center;
    }
  }
}

.item__image {
  position: absolute;
  right: 0;
  user-select: none;
  pointer-events: none;

  @include mobile {
    position: static;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.btn {
  border: 2px solid var(--green);
}
</style>
