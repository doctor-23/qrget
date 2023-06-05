<template>
  <div class="ready">
    <CodeChoiceMolecule
      class-name="heading"
      :options="codes"
      :current-code="currentCode"
    />

    <div class="list">
      <div class="item">
        <h4 class="item-title">
          Классические варианты
        </h4>

        <div class="item-image">
          <img src="@/assets/img/design-codes.png" alt="Дизайн">
        </div>

        <div class="item-wrap">
          <div class="item-text">
            Скачать лист для печати
          </div>

          <a href="#" class="item-download" download="">
            <svg width="28" height="28" class="svg-ico " role="img">
              <use xlink:href="@/assets/img/icons/sprite.svg#ic_download"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="item">
        <h4 class="item-title">
          Детские варианты
        </h4>

        <div class="item-image">
          <img src="@/assets/img/design-codes.png" alt="Дизайн">
        </div>

        <div class="item-wrap">
          <div class="item-text">
            Скачать лист для печати
          </div>

          <a href="#" class="item-download" download="">
            <svg width="28" height="28" class="svg-ico " role="img">
              <use xlink:href="@/assets/img/icons/sprite.svg#ic_download"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footnote">
      ВНИМАНИЕ! В листе для печати собран архив со всеми возможными форматами (png, tiff, pdf,
      svg) для качественной самостоятельной печати или печати в типографии.
    </div>
  </div>
</template>

<script>

import CodeChoiceMolecule from "@/molecules/CodeChoiceMolecule";

export default {
  props: ['codes', 'currentCode'],
  components: { CodeChoiceMolecule }
}
</script>

<style scoped lang="scss">
.ready {
  width: 100%;
}

.heading {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 60px 30px;
  margin-bottom: 30px;

  @include mobile {
    gap: 30px 15px;
  }
}

.item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(25% - 22.5px);

  @include laptop {
    width: calc(33.33% - 20px);
  }

  @include tablet {
    width: calc(50% - 15px);
  }

  @include mobile {
    width: calc(50% - 7.5px);
  }
}

.item-title {
  font-size: 22px;
  font-weight: 600;
}

.item-image {
  width: 100%;
  height: 283px;
  margin-top: auto;

  @include mobile {
    height: 226px;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.item-wrap {
  display: flex;
  align-items: center;
  gap: 6px;

  @include mobile {
    gap: 2px;
  }
}

.item-text {
  flex-shrink: 0;
  max-width: calc(100% - 34px);
  font-weight: 600;

  @include mobile {
    max-width: calc(100% - 32px);
  }
}

.item-download {
  flex-shrink: 0;
}

.footnote {
  max-width: 430px;
  width: 100%;
  font-size: 14px;
  color: rgba(36, 36, 36, 0.6);
}
</style>
