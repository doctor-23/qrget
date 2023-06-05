<template>
  <div>
    <HeaderPersonalComponent />

    <main class="lk-page">

      <PersonalTemplate :codes="myCodes"/>

    </main>
  </div>
</template>

<script>

import HeaderPersonalComponent from "@/components/HeaderPersonalComponent";
import PersonalTemplate from "@/templates/PersonalTemplate";
import myCodes from "@/constants/myCodes";

export default {
  data() {
    return {
      myCodes
    }
  },
  components: { HeaderPersonalComponent, PersonalTemplate },
}
</script>

<style scoped>

</style>
