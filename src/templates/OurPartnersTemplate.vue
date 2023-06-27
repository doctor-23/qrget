<template>
  <section class="partners">
    <div class="container">
      <h2 class="title second-title">
        {{ content.title }}

        <StickerTextAtom class-name="sticker-title">
          <template #default>
              <span>
                {{ content.sticker_text }}
              </span>
          </template>
        </StickerTextAtom>
      </h2>

      <div class="description">
        <p>
          {{ content.description }}
        </p>
      </div>

      <OurPartnersListMolecule :list="content.list" :button="content.button"/>

<!--      <div class="list">-->
<!--        <div-->
<!--            v-for="(item, index) in content.list"-->
<!--            :key="index"-->
<!--            class="list-item"-->
<!--            :style="`background-image: url(${item.image})`"-->
<!--        >-->
<!--          <h3 class="item-heading">-->
<!--            {{ item.title }}-->
<!--          </h3>-->
<!--        </div>-->
<!--        <div class="list-item">-->
<!--          <ButtonAtom class-name="partners-btn">-->
<!--            <template #default>-->
<!--              Стать партнёром-->
<!--            </template>-->
<!--          </ButtonAtom>-->
<!--        </div>-->

<!--      </div>-->
    </div>
  </section>
</template>

<script>
import OurPartnersListMolecule from "@/molecules/OurPartnersListMolecule";
import StickerTextAtom from "@/atoms/StickerTextAtom";
import ButtonAtom from "@/atoms/ButtonAtom";
import ourPartnersContent from "@/constants/ourPartnersContent";

export default {
  data() {
    return {
      content: ourPartnersContent
    }
  },
  components: {
    OurPartnersListMolecule,
    StickerTextAtom,
    ButtonAtom
  }
}
</script>

<style scoped lang="scss">
.partners {
  padding-bottom: 134px;

  @include tablet {
    padding-bottom: 80px;
  }
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  max-width: 779px;
  margin: 0 auto 30px;
  text-align: center;

  @include mobile {
    margin-bottom: 20px;
  }

  .sticker-title {
    height: 89px;
    transform: rotate(-2deg);

    @include mobile {
      height: 55px;
    }

    span {
      height: 83px;
      padding-top: 16px;
      background-color: var(--purpure);

      @include mobile {
        height: 49px;
        padding-top: 7px;
        background-color: var(--blue);
      }
    }
  }
}

.description {
  max-width: 480px;
  margin: 0 auto 40px;
  text-align: center;

  @include mobile {
    text-align: left;
  }
}
</style>
