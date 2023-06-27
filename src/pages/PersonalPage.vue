<template>
  <div>
    <HeaderPersonalComponent />

    <main class="lk-page">

      <PersonalTemplate :codes="myCodes" :content="PersonalContent"/>

    </main>
  </div>
</template>

<script>

import HeaderPersonalComponent from "@/components/HeaderPersonalComponent";
import PersonalTemplate from "@/templates/PersonalTemplate";
import PersonalContent from "@/constants/personalContent";
import myCodes from "@/constants/myCodes";

export default {
  data() {
    return {
      myCodes,
      PersonalContent
    }
  },
  components: { HeaderPersonalComponent, PersonalTemplate },
}
</script>

<style scoped lang="scss">
.lk-page {
  padding: 60px 0 200px;

  @include mobile {
    padding: 30px 0 112px;
  }
}
</style>
