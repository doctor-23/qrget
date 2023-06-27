<template>
  <div class="slider-wrap" v-if="slides.length > 0">
    <div
        class="slider"
        :style="{ maxWidth: changedSlideWidth, maxHeight: `${sliderHeight}px` }"
    >
      <div
          class="slider-wrapper"
          :style="{
            transform: translateSlider
          }"
      >
        <SliderAtom
            v-for="(slide, index) in slides"
            :key="index"
            :slide="slide"
            :slide-width="changedSlideWidth"
            :window-width="windowWidth"
            :active-slide="index === currentSlide"
            ref="slides"
            @slide-height-changed="onSlidesHeightChanged"
        />
      </div>
    </div>

    <div class="arrow-container">
      <div
          class="slider-arrow arrow-left"
          :class="{disabled: currentSlide === 0}"
          @click="prevSlide"
      >
        <SvgSpriteAtom
            width="24"
            height="24"
            name="slider-arrow-left"
        />
      </div>

      <div
          class="slider-arrow arrow-right"
          :class="{disabled: currentSlide === slides.length - 1}"
          @click="nextSlide"
      >
        <SvgSpriteAtom
            width="24"
            height="24"
            name="slider-arrow-right"
        />
      </div>

      <ul class="slider-dots">
        <li
            v-for="(slide, index) in slides"
            :key="slide.intent"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
        />
      </ul>

    </div>
  </div>

  <div class="slides-empty" v-else>
    Здесь пусто
  </div>
</template>

<script>
import SvgSpriteAtom from "@/atoms/SvgSpriteAtom";
import SliderAtom from "@/atoms/SliderAtom";

export default {
  data() {
    return {
      currentSlide: 0,
      windowWidth: window.innerWidth,
      sliderHeight: null
    }
  },
  props: {
    slides: {
      type: Array,
      default: [],
      required: true,
    },
    slideWidth: {
      type: Number,
      default: 740
    }
  },
  components: {
    SvgSpriteAtom,
    SliderAtom
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    nextSlide() {
      if (this.currentSlide + 1 <= this.slides.length - 1) {
        this.currentSlide++
      }
    },
    goToSlide(index) {
      // переход к слайду при помощи булитов
      this.currentSlide = index;
    },
    getWindowWidth() {
      // Присваиваем переменной значение ширины экрана
      this.windowWidth = window.innerWidth
    },
    onSlidesHeightChanged(height) {
      this.sliderHeight = height;
    }
  },
  computed: {
    changedSlideWidth() {
      // ширина слайдера в зависимости от ширины экрана
      return this.windowWidth < 808 ? '100%' : `${this.slideWidth}px`
    },
    translateSlider() {
      // в зависимости от ширины экрана делаем translate слайдера в % или px
      if (this.windowWidth < 808) {
        return `translate3d(-${(100 * this.currentSlide)}%, 0, 0)`
      } else {
        return `translate3d(-${(this.slideWidth * this.currentSlide)}px, 0, 0)`
      }
    }
  },
  mounted() {
    // при изменении размера экрана вычисляем текущую ширину экрана
    window.addEventListener('resize', this.getWindowWidth);
    this.getWindowWidth();
  },
  beforeDestroy() {
    // после монтирования компонента удаляем слушатель resize
    window.removeEventListener('resize', this.getWindowWidth)
  },
  watch: {
    // вешаем наблюдатель за переменной текущего слайда, чтобы динамически менять высоту слейдера при переключении слайдов
    currentSlide() {
      // используем метод $nextTick для того, чтобы убедиться, что приложение успело отрендерить компоненты
      this.$nextTick(() => {
        // находит активный слайд
        const activeChild = this.$refs.slides.find(slide => slide.activeSlide);
        // получаем высоту элемента вызывая у активного слайда метод getHeight
        this.sliderHeight = activeChild.getHeight();
      });
    }
  }
}
</script>

<style scoped lang="scss">
.slider-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 106px;

  @include mobile {
    margin-bottom: 86px;
  }
}

.slider {
  display: flex;
  width: 100%;
  overflow: hidden;
  transition: max-height .3s ease-in-out;
}

.slider-wrapper {
  display: flex;
  width: max-content;
  transition: transform .3s ease-in-out;

  @include fullMobile {
    width: 100%;
  }
}

.slider-arrow {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: #fff;
  background-color: var(--green);
  border-radius: 50%;
  transform: translateY(-50%);
  cursor: pointer;;
  transition: background-color .3s ease-in-out;

  @include tablet {
    display: none;
  }

  &:hover, &:focus-visible {
    background-color: var(--violet);
  }

  &.arrow-left {
    left: 0;
  }

  &.arrow-right {
    right: 0;
  }

  &.disabled {
    background-color: rgba(0,0,0,.5);
  }
}

.slider-dots {
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: auto;
  transform: translateY(100%);

  @include mobile {
    bottom: -30px;
  }

  li {
    width: 16px;
    height: 16px;
    background-color: var(--violet);
    transition: background-color .3s ease-in-out;

    &.active, &:hover, &:focus-visible {
      background-color: var(--green);
    }
  }
}

.btn-more {
  margin: 0 auto;
}
</style>

