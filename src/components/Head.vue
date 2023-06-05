<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <link rel="stylesheet" href="<%= BASE_URL %>css/main.min.css">

    <title>{{ title }}</title>
  </head>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss">

</style>
