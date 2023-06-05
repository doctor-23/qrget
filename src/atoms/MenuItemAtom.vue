<template>
  <li>
    <a :href="link">
      {{ children }}
    </a>
  </li>
</template>

<script>
export default {
  name: "MenuItemAtom",
  props: ["link", "children"]
}
</script>

<style scoped>

</style>
