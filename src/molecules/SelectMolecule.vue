<template>
  <div
      class="select"
      :class="[ {open: isOpen}, className]"
      @click="openSelect"
      v-click-outside="onClickOutside"
  >
    <div class="title">
      <div class="title-text">
        {{ placeholder }}
      </div>

      <div class="title-ico">
        <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.166 1.5L10.166 10.5L1.16602 1.5" stroke="#242424" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <div class="content">
      <div class="content-wrap">
        <label
            class="label"
            v-for="option in options"
            :key="option.value"
        >
          <input
              type="radio"
              :name="name"
              :value="option.value"
              @change="changeSelect(option.title, option.value, eventBusEvent)"
          >
          <span class="radio">
            {{ option.title }}
          </span>
        </label>

      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';
import eventBus from "@/eventBus";

export default {
  data() {
    return {
      isOpen: false,
      placeholder: this.currentValue.title
    }
  },
  // props: {
  //   className: String,
  //   options: Array,
  //   currentValue: Object,
  //   name: String
  // },
  props: ['className', 'options', 'currentValue', 'name', 'eventBusEvent'],
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    openSelect() {
      this.isOpen = !this.isOpen
    },
    changeSelect(text, value, name) {
      this.placeholder = text;
      this.isOpen = false;

      eventBus.$emit(this.eventBusEvent, value, name)
    },
    onClickOutside() {
      this.isOpen = false;
    },
  }
}

</script>

<style scoped lang="scss">
.select {
  position: relative;
  width: 260px;

  @include mobile {
    width: 100%;
  }

  &.open {
    .title {
      border-color: var(--purpure);
    }

    .title-ico {
      transform: rotate(180deg);

      @media screen and (max-width: 767.98px) {
        transform: rotate(360deg);
      }
    }

    .content {
      opacity: 1;
      transform: scale(1);
    }
  }

  &.active {
    .title {
      color: #fff;
    }
  }
}

.title {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 45px;
  padding: 0 10px;
  background-color: transparent;
  border: 1px solid #242424;
  border-radius: 5px;
  cursor: pointer;
  transition: border-color .3s ease-in-out;

  &:hover, &:focus-visible {
    border-color: var(--violet);
  }
}

.title-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: max-content;
  color: #242424;
  font-size: 16px;
}

.title-ico {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  transition: transform .3s ease-in-out;

  @include mobile {
    transform: rotate(270deg);
  }
}

.content {
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 8px 15px 8px 0;
  background-color: rgba(255, 255, 255, 0.7);;
  backdrop-filter: blur(2.5px);
  border: 1px solid #242424;
  border-radius: 5px;
  opacity: 0;
  transform: scale(0);
  transition: opacity .3s ease-in-out;

  &.no-scroll {
    .content-wrap {
      overflow-y: hidden;
    }
  }

}

.content-wrap {
  overflow-y: scroll;
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

.label {
  display: flex;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color .1s ease-in-out;

  &:hover {
    background-color: rgba(138, 153, 168, 0.15);
  }

  input {
    display: none !important;

    &:checked ~ .select-content__radio {

    }
  }
}
</style>
