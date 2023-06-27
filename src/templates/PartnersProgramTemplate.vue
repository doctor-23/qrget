<template>
  <section class="program">
    <div class="container">
      <div class="top">
        <div class="top-left">
          <h2 class="title second-title">
            {{ content.title }}
          </h2>

          <div class="description">
            <p>
              {{ content.description }}
            </p>
          </div>
        </div>

        <div class="top-right">
          <img :src="content.image" alt="Стикер">
        </div>
      </div>

      <div class="bottom">
        <div class="bottom-left">
          <h3 class="subtitle">
            {{ content.subtitle }}
          </h3>

          <div class="subdescription">
            <p>
              {{ content.subdescription }}
            </p>
          </div>
        </div>

        <div class="bottom-right">
          <div class="list">
            <div
                v-for="item in content.list"
                :key="item.icon"
                class="list-item"
            >
              <SvgSpriteAtom
                  :name="item.icon"
                  :size-y="item.sizeY"
                  :size-x="item.sizeX"
              />

              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgSpriteAtom from "@/atoms/SvgSpriteAtom";
import partnersProgramContent from "@/constants/partnersProgramContent";
export default {

  data() {
    return {
      content: partnersProgramContent
    }
  },
  components: {
    SvgSpriteAtom
  }
}
</script>

<style scoped lang="scss">
.program {
  padding-bottom: 133px;

  @include tablet {
    padding-bottom: 80px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

.top {
  display: flex;
  gap: 20px;

  @include mobile {
    gap: 0;
  }
}

.top-left {
  width: calc(100% - 39.66% - 20px);

  @include tablet {
    width: 100%;
  }
}

.title {
  margin-bottom: 30px;

  @include mobile {
    margin-bottom: 20px;
  }
}

.description {

}

.top-right {
  width: 39.66%;

  @include tablet {
    display: none;
  }

  @include mobile {
    max-width: 335px;
    width: 100%;
    margin: -14px auto 0;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.bottom {
  display: flex;
  gap: 40px;

  @include tablet {
    flex-direction: column;
    gap: 30px;
  }
}

.bottom-left {
  width: 56.9%;

  @include tablet {
    width: 100%;
  }
}

.subtitle {
  margin-bottom: 30px;
  color: var(--violet);
  font-size: 50px;
  font-weight: 700;
  line-height: 1.1;

  @include tablet {
    margin-bottom: 20px;
    text-align: center;
  }

  @include mobile {
    font-size: 28px;
  }
}

.subdescription {
  max-width: 500px;
  font-size: 22px;

  @include tablet {
    max-width: 100%;
    text-align: center;
  }

  @include mobile {
    font-size: 16px;
  }
}

.bottom-right {
  width: calc(100% - 56.9% - 40px);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include tablet {
    width: 75%;
    margin: 0 auto;
  }

  @include mobile {
    max-width: 275px;
    width: 100%;
  }
}

.list-item {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 22px;
  font-weight: 600;
  line-height: 145%;
  color: #242424;

  @include tablet {
    gap: 14px;
  }

  @include mobile {
    font-size: 16px;
  }

  .svg-ico {
    flex-shrink: 0;

    @include tablet {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
