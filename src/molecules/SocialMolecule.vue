<template>
  <ul class="socials" :class="className">
    <li v-for="social in socials" key="social.name">
      <a :href="social.link" target="_blank">
        <SvgSprite
            :name="social.name"
            :width="social.width"
            :height="social.height"
        />
      </a>
    </li>
  </ul>
</template>

<script>

import SvgSprite from "@/atoms/SvgSpriteAtom";
import socials from "@/constants/socials";

export default {
  data() {
    return {
      socials
    }
  },
  props: ['className'],
  components: { SvgSprite }
}
</script>

<style lang="scss">
.socials {
  display: flex;
  gap: 25px;
}
</style>
