<template>
  <section class="offer">
    <div class="container">
      <h2 class="title second-title">
        {{ content.title }}
      </h2>

      <div class="description">
        <p>
          {{ content.description }}
        </p>
      </div>

      <ButtonAtom class-name="offer-btn">
        <template #default>
          {{ content.button }}
        </template>
      </ButtonAtom>
    </div>
  </section>
</template>

<script>
import ButtonAtom from "@/atoms/ButtonAtom";
import mainOfferContent from "@/constants/mainOfferContent";

export default {
  data() {
    return {
      content: mainOfferContent
    }
  },
  components: {
    ButtonAtom
  }
}
</script>

<style scoped lang="scss">
.offer {
  padding-bottom: 140px;

  @include tablet {
    padding-bottom: 80px;
  }

  @include mobile {
    padding: 0 20px 80px;
  }

  .container {
    padding: 57px 60px;
    background: var(--violet) url("@/assets/img/stickers.png") right 30px top 40px / 300px 410px no-repeat;
    border-radius: 30px;

    @include tablet {
      padding: 30px 17.5px;
      background-position: bottom 80px center;
      background-size: calc(100vw / 1.875) calc(100vw / 1.37);
    }
  }
}

.title {
  max-width: 815px;
  margin-bottom: 30px;
  color: #fff;

  @include tablet {
    max-width: 100%;
  }

  @include mobile {
    margin-bottom: 20px;
  }
}

.description {
  max-width: 623px;
  margin-bottom: 38px;
  color: #fff;

  @include tablet {
    max-width: 100%;
    margin-bottom: calc(100vw / 1.48);
  }
}

.offer-btn {
  border: 2px solid var(--green);

  @include tablet {
    margin: 0 auto;
  }
}
</style>
