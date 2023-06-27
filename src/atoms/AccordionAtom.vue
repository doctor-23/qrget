<template>
  <div
      class="item"
      :class="{
        'item-columns': columns,
        'open': active
      }"
      @click="toggleActive"
  >

    <div class="heading">
      {{ item.title }}

      <div class="ico-wrap">
        <SvgSpriteAtom
            name="plus"
            width="24"
            height="24"
            class-name="faq-ico"
        />
      </div>
    </div>

      <div
          class="submenu"
          :class="{'submenu--open': active, 'submenu--close': !active}"
          ref="submenu"
      >
        {{ item.description }}
      </div>
  </div>
</template>

<script>
import SvgSpriteAtom from "@/atoms/SvgSpriteAtom";

export default {
  data() {
    return {
      active: this.item.isActive // состояние элемента аккордеона
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({ title: 'Заголовок', description: 'Описание', isActive: false }),
      required: true,
      validator: (value) => {
        return typeof value.title === 'string' && typeof value.description === 'string';
      }
    },
    index: {
      type: Number,
      required: true
    },
    columns: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SvgSpriteAtom
  },
  methods: {
    toggleActive() {
      // меняем значение элемента, по которому был вызван клик
      this.active = !this.active;
      // передаем индекс объекта в родительский компонент, чтобы закрыть другие элементы аккордеона
      this.$emit('changeList', this.index, this.active);

      // Используем $nextTick() для получения ссылки на элемент после его рендеринга
      this.$nextTick(() => {
        const submenu = this.$refs.submenu;
        if (submenu) {
          submenu.style.maxHeight = submenu.scrollHeight + "px";
        }
      });
    }
  },

  watch: {
    // следим за состоянием item.isActive и active, и проверяем совпадают они или нет
    'item.isActive': function (val) {
      this.active = val;
    }
  },
}
</script>

<style scoped lang="scss">
.item {
  width: 100%;
  padding: 35px 30px;
  background-color: var(--purpure);
  border-radius: 30px;

  @include mobile {
    padding: 20px 15px;
  }

  &.item-columns {
    width: calc(50% - 20px);

    @include mobile {
      width: 100%;
    }

    .heading {
      align-items: flex-start;
    }
  }

  &.open {
    .heading {
      margin-bottom: 15px;

      .ico-wrap {
        transform: rotate(45deg);
      }
    }
  }
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 30px;
  line-height: 1.1;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: all .3s linear;

  @include mobile {
    font-size: 22px;
  }
}

.ico-wrap {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform .3s ease-in-out;

  @include mobile {
    width: 40px;
    height: 40px;
  }
}

.faq-ico {
  color: var(--violet);
}

.submenu {
  color: #fff;
  max-height: 0;
  overflow-y: hidden;
  transition: max-height .3s ease-in-out;
}

.submenu--open {
  max-height: none;
}

.submenu--close {
  max-height: 0 !important;
}
</style>
