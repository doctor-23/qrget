<template>
  <section class="fast-search">
    <div class="container">
      <h2 class="title second-title">
        {{ fastSearchContent.title_first }}

        <StickerTextAtom class-name="sticker-title">
          <template #default>
              <span>
                {{ fastSearchContent.sticker_text }}
              </span>
          </template>
        </StickerTextAtom>

        {{ fastSearchContent.title_second }}
      </h2>

      <div class="sticker">
        <img :src="fastSearchContent.sticker" alt="Стикер">
      </div>

      <div class="description">
        <p>
          {{ fastSearchContent.description }}
        </p>
      </div>

      <h3 class="list-title">
        {{ fastSearchContent.list_heading }}
      </h3>

      <FastSearchListMolecule
          :list="fastSearchContent.list"
          :last-item-list="fastSearchContent.last_item_list"
      />
    </div>
  </section>
</template>

<script>
import StickerTextAtom from "@/atoms/StickerTextAtom";
import FastSearchListMolecule from "@/molecules/FastSearchListMolecule";
import fastSearchContent from "@/constants/fastSearchContent";

export default {
  data() {
    return {
      fastSearchContent
    }
  },
  components: { StickerTextAtom, FastSearchListMolecule }
}
</script>

<style scoped lang="scss">
.fast-search {
  padding: 160px 0 140px;

  @include laptop {
    overflow-x: hidden;
  }

  @include tablet {
    padding:80px 0 120px;
  }
}

.sticker {
  position: absolute;
  top: 100px;
  right: 0;
  pointer-events: none;
  user-select: none;

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }

  @include tablet {
    top: 20px;
    right: 80px;
    width: calc(100vw / 5.54);
    height: calc(100vw / 5.54);
  }

  @include mobile {
    width: 114px;
    height: 114px;
    display: none;
  }
}

.title {
  display: inline-flex;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @include mobile {
    margin-bottom: 20px;
  }

  .sticker-title {
    height: 89px;
    transform: rotate(3deg);

    @include mobile {
      height: 55px;
    }

    span {
      padding-top: 16px;
      height: 83px;
      background-color: var(--blue);

      @include mobile {
        height: 49px;
        padding-top: 6px;
      }
    }
  }
}

.description {
  max-width: 755px;
  margin-bottom: 60px;
  font-size: 22px;

  @include mobile {
    margin-bottom: 40px;
    font-size: 16px;
  }
}

.list-title {
  margin-bottom: 50px;
  font-size: 50px;
  font-weight: bold;
  line-height: 1.1;
  color: var(--violet);

  @include tablet {
    text-align: center;
  }

  @include mobile {
    margin-bottom: 30px;
    font-size: 26px;
  }
}


</style>
