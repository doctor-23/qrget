<template>
  <div class="my-codes">
      <div
          class="my-code"
          v-for="item in codes"
          :key="item.value"
      >
        <div class="image">
          <img :src="item.image" alt="QR код">
        </div>

        <div class="head-wrap">
          <h2 class="title">
                <span class="title-text">
                    {{ item.title }}
                </span>

            <span class="ico-pencil">
              <SvgSpriteAtom
                  name="edit-pencil"
                  width="26"
                  height="26"
              />
            </span>
          </h2>
        </div>

        <div class="btn-wrap">
          <a href="#" class="btn download-code" download="">
            Скачать QR-код
          </a>

          <a href="#" class="choice-other-design">
            Выбрать другой дизайн
          </a>
        </div>
      </div>

      <!--                    <div class="my-code">-->
      <!--                        <div class="image">-->
      <!--                            <img src="@/assets/img/sticker-lk-1.png" alt="QR код">-->
      <!--                        </div>-->

      <!--                        <div class="head-wrap">-->
      <!--                            <h2 class="title">-->
      <!--                                <span class="title-text">-->
      <!--                                    Добавить новый QR-код-->
      <!--                                </span>-->
      <!--                            </h2>-->
      <!--                        </div>-->

      <!--                        <div class="btn-wrap">-->
      <!--                            <a href="#" class="btn btn">-->
      <!--                                Добавить QR-код-->
      <!--                            </a>-->
      <!--                        </div>-->
      <!--                    </div>-->
  </div>
</template>

<script>
import SvgSpriteAtom from "@/atoms/SvgSpriteAtom";

export default {
  props: ["codes"],
  components: {SvgSpriteAtom}
}
</script>

<style scoped lang="scss">
.my-codes {
  display: flex;
  flex-wrap: wrap;
  gap: 60px 30px;

  @include mobile {
    gap: 30px 15px;
  }
}

.my-code {
  display: flex;
  flex-direction: column;
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

  &:last-child {
    .image {
      .svg-ico {
        color: var(--green);
      }
    }

    .btn-wrap {
      margin-top: 0;
    }
  }
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc((var(--container) - 260px) / 4 - 22.5px);
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #242424;
  border-radius: 5px;

  @include laptop {
    height: calc((var(--container) - 300px) / 3 - 20px);
  }

  @include tablet {
    height: calc((var(--container) - 300px) / 2 - 15px);
  }

  @include mobile {
    height: calc((var(--container) - 40px) / 2 - 7.5px);
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.head-wrap {
  min-height: calc(22px * 1.4 * 2);
  margin-bottom: 24px;

  @include mobile {
    margin-bottom: 16px;
    min-height: calc(18px * 1.4 * 2);
  }

  .ico-pencil {
    transform: translateY(2px);
  }
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 5px;
}

.title-text {
  width: 100%;
  font-size: 22px;
  color: #242424;
  font-weight: 600;

  @include mobile {
    font-size: 18px;
  }

  &[contentEditable] {
    padding: 5px 6px 6px;
    color: rgba(36, 36, 36, 0.6);
    border: 1px solid #6A4B99;
    border-radius: 5px;
  }
}

.btn-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: auto;

  @include mobile {
    gap: 12px;
  }

  .btn {
    width: 100%;
    height: 50px;

    @include mobile {
      height: 40px;
      font-size: 14px;
    }
  }

  .choice-other-design {
    font-size: 16px;
    font-weight: 600;

    @include mobile {
      font-size: 14px;
    }
  }
}
</style>
