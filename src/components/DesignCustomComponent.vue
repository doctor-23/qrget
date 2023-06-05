<template>
  <div class="custom">
    <CodeChoiceMolecule
        class-name="choice-code"
        footnote="Вы можете создать и сохранить неограниченное количество разных дизайнов для вашего QR-кода."
        :options="codes"
        :current-code="currentCode"
    />

    <div class="left">
      <div class="image">
        <img
            :src="currentCode.image"
            alt="QR Code"
            :style="{borderRadius: `${selectedRadius}px`}"
        >
      </div>
    </div>

    <div class="right">
      <form action="#" class="form" id="code_design_form">
        <div class="border form-row">
          <div class="border-text title-text">
            Выберите рамку
          </div>

          <SelectMolecule
              name="qr_border"
              class-name="border-select"
              :options="borders"
              :current-value="border"
              event-bus-event="getCurrentBorder"
          />
        </div>

        <div class="borders form-row">
          <div class="border-item">
            <img src="#" alt="Рамка">
          </div>
          <div class="border-item">
            <img src="#" alt="Рамка">
          </div>
          <div class="border-item">
            <img src="#" alt="Рамка">
          </div>
          <div class="border-item">
            <img src="#" alt="Рамка">
          </div>
          <div class="border-item">
            <img src="#" alt="Рамка">
          </div>
        </div>

        <div class="caption form-row">
          <div class="caption-title title-text">
            Изменить надпись
          </div>

          <textarea
              name="code_caption"
              class="caption-text">
Я потерялся. Если вы нашли меня, отсканируйте и свяжитесь с владельцем.
                                </textarea>
        </div>

        <div class="size form-row">
          <div class="size-title title-text">
            Выберите размер рамки
          </div>

          <SelectMolecule
              name="qr_border_size"
              class-name="size-select"
              :options="sizes"
              :current-value="borderSize"
              event-bus-event="getCurrentSize"
          />

        </div>

        <div class="settings-wrap form-row">
          <div class="settings-title title-text">
            Настройки QR-кода
          </div>

          <div class="settings">
            <div class="settings-color">
              <label class="settings-color__picker color-picker-label">
                <input
                    type="color"
                    name="code_color"
                    id="code_color"
                    class="color-picker-input"
                    v-model="color"
                >

                <span class="color-picker-custom">
                  <span
                      class="color-picker-custom__box"
                      :style="{
                        backgroundColor: color
                      }">

                  </span>

                  <span class="color-picker-custom__text">
                    Выбрать цвет
                  </span>
                </span>
              </label>
            </div>

            <label class="custom-file-label">
              <input
                  type="file"
                  id="code_image"
                  class="custom-file-input"
                  name="code_image"
                  ref="file"
                  @change="onFileChange"
              >

              <span class="custom-file">
                <span
                    class="custom-file__image"
                    :class="{image: file}"
                >
                    <img src="@/assets/img/empty-image.png" alt="Фото" v-if="!file">
                    <img :src="file" alt="Фото" v-if="file">
                </span>

                <span class="custom-file__text">
                    Добавить фото
                </span>
              </span>
            </label>

            <div class="settings-radius">
              <div class="settings-radius__text">
                Скругление
              </div>

              <SelectMolecule
                  name="qr_border_raduis"
                  class-name="settings-radius-select"
                  :options="radius"
                  :current-value="borderRadius"
                  event-bus-event="getCurrentRadius"
              />
            </div>
          </div>
        </div>

        <div class="btn-wrap form-row">
          <button type="submit" class="btn btn">
            Сохранить
          </button>

          <a href="#" class="downloads" download="">
            Скачать QR-код

            <SvgSpriteAtom
                name="ic_download"
                width="28"
                height="28"
            />
          </a>
        </div>
      </form>

      <div class="footnote">
        Вы можете собрать свой стикерпак из QR-кодов в разделе <a href="#">«Печать»</a>.
      </div>

    </div>

    <div id="qr-code" ref="qrCode"> </div>
  </div>
</template>

<script>

import CodeChoiceMolecule from "@/molecules/CodeChoiceMolecule";
import SelectMolecule from "@/molecules/SelectMolecule";
import SvgSpriteAtom from "@/atoms/SvgSpriteAtom";
import QrCodeSettingsContent from "@/constants/QrCodeSettingsContent";
import eventBus from "@/eventBus";
import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Extension
} from 'qr-code-styling';

export default {
  data() {
    // const options = {
    //   width: this.selectedSize,
    //   height: this.selectedSize,
    //   data: 'http://qr-code-styling.com',
    //   image: this.file,
    //   imageOptions: {
    //     hideBackgroundDots: true,
    //     imageSize: 0.6,
    //     margin: 0
    //   },
    //   dotsOptions: {
    //     type: this.selectedBorder,
    //     color: this.color,
    //     gradient: null
    //   },
    //   cornersSquareOptions: {
    //     type: this.selectedBorder,
    //     color: this.color,
    //   },
    //   backgroundOptions: {
    //     color: this.color
    //   }
    // }
    const options = {
      width: 100,
      height: 100,
      data: 'http://qr-code-styling.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.6,
        margin: 0
      },
      dotsOptions: {
        type: 'square',
        color: '#6A4B99',
        gradient: null
      },
      cornersSquareOptions: {
        type: 'square',
        color: '#6A4B99',
      },
      backgroundOptions: {
        color: '#6A4B99'
      }
    }
    return {
      QrCodeSettingsContent,
      borders: QrCodeSettingsContent.borders,
      sizes: QrCodeSettingsContent.border_size,
      radius: QrCodeSettingsContent.radius,
      selectedBorder: 'square',
      selectedSize: 100,
      selectedRadius: 0,
      color: '#6A4B99',
      file: null,
      qrCode: new QRCodeStyling(options)
    }
  },
  props: ['codes', 'currentCode'],
  components: {
    CodeChoiceMolecule,
    SelectMolecule,
    SvgSpriteAtom
  },
  methods: {
    onFileChange(e) {
      this.file = null;
      let file = (e.target.files || e.dataTransfer.files)[0];

      if (file) {
        var reader = new FileReader();
        reader.onload = (e) => { this.file = e.target.result };
        reader.readAsDataURL(file);
      }
    },
  },
  computed: {
    border() {
      return this.borders.find(border => border.value === this.selectedBorder)
    },
    borderSize() {
      return this.sizes.find(size => size.value === this.selectedSize)
    },
    borderRadius() {
      return this.radius.find(item => item.value === this.selectedRadius)
    },
  },
  created() {
    eventBus.$on('getCurrentBorder', value => {
      this.selectedBorder = value;
    });
    eventBus.$on('getCurrentSize', value => {
      this.selectedSize = value;
    });
    eventBus.$on('getCurrentRadius', value => {
      this.selectedRadius = value;
    });
    this.qrCode.append(document.getElementById("qr-code"));
  },
}
</script>

<style scoped lang="scss">
.custom {
  display: flex;
  flex-wrap: wrap;
  gap: 30px 40px;

  @include tablet {
    flex-direction: column;
    gap: 14px;
  }
}

.choice-code {
  align-items: center;
  gap: 40px;
  width: 100%;

  @include tablet {
    flex-direction: column;
    gap: 18px;
    margin-bottom: 10px;
  }

  .footnote {
    max-width: 440px;
    font-size: 16px;
    color: rgba(36, 36, 36, 0.7);

    @include tablet {
      max-width: 100%;
    }
  }
}

.choice-code__wrap {
  display: flex;
  align-items: center;
  gap: 20px;

  .select {
    width: 230px;
  }

  @include laptop {
    flex-direction: column;
    align-items: flex-start;
    max-width: calc((var(--container) - 260px) * .4444);
    width: 100%;

    .select {
      width: 100%;
    }
  }

  @include tablet {
    max-width: 100%;
  }
}

.left {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 400px;
  width: 100%;
  padding-top: 10px;

  @include laptop {
    max-width: calc((var(--container) - 260px) * .4444);
  }

  @include tablet {
    max-width: 100%;
  }

  .choice-code {
    justify-content: space-between;
  }

  .choice-code__select {
    width: 225px;
  }
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  border: 1px solid #242424;
  border-radius: 5px;

  @include tablet {
    height: calc((var(--container) - 300px));
  }

  @include mobile {
    height: calc((var(--container) - 40px) / 1.12);
  }

  img {
    width: max-content;
  }
}

.right {
  max-width: calc(100% - 440px);

  @include laptop {
    max-width: calc(100% - ((var(--container) - 260px) * .44444) - 40px);
  }

  @include tablet {
    max-width: 100%;
  }

  .title-text {
    margin-bottom: 8px;
    font-weight: bold;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.border {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include mobile {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .title-text {
    margin-bottom: 0;
  }
}

.borders {
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 12px;
  border: 1px solid #242424;
  border-radius: 5px;
}

.border-item {
  width: calc(var(--container) / 20.71);
  height: calc(var(--container) / 20.71);
  border: 1px solid #242424;

  @include tablet {
    width: 56px;
    height: 56px;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.caption {

}

.caption-text {
  width: 100%;
  height: 91px;
  padding: 13px 10px;
  font-size: 16px;
  color: rgba(36, 36, 36, 0.7);
  border: 1px solid rgba(36, 36, 36, 0.7);
  border-radius: 5px;
  resize: none;
  scrollbar-width: thin;
  scrollbar-color: var(--green) var(--violet);

  &::-webkit-scrollbar-thumb {
    background: var(--green);
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--violet);
  }
}

.size-select {
  width: 100%;
}

.settings {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 55px;
  padding: 20px;
  border: 1px solid #242424;
  border-radius: 5px;
}

.color-picker-input {
  display: none;
}

.color-picker-custom {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;;
}

.color-picker-custom__box {
  width: 45px;
  height: 45px;
  background-color: var(--violet);
  border: 1px solid #242424;
  border-radius: 2px;
}

.color-picker-custom__text {
  font-size: 16px;
}

.custom-file-input {
  display: none;
}

.custom-file {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.custom-file__image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 2px;

  &.image {
    border: 1px solid #242424;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
    border-radius: 2px;
  }
}

.custom-file__text {
  font-size: 16px;
}

.settings-radius {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @include tablet {
    width: 100%;
  }
}

.settings-radius__text {
  font-size: 16px;
}

.settings-radius-select {
  width: 200px;

  @include tablet {
    width: 100%;
  }
}

.btn-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 30px;

  @include mobile {
    justify-content: center;
  }
}

.btn {
  width: 200px;
  height: 50px;

  @include mobile {
    width: 200px !important;
  }
}

.downloads {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
}

.footnote {
  max-width: 420px;
  font-weight: 600;

  a {
    font-weight: 600;
    color: var(--violet);
  }
}

</style>
