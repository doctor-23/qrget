<template>
  <div>

    <HeaderComponent />

    <main class="instruction-page">

      <InstructionTemplate />

    </main>

    <FooterComponent />

  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import InstructionTemplate from "@/templates/InstructionTemplate";

export default {
  components: { HeaderComponent, FooterComponent, InstructionTemplate }
}
</script>

<style scoped lang="scss">


</style>
