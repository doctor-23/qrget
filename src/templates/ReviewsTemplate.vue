<template>
  <section
      class="reviews"
      :class="{
        'reviews_on-main': location === 'main',
        'reviews_on-page': location === 'page'

      }"
  >
    <div class="container">
      <h2 class="second-title title" v-if="location === 'main'">
        <StickerTextAtom class-name="sticker-title">
          <template #default>
              <span>
                {{ content.sticker_text }}
              </span>
          </template>
        </StickerTextAtom>

        <span v-html="formattedText"></span>
      </h2>

      <div class="description">
        <p>
          {{ content.description }}
        </p>
      </div>

      <ReviewsTabComponent
          :content="reviewsCategory"
          :location="location"
          :active-tab="activeCategory"
          class-name="tabs"
          @updateActiveTab="onUpdateActiveCategory"
      />

      <ReviewsSliderComponent
          v-if="location === 'main'"
          :slides="reviews"
      />

      <ButtonAtom
          v-if="location === 'main' && reviews.length > 0"
          class-name="btn-more"
          link="#/reviews/"
      >
        <template #default>
          {{ content.button }}
        </template>
      </ButtonAtom>
    </div>
  </section>
</template>

<script>
import StickerTextAtom from "@/atoms/StickerTextAtom";
import ButtonAtom from "@/atoms/ButtonAtom";
import ReviewsTabComponent from "@/components/ReviewsTabComponent";
import ReviewsSliderComponent from "@/components/ReviewsSliderComponent";
import reviewsCategory from "@/constants/reviewsCategory";
import reviewsContent from "@/constants/reviewsContent";

export default {
  data() {
    return {
      reviewsCategory,
      reviewsContent,
      title: this.content.title,
      activeCategory: 1
    }
  },
  props: ['location', 'content'],
  components: {
    StickerTextAtom,
    ButtonAtom,
    ReviewsTabComponent,
    ReviewsSliderComponent
  },
  methods: {
    onUpdateActiveCategory(index) {
      this.activeCategory = index;
    }
  },
  computed: {
    reviews() {
      return this.reviewsContent.filter((item) => item.category === this.activeCategory)
    },
    formattedText() {
      return this.title.replace(/\n/g, '<br>');
    }
  }
}
</script>

<style scoped lang="scss">
.reviews_on-main {
  padding-bottom: 140px;

  @include tablet {
    padding-bottom: 80px;
  }
}

.reviews_on-page {
  padding: 60px 0 140px;

  @include tablet {
    padding: 30px 0 80px;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 17px;
    max-width: 993px;
    margin-bottom: 30px;
    text-indent: 0;

    .sticker-title {
      position: static;
      height: 89px;
      margin: 0 auto;
      transform: none;

      @include mobile {
        height: 48px;
      }

      span {
        height: 83px;
        padding-top: 16px;

        @include mobile {
          height: 42px;
          padding-top: 0;
        }
      }
    }
  }

  .description {
    max-width: 840px;
    margin-bottom: 60px;
  }

  .item-row {
    flex-wrap: wrap;
    display: none;

    &:nth-child(1), &:nth-child(2) {
      display: flex;
    }
  }

  .item-more {
    display: block;
  }
}

.title {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 853px;
  text-indent: 313px;
  margin: 0 auto 30px;
  text-align: center;

  @include tablet {
    text-indent: 0;
  }

  @include mobile {
    flex-direction: column;
    margin-bottom: 20px;
  }

  &>span {
    display: inherit;
    font-weight: bold;
    line-height: 1.1;

  }

  .sticker-title {
    position: absolute;
    top: 0;
    left: 137px;
    width: max-content;
    height: 94px;
    text-indent: 0;
    transform: matrix(1, -0.05, 0.05, 1, 0, 0);

    @include tablet {
      position: static;
      margin: 0 auto;
    }

    @include mobile {
      height: 53px;
    }

    span {
      width: max-content;
      height: 88px;
      padding-top: 24px;
      background-color: var(--purpure);

      @include mobile {
        height: 47px;
        padding-top: 6px;
      }
    }
  }
}

.description {
  max-width: 745px;
  margin: 0 auto 40px;
  text-align: center;

  @include mobile {
    margin-bottom: 70px;
  }
}

.list {
  display: block;
  gap: 50px 40px;
  column-width: calc(var(--container) / 2 - 20px);
  column-count:  2;
  column-fill: balance;
  margin-bottom: -50px;

  @include laptop {
    column-width: calc((var(--container) - 40px) / 2 - 60px);
  }

  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 0;
  }

  .item {
    page-break-inside: avoid;
    break-inside: avoid-column;
    margin-bottom: 50px;

    @include mobile {
      margin-bottom: 0;
    }
  }
}

.btn-more {
  margin: 0 auto;
}

</style>
