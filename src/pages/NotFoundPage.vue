<template>
  <div>
    <HeaderComponent />

    <NotFoundTemplate />

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import NotFoundTemplate from "@/templates/NotFoundTemplate";

export default {
  components: {HeaderComponent, FooterComponent, NotFoundTemplate}
}
</script>

<style scoped>

</style>
