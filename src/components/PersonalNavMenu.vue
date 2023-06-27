<template>
  <aside class="menu">
    <div class="menu-wrap">
      <span class="menu-close">
          <SvgSpriteAtom
              name="close"
              width="20"
              height="20"
          />
      </span>

      <ul class="menu-list">

        <li
            v-for="( menu, index ) in content.menuList"
            :key="menu.text"
            :class="{
              active: activeMenu === index,
              disabled: menu.disabling && !content.payed
            }"
            @click="updateActiveMenu(index)"
        >
          {{ menu.text }}
        </li>

      </ul>
    </div>
  </aside>
</template>

<script>
import SvgSpriteAtom from "@/atoms/SvgSpriteAtom";

export default {
  props: ['content', 'activeMenu'],
  components: { SvgSpriteAtom },
  methods: {
    updateActiveMenu(index) {
      this.$emit('updateActiveMenu', index)
    }
  }

}
</script>

<style scoped lang="scss">
.menu {
  flex-shrink: 0;

  @include mobile {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: scale(0);
    background-color: rgba(106, 75, 153, 0.7);
    backdrop-filter: blur(2.5px);
    transition: opacity .3s ease-in-out;
  }

  &.open {
    transform: scale(1);
    opacity: 1;

    .menu-wrap {
      transform: scaleX(1);
    }
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 22px;

    li {
      min-width: 180px;
      padding: 10px 30px;
      color: #242424;
      line-height: 1.39;
      border: 1px solid #242424;
      border-radius: 30px;
      transition: background-color .3s ease-in-out;
      cursor: pointer;
      user-select: none;

      &.active, &:hover, &:focus-visible {
        background-color: var(--violet);

        @include mobile {
          background-color: var(--purpure);
        }
      }

      &.disabled {
        opacity: .6;
        pointer-events: none;
      }
    }
  }
}

.menu-wrap {
  @include mobile {
    position: absolute;
    right: 0;
    top: 0;
    width: max-content;
    min-height: 100vh;
    padding: 85px 20px;
    background-color: #FFFFFF;
    border-radius: 20px 0 0 20px;
    transform: scaleX(0);
    transform-origin: 100% 0;
    transition: transform .5s ease;
  }
}

.menu-close {
  display: none;

  @include mobile {
    position: absolute;
    top: 12px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  &:hover, &:focus-visible {
    .svg-ico {
      color: var(--purpure);
    }
  }

  .svg-ico {
    color: var(--violet);
    transition: color .3s ease-in-out;
  }
}
</style>
