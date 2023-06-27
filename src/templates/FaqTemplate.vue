<template>
  <section class="faq" :class="className">
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

      <AccordionListMolecule :list="content.list" :columns="columns" />
    </div>
  </section>
</template>

<script>
import StickerTextAtom from "@/atoms/StickerTextAtom";
import AccordionListMolecule from "@/molecules/AccordionListMolecule";

const defaultContent = {
  title: "",
  sticker_text: "",
  list: [
    {
      title: "",
      description: "",
      isActive: false
    }
  ]
}

export default {
  data() {
    return {

    }
  },
  props: {
    content: {
      type: Object,
      default: defaultContent
    },
    className: String,
    columns: {
      type: Boolean,
      default: false
    }
  },
  components: {
    StickerTextAtom,
    AccordionListMolecule
  }
}
</script>

<style scoped lang="scss">
.faq {
  padding-bottom: 150px;

  @include tablet {
    padding-bottom: 80px;
  }
}

.faq-partners {
  padding-bottom: 140px;

  .title {
    max-width: 723px;

    @include mobile {
      display: inline-block;
      max-width: 375px;
      text-align: left;
    }
  }
}

.title {
  max-width: 851px;
  margin-bottom: 40px;

  @include mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    margin-bottom: 30px;
    text-align: center;
  }

  .sticker-title {
    display: inline-flex;
    height: 89px;
    transform: matrix(1, 0.05, -0.05, 1, 0, 0);

    @include mobile {
      height: 48px;
    }

    span {
      height: 83px;
      padding-top: 14px;
      background-color: var(--blue);

      @include mobile {
        height: 42px;
        padding-top: 0;
      }
    }
  }
}
</style>
