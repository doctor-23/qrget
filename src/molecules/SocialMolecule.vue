<template>
  <ul class="socials" :class="className">
    <li
        v-for="social in socials"
        :key="social.name"
    >
      <a
          :href="social.link"
          target="_blank"
      >

        <SvgSpriteAtom
            :name="social.name"
            :size-x="social.width"
            :size-y="social.height"
        />

      </a>
    </li>
  </ul>
</template>

<script>

import SvgSpriteAtom from "@/atoms/SvgSpriteAtom";
import socials from "@/constants/socials";

export default {
  data() {
    return {
      socials
    }
  },
  props: ['className'],
  components: { SvgSpriteAtom }
}
</script>

<style scoped lang="scss">
.socials {
  display: flex;
  gap: 25px;
}
</style>
