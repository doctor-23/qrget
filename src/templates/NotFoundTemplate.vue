<template>
  <section class="not-found">
    <div class="container">
      <div class="text">
        404
      </div>

      <div class="description">
        <p>
          Извините, страница, которую вы искали, не существует или больше не доступна. Проверьте URL-адрес, или вернитесь на главную
        </p>
      </div>

      <a href="/" class="btn">
        Вернуться на главную
      </a>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.not-found {
  padding: 60px 0 140px;

  @include tablet {
    padding: 30px 0 80px;
  }
}

.text {
  margin-bottom: 30px;
  font-size: 180px;
  font-weight: bold;
  line-height: 1.1;
  text-align: center;
  color: var(--violet);

  @include mobile {
    margin-bottom: 20px;
    font-size: 120px;
  }
}

.description {
  max-width: 700px;
  margin: 0 auto 40px;
  text-align: center;

  @include mobile {
    margin-bottom: 20px;
  }
}

.btn {
  margin: 0 auto;
}

</style>
