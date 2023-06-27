<template>
  <div
      class="slide"
      :class="{'slide-active': activeSlide}"
      :style="{ maxWidth: slideWidth }"
      ref="slide"
  >
    <div class="slide-row">
      <div class="slide-row__heading">
        Цель:
      </div>

      <div class="slide-row__text">
        {{ slide.intent }}
      </div>
    </div>
    <div class="slide-row">
      <div class="slide-row__heading">
        Решение:
      </div>

      <div class="slide-row__text">
        {{ slide.solution }}
      </div>

      <a class="slide-more tablet" @click.prevent="toggleIsShow" v-if="!isShow">
        {{ message }}
      </a>
    </div>
    <div class="slide-row" v-if="isShow">
      <div class="slide-row__heading">
        Результат:
      </div>

      <div class="slide-row__text">
        {{ slide.result }}
      </div>
    </div>
    <div class="slide-row" v-if="isShow">
      <div class="slide-row__heading">
        Мнение клиента:
      </div>

      <div class="slide-row__text">
        {{ slide.review }}
      </div>
    </div>
    <div class="slide-row" v-if="isShow">
      <div class="slide-row__heading">
      </div>

      <div class="slide-row__text slide-row__text--name">
        {{ slide.name }}
      </div>
    </div>
    <a class="slide-more tablet" @click.prevent="toggleIsShow" v-if="isShow">
      {{ message }}
    </a>
  </div>
</template>

<script>
const WINDOW_WIDTH_LIMIT = 1030; // Константа для определения ширины экрана, на котором нужно показывать дополнительную информацию об отзыве.

export default {
  data() {
    return {
      showDetails: this.windowWidth > WINDOW_WIDTH_LIMIT
    }
  },
  props: {
    slide: {
      type: Object,
      required: true
    },
    slideWidth: {
      type: String,
      default: '100%'
    },
    windowWidth: {
      type: Number,
      default: WINDOW_WIDTH_LIMIT + 1
    },
    activeSlide: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    isShow() {
      return this.showDetails;
    },
    message() {
      return this.isShow ? 'Скрыть весь отзыв': 'Читать весь отзыв';
    }
  },
  methods: {
    toggleIsShow() {
      this.showDetails = !this.showDetails;

      // используем метод $nextTick, чтобы после перерисовки компонента получить его новую высоту и затем передать в родительский компонент
      this.$nextTick(() => {
        const height = this.$refs.slide.offsetHeight;
        this.$emit('slide-height-changed', height);
      });
    },

    // объявляем метод получения высоты слайда, который будет вызываться в родительском компонентна
    getHeight() {
      return this.$refs.slide.offsetHeight;
    },
  }
}
</script>

<style scoped lang="scss">
.slide {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: max-content;
  padding: 30px;
  border: 4px dashed var(--violet);
  border-radius: 30px;
  transition: opacity 0.3s ease-in-out;
}

.slide-active {

}

.slide-row {
  display: flex;
  gap: 10px;

  @include tablet {
    flex-wrap: wrap;
    //display: none;
    //
    //&:nth-child(1), &:nth-child(2) {
    //  display: flex;
    //}
  }

  @include mobile {
    flex-direction: column;
    gap: 20px;
  }

  &.slide-row__text--name {
    .slide-row__text {
      font-size: 14px;
    }
  }
}

.slide-row__heading {
  min-width: 90px;
  max-width: 90px;
  font-weight: 600;
  color: var(--violet);

  @include mobile {
    max-width: 100%;
    width: 100%;
  }
}

.slide-row__text {
  width: calc(100% - 100px);

  @include mobile {
    width: 100%;
  }
}

.slide-more {
  width: 100%;
  text-align: center;
  color: var(--blue);
  text-decoration: underline;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;;
}
</style>
