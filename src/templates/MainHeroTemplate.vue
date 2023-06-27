<template>
  <section class="hero">
    <div class="container">
      <div class="left">
        <h1 class="title main-title">
          {{ mainHeroContent.title }}

          <StickerTextAtom class-name="sticker-title">
            <template #default>
              <span>
                {{ mainHeroContent.sticker_text }}
              </span>
            </template>
          </StickerTextAtom>
        </h1>

        <div class="description">
          <p>
            {{ mainHeroContent.description }}
          </p>
        </div>

        <ButtonAtom class-name="hero-btn">
          <template #default>
            {{ mainHeroContent.button }}
          </template>
        </ButtonAtom>
      </div>

      <div class="right">
        <img :src="mainHeroContent.image" alt="Картинка">
      </div>
    </div>
  </section>
</template>

<script>
import StickerTextAtom from "@/atoms/StickerTextAtom";
import ButtonAtom from "@/atoms/ButtonAtom";
import mainHeroContent from "@/constants/mainHeroContent";

export default {
  data() {
    return {
      mainHeroContent
    }
  },
  components: {StickerTextAtom, ButtonAtom}
}
</script>

<style scoped lang="scss">
.hero {
  padding: 60px 0 0;

  @include laptop {
    overflow-x: hidden;
  }

  @include tablet {
    padding-top: 28px;
  }

  .container {
    display: flex;

    @include tablet {
      flex-direction: column;
      gap: 10px;
      padding-bottom: 70px;
    }
  }
}

.left {
  display: flex;
  flex-direction: column;
  max-width: 580px;

  @include tablet {
    max-width: 100%;
  }
}

.title {
  margin-bottom: 30px;

  @include mobile {
    margin-bottom: 20px;
  }

  .sticker-title {
    transform: rotate(-2deg);

    span {
      background-color: var(--purpure);
    }
  }
}

.description {
  margin-bottom: 40px;

  @include mobile {
    margin-bottom: 10px;
  }
}

.hero-btn {
  @include tablet {
    position: absolute;
    bottom: 0;
  }

  @include mobile {
    max-width: calc(100vw - 40px);
    width: 100%;
  }
}

.right {
  position: absolute;
  top: -40px;
  right: -65px;
  max-width: 655px;
  width: 100%;
  pointer-events: none;

  @include tablet {
    position: static;
  }

  @include mobile {
    width: 100vw;
    margin-left: -20px;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}
</style>
