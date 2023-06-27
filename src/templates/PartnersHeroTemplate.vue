<template>
  <section class="hero">
    <div class="container">
      <div class="sticker">
        <img :src="content.image" alt="Стикер">
      </div>

      <h1 class="main-title title">
        {{ content.title }}
      </h1>

      <div class="description">
        <p>
          {{ content.description }}
        </p>
      </div>

      <ButtonAtom class-name="hero-btn">
        <template #default>
          {{ content.button }}
        </template>
      </ButtonAtom>
    </div>
  </section>
</template>

<script>
import ButtonAtom from "@/atoms/ButtonAtom";
import partnersHeroContent from "@/constants/partnersHeroContent";

export default {
  data() {
    return {
      content: partnersHeroContent
    }
  },
  components: { ButtonAtom }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 20px 0 130px;

  @include tablet {
    padding: 10px 0 80px;
  }
}

.sticker {
  width: 120px;
  height: 120px;
  margin: 0 auto 8px;
  pointer-events: none;
  user-select: none;

  @include mobile {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.title {
  max-width: 993px;
  margin: 0 auto 30px;
  text-align: center;

  @include mobile {
    margin-bottom: 20px;
  }
}

.description {
  max-width: 585px;
  margin: 0 auto 40px;
  text-align: center;

  @include mobile {
    margin-bottom: 30px;
  }
}

.hero-btn {
  margin: 0 auto;
}
</style>
